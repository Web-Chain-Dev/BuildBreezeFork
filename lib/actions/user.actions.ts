"use server";
import axios from "axios";

import { revalidatePath } from "next/cache";

import User from "../database/models/user.model";
import { connectToDatabase } from "../database/mongoose";
import { handleError } from "../utils";
import { resolve } from "dns";

// CREATE
export async function createUser(user: CreateUserParams) {
  try {
    await connectToDatabase();

    const newUser = await User.create(user);

    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    handleError(error);
  }
}

// READ
export async function getUserById(userId: string) {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        await connectToDatabase();

        let user = await User.findOne({ clerkId: userId });

        if (!user) {
          user = await User.findOne({ clerkId: userId });
          throw new Error("User not found");
        }

        user = await User.findOne({ clerkId: userId });

        resolve(JSON.parse(JSON.stringify(user)));
      } catch (error) {
        reject(error);
      }
    }, 1000); // Delay of 1 second
  });
}

// UPDATE
export async function updateUser(clerkId: string, user: UpdateUserParams) {
  try {
    await connectToDatabase();

    const updatedUser = await User.findOneAndUpdate({ clerkId }, user, {
      new: true,
    });

    if (!updatedUser) throw new Error("User update failed");

    return JSON.parse(JSON.stringify(updatedUser));
  } catch (error) {
    handleError(error);
  }
}

// DELETE
export async function deleteUser(clerkId: string) {
  try {
    await connectToDatabase();

    // Find user to delete
    const userToDelete = await User.findOne({ clerkId });

    if (!userToDelete) {
      throw new Error("User not found");
    }

    // Delete user
    const deletedUser = await User.findByIdAndDelete(userToDelete._id);
    revalidatePath("/");

    return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null;
  } catch (error) {
    handleError(error);
  }
}

// USE CREDITS

export async function updatePlan(userId: string, newPlanId: string) {
  try {
    await connectToDatabase();

    const newPlan = await User.findOneAndUpdate(
      { _id: userId },
      { payPlan: newPlanId },
      { new: true }
    );

    if (!newPlan) throw new Error("Plan Update failed");

    return JSON.parse(JSON.stringify(newPlan));
  } catch (error) {
    handleError(error);
  }
}

// FIND USER'S PAYPLAN BY ID
export async function getUserPayPlanById(userId: string) {
  try {
    await connectToDatabase();

    // Query the database to find the user by their ID and project only the payPlan field
    const user = await User.findOne({ _id: userId }, { payPlan: 1, _id: 0 });

    if (!user) {
      throw new Error("User not found");
    }

    // Return the payPlan field value
    return user.payPlan;
  } catch (error) {
    handleError(error);
  }
}

// Function to add a user as a collaborator to a GitHub repository
export async function addUserToGitHubRepo(
  userId: string,
  githubUsername: string,
  repoOwner: string,
  repoName: string
) {
  try {
    // Replace 'your_github_token' with your actual GitHub token
    const githubToken = process.env.GITHUB_PERSONAL_ACCESS_TOKEN;

    await setGithubUsername(userId, githubUsername);

    // GitHub API endpoint for adding a collaborator
    const url = `https://api.github.com/repos/${repoOwner}/${repoName}/collaborators/${githubUsername}`;

    // Headers for the GitHub API request
    const headers = {
      Authorization: `token ${githubToken}`,
    };

    // Make the API request to add the user as a collaborator
    const response = await axios.put(url, {}, { headers });

    // Check if the request was successful
    if (response.status === 201) {
      console.log(
        `Successfully added ${githubUsername} as a collaborator to the repository.`
      );
      return true;
    } else {
      console.error(
        `Failed to add ${githubUsername} as a collaborator. Status code: ${response.status}`
      );
      return false;
    }
  } catch (error) {
    console.error(`Error adding ${githubUsername} as a collaborator:`, error);
    return false;
  }
}

export async function setGithubUsername(userId: string, newUsername: string) {
  try {
    const login = await User.findOneAndUpdate(
      { _id: userId },
      { loggedInToGithub: true },
      { new: true }
    );

    const username = User.findOneAndUpdate(
      { _id: userId },
      { githubUsername: newUsername },
      { new: true }
    );
    return JSON.parse(JSON.stringify(username, login));
  } catch (err) {
    handleError(err);
  }
}

export async function isLoggedInToGithub(userId: string) {
  try {
    await connectToDatabase();

    // Query the database to find the user by their ID and project only the loggedInToGithub field
    const user = await User.findOne(
      { _id: userId },
      { loggedInToGithub: 1, _id: 0 }
    );

    if (!user) {
      throw new Error("User not found");
    }

    // Return the loggedInToGithub field value
    return user.loggedInToGithub;
  } catch (error) {
    handleError(error);
  }
}

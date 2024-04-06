"use server";

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
export async function updateCredits(userId: string, creditFee: number) {
  try {
    await connectToDatabase();

    const updatedUserCredits = await User.findOneAndUpdate(
      { _id: userId },
      { $inc: { creditBalance: creditFee } },
      { new: true }
    );

    if (!updatedUserCredits) throw new Error("User credits update failed");

    return JSON.parse(JSON.stringify(updatedUserCredits));
  } catch (error) {
    handleError(error);
  }
}

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

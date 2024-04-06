"use server";

import { redirect } from "next/navigation";
import Stripe from "stripe";
import { handleError } from "../utils";
import { connectToDatabase } from "../database/mongoose";
import Transaction from "../database/models/transaction.model";
import { addUserToGitHubRepo, updatePlan } from "./user.actions";

export async function checkoutPlan(transaction: CheckoutTransactionParams) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

  const amount = Number(transaction.amount) * 100;

  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: "usd",
          unit_amount: amount,
          product_data: {
            name: transaction.plan,
          },
        },
        quantity: 1,
      },
    ],
    metadata: {
      plan: transaction.plan,
      buyerId: transaction.buyerId,
    },
    mode: "payment",
    success_url: `https://build-breeze.vercel.app/`,
    cancel_url: `https://build-breeze.vercel.app/`,
  });

  redirect(session.url!);
}

export async function createTransaction(transaction: CreateTransactionParams) {
  try {
    await connectToDatabase();

    const newTransaction = await Transaction.create({
      ...transaction,
      buyer: transaction.buyerId,
    });

    await updatePlan(transaction.buyerId, transaction.plan);

    const githubUsername = "WebchainDevelopment";
    const repoOwner = "Mif2006";
    const repoName = "BuildBreezeBoilerplate";

    // Grant access to the GitHub repository
    const success = await addUserToGitHubRepo(
      githubUsername,
      repoOwner,
      repoName
    );

    if (success) {
      console.log("Access granted to GitHub repository.");
    } else {
      console.error("Failed to grant access to GitHub repository.");
    }

    return JSON.parse(JSON.stringify(newTransaction));
  } catch (error) {
    handleError(error);
  }
}

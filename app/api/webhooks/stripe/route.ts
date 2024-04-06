/* eslint-disable camelcase */
import { createTransaction } from "@/lib/actions/transaction.action";
import { NextResponse } from "next/server";
import stripe from "stripe";

export async function POST(request: Request) {
 const body = await request.text();
 const sig = request.headers.get("stripe-signature") as string;
 const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!;

 let event;

 try {
    event = stripe.webhooks.constructEvent(body, sig, endpointSecret);
    // Handle the event here
    // For example, if you want to log the event type:
    console.log(`Received event: ${event.type}`);

    // After handling the event, return a successful response
    return NextResponse.json({ received: true });
 } catch (err: any) {
    // Log the error for debugging
    console.error(`Webhook error: ${err.message}`);

    // Return an error response
    return NextResponse.json({ message: "Webhook error", error: err.message });
 }
}



  // Get the ID and type
  // const eventType = event.type;

  // CREATE
//   if (eventType === "checkout.session.completed") {
//     const { id, amount_total, metadata } = event.data.object;

//     const transaction = {
//       stripeId: id,
//       amount: amount_total ? amount_total / 100 : 0,
//       plan: metadata?.plan || "",
//       buyerId: metadata?.buyerId || "",
//       createdAt: new Date(),
//     };

//     const newTransaction = await createTransaction(transaction);
    
//     return NextResponse.json({ message: "OK", transaction: newTransaction });
//   }

//   return new Response("", { status: 200 });
// }
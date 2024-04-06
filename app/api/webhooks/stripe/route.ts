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
    console.log(`Received event: ${event.type}`);

    // Handle the event here
    const eventType = event.type;

    // CREATE
    if (eventType === "checkout.session.completed") {
      const { id, amount_total, metadata } = event.data.object;

      const transaction = {
        stripeId: id,
        amount: amount_total ? amount_total / 100 : 0,
        plan: metadata?.plan || "",
        buyerId: metadata?.buyerId || "",
        createdAt: new Date(),
      };

      const newTransaction = await createTransaction(transaction);
      
      // Return a response indicating success and including the new transaction
      return NextResponse.json({ message: "OK", transaction: newTransaction });
    }

    // Return a successful response for other event types or if no action is taken
    return NextResponse.json({ received: true });
 } catch (err: any) {
    // Log the error for debugging
    console.error(`Webhook error: ${err.message}`);

    // Return an error response
    return NextResponse.json({ message: "Webhook error", error: err.message });
 }
}

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

    const eventType = event.type;

    if (eventType === "checkout.session.completed") {
      const { id, amount_total, metadata } = event.data.object;

      // Validate buyerId before creating the transaction
      const buyerId = metadata?.buyerId;
      if (!buyerId || !isValidObjectId(buyerId)) {
        console.error('Invalid buyerId:', buyerId);
        // Handle the error, e.g., by returning an error response
        return NextResponse.json({ message: "Invalid buyerId", error: "Invalid buyerId" });
      }

      const transaction = {
        stripeId: id,
        amount: amount_total ? amount_total / 100 : 0,
        plan: metadata?.plan || "",
        buyerId: buyerId, // Only include if valid
        createdAt: new Date(),
      };

      const newTransaction = await createTransaction(transaction);
      
      return NextResponse.json({ message: "OK", transaction: newTransaction });
    }

    return NextResponse.json({ received: true });
 } catch (err: any) {
    console.error(`Webhook error: ${err.message}`);
    return NextResponse.json({ message: "Webhook error", error: err.message });
 }
}

// Helper function to check if a string is a valid ObjectId
function isValidObjectId(id: string): boolean {
 return /^[0-9a-fA-F]{24}$/.test(id);
}

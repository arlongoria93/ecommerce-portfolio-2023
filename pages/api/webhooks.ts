// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import Stripe from "stripe";
import { buffer } from "micro";
import type { NextApiRequest, NextApiResponse } from "next";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function webhookHandler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2022-11-15",
  });
  if (req.method === "POST") {
    const buf = await buffer(req);
    const sig = req.headers["stripe-signature"]!;
    let event: Stripe.Event;
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;
    try {
      if (!sig || !webhookSecret) return;
      event = stripe.webhooks.constructEvent(buf, sig, webhookSecret);
    } catch (err: any) {
      console.log(err);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }
    console.log("Success:", event);
    res.status(200).json({ received: true });
  }
}

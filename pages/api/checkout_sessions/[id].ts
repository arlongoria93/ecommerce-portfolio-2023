import { NextApiRequest, NextApiResponse } from "next";
import Strip from "stripe";

const stripe = new Strip(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2022-11-15",
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const id = req.query.id as string;
  try {
    if (!id.startsWith("cs_")) {
      throw Error("Incorrect Checkout Session ID");
    }
    const checkout_session = await stripe.checkout.sessions.retrieve(
      id as string
    );
    res.status(200).json(checkout_session);
  } catch (err: any) {
    res.status(500).json({ statusCode: 500, message: err.message });
  }
}

import { NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(request) {
  if (request.method !== "POST") {
    return res.sendStatus(405);
  }
  const body = await request.json();

  if (body.lineItems.length === 0) {
    return new Response("Error", {
      status: 405,
    });
  }

  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "", {
      apiVersion: "2020-08-27",
    });

    const session = await stripe.checkout.sessions.create({
      success_url: "https://sanacjaostrow.netlify.app/success",
      cancel_url: "https://sanacjaostrow.netlify.app/cancel",
      line_items: body.lineItems,
      mode: "payment",
      custom_fields: [
        {
          key: "order_comments",
          label: {
            type: "custom",
            custom: "Uwagi do zamówienia np. dotyczące stolika",
          },
          type: "text",
          optional: true, // Pole opcjonalne
        },

        // {
        //   key: "phone_number",
        //   label: {
        //     type: "custom",
        //     custom: "Numer telefonu",
        //   },
        //   type: "text",
        //   optional: true, // Pole wymagane
        // },
      ],
    });
    return NextResponse.json({ session });
  } catch (err) {
    console.log("BROKED");
    console.log(err);
    return new Response("Error", {
      status: 405,
    });
  }
}

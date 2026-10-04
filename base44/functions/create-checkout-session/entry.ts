import { secrets } from "base44:runtime";

const PRICE_MAP = {
  "starter": {
    "monthly": "price_1UMs7VIfI96QPT6lT0RLG9JI",
    "annual": "price_1UMs8KIfI96QPT6lP4aiTEwb"
  },
  "professional": {
    "monthly": "price_1UMs8NIfI96QPT6l4fb4CV40",
    "annual": "price_1UMs8SIfI96QPT6lCL8Uxd7b"
  },
  "business": {
    "monthly": "price_1UMs8VIfI96QPT6lKDent3gP",
    "annual": "price_1UMs8ZIfI96QPT6liR9UtHga"
  }
};

export default async function(req) {
  try {
    const body = await req.json();
    const { plan, billing_cycle, company_details, origin } = body;

    if (!plan || !billing_cycle) {
      return Response.json({ error: "Missing plan or billing cycle" }, { status: 400 });
    }

    const priceId = PRICE_MAP[plan]?.[billing_cycle];
    if (!priceId) {
      return Response.json({ error: "Invalid plan or billing cycle" }, { status: 400 });
    }

    const baseOrigin = origin || "https://app.base44.com";
    const params = new URLSearchParams();
    params.append("mode", "subscription");
    params.append("line_items[0][price]", priceId);
    params.append("line_items[0][quantity]", "1");
    params.append("success_url", `${baseOrigin}/subscribe?status=success`);
    params.append("cancel_url", `${baseOrigin}/subscribe?status=cancelled&plan=${plan}`);
    params.append("metadata[base44_app_id]", Deno.env.get("BASE44_APP_ID"));

    if (company_details) {
      params.append("metadata[company_name]", company_details.company_name || "");
      params.append("metadata[contact_name]", company_details.contact_name || "");
      params.append("metadata[email]", company_details.email || "");
      params.append("metadata[phone]", company_details.phone || "");
      params.append("metadata[plan]", plan);
      params.append("metadata[billing_cycle]", billing_cycle);
      if (company_details.email) {
        params.append("customer_email", company_details.email);
      }
    }

    const response = await fetch("https://api.stripe.com/v1/checkout/sessions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${secrets.get("STRIPE_SECRET_KEY")}`,
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: params,
    });

    const session = await response.json();

    if (session.error) {
      console.error("Stripe error:", session.error);
      return Response.json({ error: session.error.message }, { status: 400 });
    }

    return Response.json({ url: session.url });
  } catch (error) {
    console.error("Checkout session error:", error);
    return Response.json({ error: error.message }, { status: 500 });
  }
}
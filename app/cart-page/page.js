import Stripe from "stripe";
import Navbar from "../components/navbar";
import CartView from "../components/cart-view";

async function getStripeProducts() {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY ?? "", {
    apiVersion: "2020-08-27",
  });
  const res = await stripe.prices.list({
    expand: ["data.product"],
  });
  const prices = res.data;
  return prices;
}

export default async function cartPage() {
  const products = await getStripeProducts();

  return (
    <>
      <Navbar />
      {/* <PageHeader>Cart</PageHeader> */}
      <div className="max-w-3xl mx-auto mt-44 mb-28">
        <CartView />
      </div>
    </>
  );
}

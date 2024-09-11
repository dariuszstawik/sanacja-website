import { client } from "@/lib/contentful/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Stripe from "stripe";
import ProductCard from "../components/product-card";
import ParagraphWithImage from "../components/paragraph-with-image";
import Navbar from "../components/navbar";

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

async function getContentfulContent() {
  const resContent = await client.getEntries({
    content_type: "products",
  });
  return resContent.items;
}

export default async function Zarezerwuj() {
  const stripeProducts = await getStripeProducts();
  const contentfulProducts = await getContentfulContent();
  console.log("----------------");
  console.log(stripeProducts[2].product.metadata.key);
  return (
    <>
      <Navbar />
      <main className="mt-32">
        {/* <h2 classNAme="mt-32">{stripeProducts[0].product.name}</h2> */}

        <ul>
          {contentfulProducts.map((contentfulProduct, i) => {
            return (
              <li key={i}>
                <ParagraphWithImage
                  productCardImg={`https://${contentfulProduct.fields.image.fields.file.url}`}
                  alt=""
                  title={documentToReactComponents(
                    contentfulProduct.fields.title
                  )}
                  productCardTitle={contentfulProduct.fields.cardTitle}
                  icon={`https://${contentfulProduct.fields.icon.fields.file.url}`}
                  href="/"
                  isFromContentful
                  hasOrderBar
                  stripeProduct={stripeProducts.filter(
                    (stripeProduct) =>
                      stripeProduct.product.metadata.key ===
                      contentfulProduct.fields.stripeKey
                  )}
                  contentfulProduct={contentfulProduct}
                >
                  {documentToReactComponents(
                    contentfulProduct.fields.description
                  )}
                </ParagraphWithImage>
                <hr className="w-screen h-1 text-black my-10" />
              </li>
            );
          })}
        </ul>

        {/* <ProductCard
          productCardImg="/menu-sanacyjne.jpg"
          alt=""
          productCardTitle="Sanacyjne"
          // productCardSubtitle="Złóż rezerwację"
          icon="/menu-sanacyjne-min.svg"
          href="/"
        />
        <ProductCard
          productCardImg="/menu-vege.jpg"
          alt=""
          productCardTitle="Vege"
          // productCardSubtitle="Złóż rezerwację"
          icon="/menu-vege-min.svg"
          href="/"
        />

        <ProductCard
          productCardImg="/menu-rybne.jpg"
          alt=""
          productCardTitle="Rybne"
          // productCardSubtitle="Złóż rezerwację"
          icon="/menu-rybne-min.svg"
          href="/"
        /> */}
      </main>
    </>
  );
}

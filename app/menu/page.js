import { client } from "@/lib/contentful/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Navbar from "../components/navbar";
import Image from "next/image";

async function getContentfulContent() {
  const resContent = await client.getEntries({
    content_type: "menu",
  });
  return resContent.items[0];
}

export default async function Menu() {
  const content = await getContentfulContent();

  return (
    <>
      <Navbar />
      <div className="mt-28 relative w-screen h-[300px]  overflow-hidden">
        <Image
          src="/hero-image.jpg"
          alt="zdjęcie pracownika"
          fill={true}
          sizes={"100vw"}
          className="w-full object-cover object-center"
        />
        <h1
          className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-primaryOrange 
        [text-shadow:_7px_5px_20px_#000000]"
        >
          Menu
        </h1>
      </div>
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <img src="/menu-asset.svg" alt="menu" className="mx-auto my-12" />
        <h1>{content.fields.title}</h1>
        <article className="text-center">
          {documentToReactComponents(content.fields.body)}
        </article>
        <img src="/menu-asset.svg" alt="menu" className="mx-auto my-10" />
      </section>
    </>
  );
}

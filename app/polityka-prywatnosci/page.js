import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Navbar from "../components/navbar";
import { client } from "@/lib/contentful/client";

async function getContentfulContent() {
  const resContent = await client.getEntries({
    content_type: "privacyPolicy",
  });
  return resContent.items[0];
}

export default async function PolitykaPrywatnosci() {
  const content = await getContentfulContent();
  return (
    <>
      <Navbar />
      <section className="mt-44 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="mb-8">{content.fields.title}</h1>
        <article className="">
          {documentToReactComponents(content.fields.body)}
        </article>
      </section>
    </>
  );
}

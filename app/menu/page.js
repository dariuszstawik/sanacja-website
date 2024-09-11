import { client } from "@/lib/contentful/client";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

async function getContentfulContent() {
  const resContent = await client.getEntries({
    content_type: "menu",
  });
  return resContent.items[0];
}

export default async function Menu() {
  const content = await getContentfulContent();

  return (
    <section className="mt-28 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <img src="/menu-asset.svg" alt="menu" className="mx-auto my-12" />
      <h1>{content.fields.title}</h1>
      <article className="text-center">
        {documentToReactComponents(content.fields.body)}
      </article>
      <img src="/menu-asset.svg" alt="menu" className="mx-auto my-10" />
    </section>
  );
}

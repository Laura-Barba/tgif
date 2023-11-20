import Image from "next/image";
import { getPageBySlug } from "@/Api/ContentfulApi";
import { ComponentRouter } from "@/Components/ComponentRouter";
import { NotFound } from "@/Components/Not found";

export default async function Home({ params }) {
  let page = await getPageBySlug(params.slug[0]);
  let content = page?.fields?.contents;
  // console.log('content',content)
  return (
    <main className="flex min-h-screen flex-col px-6 pb-6 pt-24 md:px-20 md:pd-20 md:pt-28 lg:px-24 lg:pd-24 lg:pt-36">
      {content ? (
        <>
          {content.map((component, i) => {
            return (
              <>
                <ComponentRouter
                  component={component.sys.contentType?.sys.id}
                  fields={component.fields}
                />
              </>
            );
          })}
        </>
      ) : (
        <>
          <p>Add 404 page</p>
          {/* <NotFound /> */}
        </>
      )}
    </main>
  );
}

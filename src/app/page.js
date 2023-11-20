import { getPageById, getPageBySlug } from "@/Api/ContentfulApi";
import { ComponentRouter } from "@/Components/ComponentRouter";

export default async function Home() {
  let page = await getPageBySlug("home");
  let content = page?.fields?.contents;

  return (
    <div className="min-h-screen container px-6 pb-10 pt-24 md:px-20 md:pd-20 md:pt-28 lg:px-24 lg:pd-24 lg:pt-36">
      <div>
        {content && (
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
        )}
      </div>
    </div>
  );
}

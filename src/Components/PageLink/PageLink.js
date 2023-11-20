export default function PageLink({ component, fields }) {

    return (
        <div className="flex flex-col lg:flex-row lg:justify-between lg:gap-4">
            {fields.links.map(link => {
                return (
                    <>
                        <a href={link.fields.page.fields.slug} className="bg-white no-underline text-darkGreen rounded-3xl mb-4 p-8 lg:mb-0 lg:w-4/12">
                            <h2 className="font-bold pb-3">
                                {link.fields.pageLinkTitle}
                            </h2>
                            <div>
                                {link.fields.pageLinkDescription}
                            </div>
                        </a>
                    </>
                )
            })}
        </div>
    )
}
export default function Tag({ tags }) {

    return (
        <div className="flex flex-row justify-center md:justify-normal">
            {tags?.map(tag => {
                const tagArray = [tag]
                return (
                    <>
                        {tagArray.map((t, i) => {
                            return (
                                <div key={i} className="bg-beige rounded p-2 mr-2 text-sm md:text-base">
                                    {t.fields.tagName}
                                </div>
                            )
                        })}

                    </>
                )
            })}
        </div>
    )
}
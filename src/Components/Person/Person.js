export default function Person({ persons }) {

    return (
        <>
            {persons.length >= 2 ? (
                <div className="flex flex-col p-0 md:pt-6 md:pb-4 md:pr-0 md:pl-16">
                    <div className="flex w-[205px] md:w-[240px] relative m-auto">
                        {persons.map((person, i) => {
                            return (
                                <div key={i} className="last:absolute left-24">
                                    <img src={person.fields.image.fields.file.url} className="object-scale-down" />
                                </div>
                            )
                        })}
                    </div>
                    <div className="flex flex-col pb-3 md:pb-0 pt-3">
                        {persons.map((person, i) => {
                            return (
                                <div key={i}className="text-ultraLightGray text-sm  m-auto md:m-0">
                                    {person.fields.name}
                                </div>
                            )
                        })}
                    </div>
                </div>
            ) :
                (
                    <>
                        {persons.map((person, i) => {
                            return (
                                <>
                                    <div key={i} className="flex p-0 md:pt-6 md:pb-4 md:pr-0 flex-col md:flex-row md:flex-col w-auto md:w-[220px]">
                                        <img src={person.fields.image.fields.file.url}
                                            className="h-[115px] w-[115px] object-scale-down m-auto md:m-0 md:m-auto" />
                                        <div className="text-ultraLightGray text-sm py-3 m-auto md:m-0 md:text-center">{person.fields.name}</div>
                                    </div>
                                </>
                            )
                        })}
                    </>
                )}
        </>
    )
}
import Event from "../Event/Event"

export default function EventLayout({ component, fields }) {
    const date = new Date(fields.date);
    var eventDate = date.toLocaleDateString().split('T')[0];

    return (
        <>
            <div className="text-darkGreen">
                <div className="font-bold text-lg md:text-2xl pb-3 md:pb-5">
                    {eventDate}
                </div>
                <h1 className="font-bold text-3xl md:text-5xl lg:text-6xl" >
                    {fields.title}
                </h1>
                <div className="text-center font-bold text-lg md:text-2xl p-4 md:p-8">
                    {fields.description}
                </div>
            </div>
            <Event events={fields.events} />
        </>
    )
}

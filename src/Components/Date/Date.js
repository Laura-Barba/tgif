export default function DateComponent({ component, fields }) {
    console.log('date', fields)

    // hitta korrect localSting / options. 
    const date = new Date(fields.date);
    var eventDate = date.toLocaleDateString().split('T')[0];
    
    return (
        <div className="flex flex-col">
            <a href={fields.link.fields.slug} 
            className="text-darkGreen font-bold no-underline text-lg md:text-3xl 
            rounded-full bg-white py-5 my-3 pl-0 text-center w-full xl:w-8/12
            m-0 lg:mx-auto shadow-md shadow-gray">{eventDate}</a>
        </div>
    )
}
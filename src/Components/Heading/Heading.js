export default function Heading({ component, fields }) {
    console.log('heading', fields)
    return (
        <>
            <div className="text-center font-bold  p-4 md:p-8 text-darkGreen">
                <h1 className="text-3xl md:text-6xl">{fields.headingTitle}</h1>
            </div>
            <div className="text-center font-bold text-lg md:text-xl p-4 md:p-8 text-darkGreen">
                {fields.headingDescription}
            </div>
        </>
    )
}
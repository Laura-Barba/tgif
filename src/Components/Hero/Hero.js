

export default function Hero({ component, fields }) {
    // console.log('hero', fields)
    return (
        <>
            <img
                
                src={fields.heroImage.fields.file.url}
                alt={fields.heroImage.fields.title}
            />
            {/* <div>
                {fields.heroTitle}
            </div> */}
        </>
    )
}
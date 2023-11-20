import Link from 'next/link';


export default function Sidebar(/*{ component, fields }*/) {
    // console.log('nav', fields)
    return ( 
        <div className="bg-lightGray fixed w-full p-5 md:w-1/2 h-full overflow-auto animate-slide" >
            <div className="flex flex-col font-bold text-2xl">
            <a href="/upcoming-events" className="no-underline text-darkGreen">Kommande</a>
            <a href="/book-techmentor" className="no-underline text-darkGreen">techMentor</a>
            <a href="/past-events" className="no-underline text-darkGreen">Föregående</a>
            </div>
            {/* {fields?.navigationLinks.map(nav => { return (console.log('navLink', nav.fields.page)) })}
            {fields?.navigationLinks.map(nav => {
                return (
                    <div className="">
                        <a href={nav.fields.page.fields.slug} className="no-underline text-darkGreen">{nav.fields.page.fields.pageTitle}</a>
                    </div>
                )
            })} */}
        </div>
    )


};
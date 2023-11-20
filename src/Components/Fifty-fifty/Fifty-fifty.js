import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { RichText } from '../RichText';

export default function FiftyFifty({ component, fields }) {
    console.log('50/50 dfdf', component)

    return (
        <div className="flex flex-col md:flex-row bg-beige">
            <img src={fields?.content?.fields.image.fields.file.url}
                className="w-full md:w-1/2"
                alt={fields?.content?.fields.image.fields.title} />
            <div className="p-10">
                <RichText richText={fields?.content.fields.description}/>
            </div>
            {/* {fields.content.fields.pageLink} */}
        </div>
    )
}


// {/* <div className="w-full md:w-1/2 bg-beige md:p-12 p-6">
// {fields.content?.fields.description.content.map(content => {
//     console.log('50/50content', content)
//     return (
//         <div className="">
//             {content.content.map(c => {
//                 return (
//                     <div className="">
//                         <div>{c.value}</div>
//                         {<div>{documentToReactComponents(c.value)}</div>}
//                     </div >
//                 )
//             })}
//         </div >
//     )
// })}
// </div > * /}
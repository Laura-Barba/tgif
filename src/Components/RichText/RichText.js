import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, MARKS, INLINES, Inline } from '@contentful/rich-text-types';
import { Children } from 'react';

export function getRichTextRenderOption() {
    return{
        renderMark: {
            [MARKS.BOLD]: (text) => <strong className="text-bold">{text}</strong>,
            [MARKS.UNDERLINE]: (text) => <u className="text-underline">{text}</u>,
            [MARKS.ITALIC]: (text) => <em className="italic">{text}</em>
        },
        renderNode: {
            [BLOCKS.HEADING_2]: (node, children) => (
                <h2 className="text-2" >{children}</h2>
            ),
            [BLOCKS.HEADING_3]: (node, children) => (
                <h3 className='text-h3'>{children}</h3>
            ),

        }
    } 
      
}

export default function RichText({ richText }) {
    // console.log('richText', richText)

   
    return (
        <div>{documentToReactComponents(richText, getRichTextRenderOption())}

        </div>
    )
}
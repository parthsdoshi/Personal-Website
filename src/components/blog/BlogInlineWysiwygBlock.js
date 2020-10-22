import React from "react"
import ReactMarkdown from 'react-markdown'
import { BlocksControls } from 'react-tinacms-inline'
import DevelopInlineWysiwyg from '../../components/DevelopInlineWysiwyg';

export const BlogInlineWysiwyg = ({index, data}) => {
    console.log(data)
    return (
        <BlocksControls index={index}>
            <DevelopInlineWysiwyg
                name="content"
                sticky={false}
            >
                <ReactMarkdown>
                    {data.content}
                </ReactMarkdown>
            </DevelopInlineWysiwyg>
        </BlocksControls>
    )
}

export const blog_inline_wysiwyg_template = {
    label: 'Markdown Content',
    defaultItem: {
        markdown: 'Add content here.',
    },
    fields: [],
}
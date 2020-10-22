import React from "react"
import ReactMarkdown from 'react-markdown'
import { BlocksControls } from 'react-tinacms-inline'
import DevelopInlineWysiwyg from '../../components/DevelopInlineWysiwyg';

export const BlogInlineWysiwyg = ({index, data}) => (
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

export const blog_inline_wysiwyg_template = {
    label: 'Markdown',
    defaultItem: {
        content: 'Add content here.',
    },
    fields: [],
}
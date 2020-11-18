import React from "react"
import Img from "gatsby-image"
import ReactMarkdown from 'react-markdown'

const BlogBlocks = ({ blocks }) => (
    <>
        {blocks.map((c) => {
            switch (c.strapi_component) {
                case "content.rich-text":
                    return <ReactMarkdown>{c.rich_text}</ReactMarkdown>
                case "content.image":
                    return <Img fluid={ c.image.childImageSharp.fluid } />
                default:
                    return null
            }
        })}
    </>
)

export default BlogBlocks
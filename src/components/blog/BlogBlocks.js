import React from "react"
import Img from "gatsby-image"
import ReactMarkdown from 'react-markdown'
import Video from "./blocks/Video"

const BlogBlocks = ({ blocks }) => (
    <>
        {blocks.map((c, index) => {
            switch (c.strapi_component) {
                case "content.rich-text":
                    return <ReactMarkdown key={index} linkTarget="_blank">{c.rich_text}</ReactMarkdown>
                case "content.image":
                    return <Img key={index} fluid={ c.image.childImageSharp.fluid } />
                case "content.video":
                    return <Video key={index} h264={c.video.videoH264} vp9={c.video.videoVP9} screenshots={c.video.videoScreenshots} />
                default:
                    return null
            }
        })}
    </>
)

export default BlogBlocks
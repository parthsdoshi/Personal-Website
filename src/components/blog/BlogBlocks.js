import React from "react"
import Img from "gatsby-image"
import ReactMarkdown from 'react-markdown'
import Video from "./blocks/Video"
import SingleMedia from "./blocks/SingleMedia"

const BlogBlocks = ({ blocks }) => (
    <>
        {blocks.map((c, index) => {
            switch (c.strapi_component) {
                case "content.rich-text":
                    return <ReactMarkdown key={index} linkTarget="_blank">{c.rich_text}</ReactMarkdown>
                case "content.image":
                    return (
                        <SingleMedia key={index} caption={c.image.caption}>
                            <Img fluid={ c.image.localFile.childImageSharp.fluid } />
                        </SingleMedia>
                    )
                case "content.video":
                    return (
                        <SingleMedia key={index} caption={c.video.caption}>
                            <Video h264={c.video.localFile.videoH264} vp9={c.video.localFile.videoVP9} screenshots={c.video.localFile.videoScreenshots} />
                        </SingleMedia>
                    )
                default:
                    return null
            }
        })}
    </>
)

export default BlogBlocks
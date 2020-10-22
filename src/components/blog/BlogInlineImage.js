import React from "react"
import { useStaticQuery, graphql } from 'gatsby';
import { InlineImage, BlocksControls } from 'react-tinacms-inline';
import Img from "gatsby-image"

import styled  from 'styled-components'
import { parse, getUploadDir } from "./common";

const NoOverflowDiv = styled.div`
    overflow: none;
`

export const generateBlogInlineImage = (blogDataPath) => (
    ({name,  alt, children, previewSrc}) => (
        <NoOverflowDiv>
            <InlineImage
                name={name}
                parse={(media) => parse(media, blogDataPath)}
                uploadDir={getUploadDir}
                previewSrc={(fieldValue, fieldPath, formValues) => (
                    previewSrc(formValues)
                )}
                alt={alt}
                focusRing={{offset: 0}}
            >
                {children}
            </InlineImage>
        </NoOverflowDiv>
    )
)

export const generateBlogInlineImageBlock = (BlogInlineImage, blocks, cmsEnabled) => (
    ({ index }) => {
        return (
            <BlocksControls index={index}>
                <BlogInlineImage
                    name="image"
                    alt="test"
                    previewSrc={formValues => {
                        let imageSharp = formValues.jsonNode.blocks[index].image.childImageSharp
                        return (imageSharp ? imageSharp.fluid : "https://bulma.io/images/placeholders/96x96.png")}}
                >
                    {({ src }) => (
                        <Img
                            fluid={ cmsEnabled ? src : blocks[index].image.childImageSharp.fluid }
                        />
                    )}
                </BlogInlineImage>
            </BlocksControls>
        )
    }
)

export const blog_inline_image_template = {
    label: 'Image',
    defaultItem: {
        image: '../../../images/placeholder_1280x960.png',
    },
    fields: [],
}
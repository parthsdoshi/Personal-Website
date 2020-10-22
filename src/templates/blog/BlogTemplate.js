import React from "react"
// import { useRemarkForm } from 'gatsby-tinacms-remark';
import { useJsonForm } from 'gatsby-tinacms-json';
import { usePlugin, useCMS } from 'tinacms';
import { graphql, Link } from "gatsby";
import Img from "gatsby-image"
import { InlineForm, InlineTextarea, InlineBlocks } from 'react-tinacms-inline';
import styled  from 'styled-components'

import Navbar from "../../components/Navbar";
import PaddedSection from "../../components/Section"
import NoOverflowBackgroundImage from '../../components/NoOverflowBackgroundImage'
import { blog_inline_image_template, generateBlogInlineImage, generateBlogInlineImageBlock } from '../../components/blog/BlogInlineImage'
import { BlogInlineWysiwyg, blog_inline_wysiwyg_template } from '../../components/blog/BlogInlineWysiwygBlock'


const NegativePaddingDiv = styled.div`
    margin-top: -40vh;
`

const MarginRightSpan = styled.span`
    margin-right: 1em;
`

const BlogTemplate = ({ data }) => {
    const cms = useCMS()
    const [blogData, form] = useJsonForm(data.testJsonJson)
    const BlogInlineImage = generateBlogInlineImage(blogData.fileRelativePath)
    const BlogInlineImageBlock = generateBlogInlineImageBlock(BlogInlineImage)
    const blog_blocks = {
        markdown: {
            Component: BlogInlineWysiwyg,
            template: blog_inline_wysiwyg_template,
        },
        image: {
            Component: BlogInlineImageBlock,
            template: blog_inline_image_template,
        },
    }
    usePlugin(form)
    return (
        <InlineForm form={form}>
            <BlogInlineImage
                name="rawJson.titleImage"
                previewSrc={formValues => (formValues.jsonNode.titleImage.childImageSharp ? formValues.jsonNode.titleImage.childImageSharp.fluid : "https://bulma.io/images/placeholders/1280x960.png")}
                alt="food-image"
            >
                {({ src }) => (
                    <NoOverflowBackgroundImage 
                        fluid={cms.enabled ? src : blogData.titleImage.childImageSharp.fluid}
                    >
                        <section className="hero is-fullheight">
                            <div className="hero-head">
                                <PaddedSection style={{backgroundColor: "white"}} isnavbar>
                                    <Navbar downloadResume={false} hideChefNotification/>
                                </PaddedSection>
                                <PaddedSection>
                                    <Link to="/chef">
                                        <button className="button is-rounded">
                                            <MarginRightSpan>
                                                <span className="icon has-text-info">
                                                    <i className="fas fa-arrow-circle-left"></i>
                                                </span>
                                            </MarginRightSpan>
                                            Back to Posts
                                        </button>
                                    </Link>
                                </PaddedSection>
                            </div>
                        </section>
                    </NoOverflowBackgroundImage>
                )}
            </BlogInlineImage>
            <NegativePaddingDiv>
                <PaddedSection paddingLeft="6rem" paddingRight="6rem">
                    <div className="card">
                        <div className="card-content">
                            <div className="media">
                                <div className="media-left">
                                    <figure className="image is-96x96">
                                        <BlogInlineImage
                                            name="rawJson.authorImage"
                                            rawImage={blogData.rawJson.authorImage}
                                            previewSrc={formValues => (formValues.jsonNode.authorImage.childImageSharp ? formValues.jsonNode.authorImage.childImageSharp.fluid : "https://bulma.io/images/placeholders/96x96.png")}
                                            alt="author-image"
                                            blogDataPath={blogData.fileRelativePath}
                                        >
                                            {({ src }) => (
                                                <Img
                                                    fluid={
                                                        cms.enabled ? src : blogData.authorImage.childImageSharp.fluid
                                                    }
                                                />
                                            )}
                                        </BlogInlineImage>
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <p className="title is-4">
                                        <InlineTextarea name="rawJson.title" />
                                    </p>
                                    <p className="subtitle is-5">
                                        <InlineTextarea name="rawJson.author" />
                                    </p>
                                    <p className="subtitle is-6">
                                        {new Date(blogData.date).toDateString()}
                                    </p>
                                </div>
                            </div>
                            <div className="content">
                                <InlineBlocks name="rawJson.blocks" blocks={blog_blocks} />
                            </div>
                        </div>
                        <footer className="card-footer">
                            <a href="#" className="card-footer-item">Twitter</a>
                            <a href="#" className="card-footer-item">FB</a>
                            <a href="#" className="card-footer-item">Reddit</a>
                        </footer>
                    </div>
                </PaddedSection>
            </NegativePaddingDiv>
        </InlineForm>
    )
}

export const blogQuery = graphql`
    query chefBlogPost($id: String) {
        testJsonJson(id: { eq: $id }) {
            titleImage {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
            }
            authorImage {
                childImageSharp {
                    fluid(maxWidth: 96) {
                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                    }
                }
            }
            title
            date
            author
            slug
            rawJson
            fileRelativePath
            blocks {
                content
                image {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid_withWebp_tracedSVG
                        }
                    }
                }
            }
        }
    }
`

export default BlogTemplate;
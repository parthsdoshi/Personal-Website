import React from "react"
import { useRemarkForm } from 'gatsby-tinacms-remark';
import { usePlugin, useCMS } from 'tinacms';
import { graphql, Link } from "gatsby";
import Img from "gatsby-image"
import { InlineForm, InlineTextarea } from 'react-tinacms-inline';
import styled  from 'styled-components'

import Navbar from "../../components/Navbar";
import PaddedSection from "../../components/Section"
import DevelopInlineWysiwyg from '../../components/DevelopInlineWysiwyg';
import NoOverflowBackgroundImage from '../../components/NoOverflowBackgroundImage'
import BlogInlineImage from '../../components/blog/BlogInlineImage'


const NegativePaddingDiv = styled.div`
    margin-top: -40vh;
`

const MarginRightSpan = styled.span`
    margin-right: 1em;
`

const BlogTemplate = ({ data }) => {
    const cms = useCMS()
    const [blogData, form] = useRemarkForm(data.markdownRemark)
    usePlugin(form)
    console.log(data)
    return (
        <InlineForm form={form}>
            <BlogInlineImage
                name="rawFrontmatter.titleImage"
                rawImage={blogData.rawFrontmatter.titleImage}
                previewSrc={formValues => {
                    return (formValues.frontmatter.titleImage.childImageSharp.fluid)
                }}
                alt="food-image"
                blogDataPath={blogData.fileRelativePath}
            >
                {({ src }) => (
                    <NoOverflowBackgroundImage 
                        fluid={
                            cms.enabled ? src : blogData.frontmatter.titleImage.childImageSharp.fluid
                        }>
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
                                            name="rawFrontmatter.authorImage"
                                            rawImage={blogData.rawFrontmatter.authorImage}
                                            previewSrc={formValues => {
                                                return (formValues.frontmatter.authorImage.childImageSharp.fluid)
                                            }}
                                            alt="author-image"
                                            blogDataPath={blogData.fileRelativePath}
                                        >
                                            {({ src }) => (
                                                <Img
                                                    fluid={
                                                        cms.enabled ? src : blogData.frontmatter.authorImage.childImageSharp.fluid
                                                    }
                                                />
                                            )}
                                        </BlogInlineImage>
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <p className="title is-4">
                                        <InlineTextarea name="rawFrontmatter.title" />
                                    </p>
                                    <p className="subtitle is-5">
                                        <InlineTextarea name="rawFrontmatter.author" />
                                    </p>
                                    <p className="subtitle is-6">
                                        {new Date(blogData.frontmatter.date).toDateString()}
                                    </p>
                                </div>
                            </div>
                            <div className="content">
                                <DevelopInlineWysiwyg
                                    name="rawMarkdownBody"
                                    sticky={false}
                                >
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: blogData.html,
                                        }}
                                    />
                                </DevelopInlineWysiwyg>
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
        markdownRemark(id: { eq: $id }) {
            ...TinaRemark
            frontmatter {
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
            }
            html
            fileRelativePath
        }
    }
`

export default BlogTemplate;
import React from "react"
import { useRemarkForm } from 'gatsby-tinacms-remark';
import { usePlugin, useCMS } from 'tinacms';
import { graphql } from "gatsby";
import { InlineForm, InlineTextarea } from 'react-tinacms-inline';
import styled  from 'styled-components'

import Navbar from "../Navbar";
import PaddedSection from "../Section"
import DevelopInlineWysiwyg from '../DevelopInlineWysiwyg';
import NoOverflowBackgroundImage from '../NoOverflowBackgroundImage'
import BlogInlineImage from './BlogInlineImage'


const NegativePaddingDiv = styled.div`
    margin-top: -40vh;
`

const BlogTemplate = ({ data, className }) => {
    const cms = useCMS()
    const [blogData, form] = useRemarkForm(data.markdownRemark)
    usePlugin(form)
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
                        className={className} 
                        fluid={
                            cms.enabled ? src : blogData.frontmatter.titleImage.childImageSharp.fluid
                        }>
                        <section className="hero is-fullheight">
                            <div className="hero-head">
                                <PaddedSection style={{backgroundColor: "white"}} isnavbar>
                                    <Navbar downloadResume={false} />
                                </PaddedSection>
                            </div>
                        </section>
                    </NoOverflowBackgroundImage>
                )}
            </BlogInlineImage>
            <NegativePaddingDiv>
                <PaddedSection paddingLeft="6rem" paddingRight="6rem">
                    <div class="card">
                        <div class="card-content">
                            <div className="media">
                                <div class="media-left">
                                    <figure class="image is-96x96">
                                        <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image" />
                                    </figure>
                                </div>
                                <div class="media-content">
                                    <p class="title is-4">
                                        <InlineTextarea name="rawFrontmatter.title" />
                                    </p>
                                    <p class="subtitle is-5">
                                        <InlineTextarea name="rawFrontmatter.author" />
                                    </p>
                                    <p class="subtitle is-6">
                                        {new Date(blogData.frontmatter.date).toDateString()}
                                    </p>
                                </div>
                            </div>
                            <div class="content">
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
                        <footer class="card-footer">
                            <a href="#" class="card-footer-item">Twitter</a>
                            <a href="#" class="card-footer-item">FB</a>
                            <a href="#" class="card-footer-item">Reddit</a>
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
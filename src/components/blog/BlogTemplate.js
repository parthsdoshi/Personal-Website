import React from "react"
import { useRemarkForm } from 'gatsby-tinacms-remark';
import { usePlugin, useCMS } from 'tinacms';
import { graphql } from "gatsby";
import { InlineForm, InlineTextarea, InlineImage } from 'react-tinacms-inline';
import Img from "gatsby-image"

import NavbarFooter from "../NavbarFooter"
import Section from "../Section"
import DevelopInlineWysiwyg from '../DevelopInlineWysiwyg';

const BlogTemplate = ({ data }) => {
    const cms = useCMS()
    const [blogData, form] = useRemarkForm(data.markdownRemark)
    usePlugin(form)
    return (
        <NavbarFooter hideFooter={true}>
            <InlineForm form={form}>
                <Section>
                    <div className="card">
                        <div className="card-image">
                            <div className="columns">
                                <div className="column">
                                    <InlineImage
                                        name="rawFrontmatter.titleImage"
                                        parse={media => {
                                            console.log(media.filename ? `./${media.filename}` : null)
                                            return media.filename ? `./${media.filename}` : null
                                        }}
                                        uploadDir={blogPost => {
                                            const postPathParts = blogPost.initialValues.fileRelativePath.split(
                                              '/'
                                            )
                                            const postDirectory = postPathParts
                                              .splice(0, postPathParts.length - 1)
                                              .join('/')
                                            console.log(postDirectory)
                                            return postDirectory
                                        }}
                                        previewSrc={(fieldValue, fieldPath, formValues) =>
                                            formValues.frontmatter.titleImage.childImageSharp.fluid.src
                                        }
                                        focusRing={false}
                                        alt="food-image"
                                    >
                                        {props => {
                                            console.log(props)
                                            return (
                                            <Img
                                                fluid={
                                                    cms.enabled
                                                        ? props.src
                                                        : blogData.frontmatter.titleImage.childImageSharp.fluid
                                                }
                                                {...props}
                                            />)
                                        }}
                                    </InlineImage>
                                    {/* <figure className="image is-2by1">
                                        <img
                                            src="https://bulma.io/images/placeholders/1280x960.png"
                                            alt="Placeholder image"
                                        />
                                    </figure> */}
                                </div>
                                <div className="column is-one-third">
                                    Recipe here
                                </div>
                            </div>
                        </div>
                        <div className="card-content">
                            <div className="media">
                                <div className="media-left">
                                    <figure className="image is-48x48">
                                        <img
                                            src="https://bulma.io/images/placeholders/96x96.png"
                                            alt="Placeholder image"
                                        />
                                    </figure>
                                </div>
                                <div className="media-content">
                                    <div className="title is-4">
                                        <InlineTextarea name="rawFrontmatter.title" />
                                    </div>
                                    <div className="subtitle is-6">
                                        <InlineTextarea name="rawFrontmatter.author" className="subtitle is-6"/>
                                    </div>
                                </div>
                            </div>

                            <div className="content">
                                <DevelopInlineWysiwyg name="rawMarkdownBody" sticky={true}>
                                    <div
                                        dangerouslySetInnerHTML={{
                                            __html: blogData.html,
                                        }}
                                    />
                                </DevelopInlineWysiwyg>
                            </div>
                        </div>
                    </div>
                </Section>
            </InlineForm>
        </NavbarFooter>
    )
}

export default BlogTemplate

export const blogQuery = graphql`
    query chefBlogPost($id: String) {
        markdownRemark(id: { eq: $id }) {
            ...TinaRemark
            frontmatter {
                titleImage
                title
                date
                author
                slug
            }
            html
        }
    }
`
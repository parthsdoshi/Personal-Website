import React from "react"
import { useRemarkForm } from 'gatsby-tinacms-remark';
import { usePlugin } from 'tinacms';
import { graphql } from "gatsby";
import { InlineForm, InlineTextarea } from 'react-tinacms-inline';

import NavbarFooter from "../NavbarFooter"
import Section from "../Section"
import DevelopInlineWysiwyg from '../DevelopInlineWysiwyg';

const BlogTemplate = ({ data }) => {
    console.log(data)
    const [blogData, form] = useRemarkForm(data.markdownRemark)
    usePlugin(form)
    return (
        <NavbarFooter hideFooter={true}>
            <InlineForm form={form}>
                <Section>
                    <div class="card">
                        <div class="card-image">
                            <div className="columns">
                                <div className="column">
                                    <figure class="image is-2by1">
                                        <img
                                            src="https://bulma.io/images/placeholders/1280x960.png"
                                            alt="Placeholder image"
                                        />
                                    </figure>
                                </div>
                                <div className="column is-one-third">

                                </div>
                            </div>
                        </div>
                        <div class="card-content">
                            <div class="media">
                                <div class="media-left">
                                    <figure class="image is-48x48">
                                        <img
                                            src="https://bulma.io/images/placeholders/96x96.png"
                                            alt="Placeholder image"
                                        />
                                    </figure>
                                </div>
                                <div class="media-content">
                                    <p class="title is-4">
                                        <InlineTextarea name="rawFrontmatter.title" />
                                    </p>
                                    <p class="subtitle is-6">
                                        <InlineTextarea name="rawFrontmatter.author" />
                                    </p>
                                </div>
                            </div>

                            <div class="content">
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
                title
                date
                author
                slug
            }
            html
        }
    }
`
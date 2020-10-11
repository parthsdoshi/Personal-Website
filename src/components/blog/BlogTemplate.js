import React from "react"
import { useRemarkForm } from 'gatsby-tinacms-remark';
import { usePlugin } from 'tinacms';

import NavbarFooter from "../NavbarFooter"
import Section from "../Section"
import DevelopInlineWysiwyg from '../DevelopInlineWysiwyg';

const BlogTemplate = ({ data }) => {
    console.log(data)
    const [headerData, form] = useRemarkForm(data.markdownRemark)
    usePlugin(form)
    return (
        <NavbarFooter hideFooter={true}>
            <Section>
                <DevelopInlineWysiwyg name="rawMarkdownBody" sticky={true}>
                    <div
                        dangerouslySetInnerHTML={{
                            __html: headerData.html,
                        }}
                    />
                </DevelopInlineWysiwyg>
            </Section>
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
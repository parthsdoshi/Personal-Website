import React from "react";
import { useStaticQuery, graphql } from 'gatsby';
import { usePlugin } from 'tinacms';
import { useRemarkForm } from 'gatsby-tinacms-remark';
import { InlineForm, InlineTextarea } from 'react-tinacms-inline';

import DevelopInlineWysiwyg from "../DevelopInlineWysiwyg";

const BlogHeader = () => {
    const data = useStaticQuery(graphql`
        query {
            markdownRemark(fileRelativePath: { eq: "/src/data/blog_header.md" }) {
                ...TinaRemark
                frontmatter {
                    title
                    date
                }
                html
            }
        }
    `)
    console.log(data)
    const [headerData, form] = useRemarkForm(data.markdownRemark)
    usePlugin(form)

    return (
        <>
        <InlineForm form={form}>
            <section class="hero is-dark is-bold box">
                <div class="hero-body">
                    <div class="container">
                    <h1 class="title">
                        <InlineTextarea name="rawFrontmatter.title" />
                    </h1>
                    <h2 class="subtitle">
                        <DevelopInlineWysiwyg
                            name="rawMarkdownBody"
                            sticky={false}
                        >
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: headerData.html,
                                }}
                            />
                        </DevelopInlineWysiwyg>
                    </h2>
                    </div>
                </div>
            </section>
        </InlineForm>
        </>
    )
}

export default BlogHeader
import React from 'react';

import { Link, useStaticQuery, graphql } from 'gatsby';
import { useRemarkForm } from 'gatsby-tinacms-remark';
import { usePlugin } from 'tinacms';
import { InlineForm, InlineTextarea } from 'react-tinacms-inline';

import ProfilePicture from './ProfilePhoto';
import DevelopInlineWysiwyg from './DevelopInlineWysiwyg';

const Header = () => {
    // The below query id was taken from the GraphQL explorer to grab only the header info.
    // We need both the TinaRemark fragment as well as the frontmatter and html fields.
    // This is because the TinaRemark fragment is only used to populate fields needed for inline editing.
    // The frontmatter and html fields are what are used in production to create the static queries.
    const data = useStaticQuery(graphql`
        query {
            markdownRemark(fileRelativePath: { eq: "/src/data/header.md" }) {
                ...TinaRemark
                frontmatter {
                    title
                    date
                }
                html
            }
        }
    `)
    const [headerData, form] = useRemarkForm(data.markdownRemark)
    usePlugin(form)

    let topPadding = { paddingTop: "1.5em" }

    return (
        <InlineForm form={form}>
            <section className="hero">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns box is-vcentered">
                            <div className="column is-half">
                                <figure className="image">
                                    <ProfilePicture
                                        imgStyle={{ borderRadius: "1%" }}
                                    />
                                </figure>
                            </div>
                            <div className="column is-half">
                                <div className="has-text-centered">
                                    <div className="content title">
                                        <InlineTextarea name="rawFrontmatter.title" />
                                    </div>
                                    <div
                                        className="content subtitle"
                                        style={topPadding}
                                    >
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
                                    </div>
                                    <div style={topPadding}>
                                        <Link
                                            className="button is-link"
                                            to="/resume"
                                        >
                                            Résumé
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </InlineForm>
    )
}

export default Header
import React from 'react';

import { Link, useStaticQuery, graphql } from 'gatsby';
import { useRemarkForm } from 'gatsby-tinacms-remark';
import { usePlugin } from 'tinacms';
import { InlineForm, InlineTextField, InlineTextarea } from 'react-tinacms-inline';
import { InlineWysiwyg } from 'react-tinacms-editor';

import ProfilePicture from './ProfilePhoto';

const Header = () => {
    // The below query id was taken from the GraphQL explorer to grab only the header info.
    const data = useStaticQuery(graphql`
        {
            file(base: {eq: "header.md"}) {
                childMarkdownRemark {
                    frontmatter {
                        title
                        date
                    }
                    ...TinaRemark
                }
            }
        }
    `)
    const [_headerData, form] = useRemarkForm(data.file.childMarkdownRemark)
    usePlugin(form)

    let topPadding = {paddingTop: "1.5em"}

    return (
        <InlineForm form={form}>
            <section className="hero">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns box is-vcentered">
                            <div className="column is-half">
                                <figure className="image">
                                    <ProfilePicture imgStyle={{borderRadius: "1%"}} />
                                </figure>
                            </div>
                            <div className="column is-half">
                                <div className="has-text-centered">
                                    <div className="content title">
                                        <InlineTextarea name="rawFrontmatter.title" />
                                    </div>
                                    <div className="content subtitle" style={topPadding}>
                                        <InlineWysiwyg name="rawMarkdownBody" />
                                    </div>
                                    <div style={topPadding}>
                                        <Link className="button is-link" to="/resume">
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

export default Header;
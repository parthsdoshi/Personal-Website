import React from 'react';

import { Link, useStaticQuery, graphql } from 'gatsby';

import ProfilePicture from './ProfilePhoto';
import ReactMarkdown from 'react-markdown'

const Header = () => {
    // The below query id was taken from the GraphQL explorer to grab only the header info.
    // We need both the TinaRemark fragment as well as the frontmatter and html fields.
    // This is because the TinaRemark fragment is only used to populate fields needed for inline editing.
    // The frontmatter and html fields are what are used in production to create the static queries.
    const data = useStaticQuery(graphql`
        query {
            strapiHome {
                title
                blurb
            }
        }
    `)
    let { strapiHome } = data

    let topPadding = { paddingTop: "1.5em" }

    return (
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
                                    {strapiHome.title}
                                </div>
                                <div
                                    className="content subtitle"
                                    style={topPadding}
                                >
                                    <ReactMarkdown>
                                        {strapiHome.blurb}
                                    </ReactMarkdown>
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
    )
}

export default Header
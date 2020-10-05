import React from 'react';

import { Link, useStaticQuery, graphql } from 'gatsby';

import ProfilePicture from './ProfilePhoto';

const Header = () => {
    // The below query id was taken from the GraphQL explorer to grab only the header info.
    const data = useStaticQuery(graphql`
        {
            file(base: {eq: "header.md"}) {
                childMarkdownRemark {
                    html
                    frontmatter {
                        title
                        date
                    }
                }
            }
        }
    `)
    const headerData = data.file.childMarkdownRemark

    let topPadding = {paddingTop: "1.5em"}

    return (
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
                                    <p>{headerData.frontmatter.title}</p>
                                </div>
                                <div className="content subtitle" style={topPadding} dangerouslySetInnerHTML={{__html: headerData.html}} />
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
    )
}

export default Header;

import React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image"

import PaddedSection from "../Section"

const BlogCatalog = () => {
    // Due to constraints of `useStaticQuery`, we cannot import DEFAULT_PATH from common/chef and use it here :(
    // https://github.com/gatsbyjs/gatsby/issues/10482
    const data = useStaticQuery(graphql`
        query {
            allTestJsonJson(
                filter: { fileRelativePath: { glob: "/src/content/chef/*/*" } }
                sort: {fields: date, order: DESC}
            ) {
                edges {
                    node {
                        id
                        title
                        date
                        author
                        slug
                        titleImage {
                            childImageSharp {
                                fluid {
                                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                                }
                            }
                        }
                        authorImage {
                            childImageSharp {
                                fluid {
                                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                                }
                            }
                        }
                    }
                }
            }
        }
    `)

    let fullCard = { height: "100%" }
    return (
        <PaddedSection>
            <div className="columns is-multiline">
                {data.allTestJsonJson.edges.map(({ node }) => (
                    <div className="column is-one-third" key={node.id}>
                        <Link to={`/chef/${node.slug}`}>
                            <div className="card" style={fullCard}>
                                <div className="card-image">
                                    <figure className="image">
                                        <Img fluid={node.titleImage.childImageSharp.fluid} alt="food-image" />
                                    </figure>
                                </div>
                                <div className="card-content">
                                    <div className="media">
                                        <div className="media-left">
                                            <figure className="image is-48x48">
                                                <Img fluid={node.authorImage.childImageSharp.fluid} alt="author-image" />
                                            </figure>
                                        </div>
                                        <div className="media-content">
                                            <p className="title is-4">
                                                {node.title}
                                            </p>
                                            <p className="subtitle is-6">
                                                {node.author}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="content">
                                        TODO
                                    </div>

                                    <footer className="card-footer">
                                        <p className="card-footer-item">
                                            <time>
                                                {new Date(node.date).toDateString()}
                                            </time>
                                        </p>
                                        <a className="card-footer-item">
                                            Share
                                        </a>
                                    </footer>
                                </div>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </PaddedSection>
    )
}

export default BlogCatalog
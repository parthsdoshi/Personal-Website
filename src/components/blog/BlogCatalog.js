import React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby';
import Img from "gatsby-image"

import PaddedSection from "../Section"

const BlogCatalog = () => {
    const data = useStaticQuery(graphql`
        query {
            allStrapiArticle(
                sort: {fields: publishedAt, order: DESC}
            ) {
                edges {
                    node {
                        strapiId
                        title
                        publishedAt
                        description
                        author {
                            name
                            picture {
                                childImageSharp {
                                    fluid {
                                        ...GatsbyImageSharpFluid_withWebp_tracedSVG
                                    }
                                }
                            }
                        }
                        slug
                        cover {
                            childImageSharp {
                                fluid {
                                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                                }
                            }
                        }
                        category {
                            slug
                        }
                    }
                }
            }
        }
    `)
    let articles = data.allStrapiArticle.edges

    let fullCard = { height: "100%" }
    return (
        <PaddedSection>
            <div className="columns is-multiline">
                {articles.map(({ node }) => (
                    <div className="column is-one-third" key={node.strapiId}>
                        <Link to={`/blog/${node.category.slug}/${node.slug}`}>
                            <div className="card" style={fullCard}>
                                <div className="card-image">
                                    <figure className="image">
                                        <Img fluid={node.cover.childImageSharp.fluid} alt="food-image" />
                                    </figure>
                                </div>
                                <div className="card-content">
                                    <div className="media">
                                        <div className="media-left">
                                            <figure className="image is-48x48">
                                                <Img fluid={node.author.picture.childImageSharp.fluid} alt="author-image" />
                                            </figure>
                                        </div>
                                        <div className="media-content">
                                            <p className="title is-4">
                                                {node.title}
                                            </p>
                                            <p className="subtitle is-6">
                                                {node.author.name}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="content">
                                        {node.description}
                                    </div>

                                    <footer className="card-footer">
                                        <p className="card-footer-item">
                                            <time>
                                                {new Date(node.publishedAt).toDateString()}
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
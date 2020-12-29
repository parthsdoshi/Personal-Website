import React from "react"
import { graphql, Link } from "gatsby";
import Img from "gatsby-image"
import styled  from 'styled-components'

import Navbar from "../../components/Navbar";
import PaddedSection from "../../components/Section"
import NoOverflowBackgroundImage from '../../components/NoOverflowBackgroundImage'
import BlogBlocks from '../../components/blog/BlogBlocks'
import SEO from "../../components/seo";


const NegativePaddingDiv = styled.div`
    margin-top: -34vh;
`

const MarginRightSpan = styled.span`
    margin-right: 1em;
`

const BlogTemplate = ({ data }) => (
    <>
        <SEO title={data.strapiArticle.title} description={data.strapiArticle.description} />
        <NoOverflowBackgroundImage 
            fluid={data.strapiArticle.cover.localFile.childImageSharp.fluid}
        >
            <section className="hero is-fullheight">
                <div className="hero-head">
                    <PaddedSection style={{backgroundColor: "white"}} isnavbar>
                        <Navbar downloadResume={false} hideChefNotification/>
                    </PaddedSection>
                    <PaddedSection>
                        <Link to="/blog">
                            <button className="button is-rounded">
                                <MarginRightSpan>
                                    <span className="icon has-text-info">
                                        <i className="fas fa-arrow-circle-left"></i>
                                    </span>
                                </MarginRightSpan>
                                Back to Posts
                            </button>
                        </Link>
                    </PaddedSection>
                </div>
            </section>
        </NoOverflowBackgroundImage>
        <NegativePaddingDiv>
            <PaddedSection paddingLeft="5vw" paddingRight="5vw">
                <div className="card">
                    <div className="card-content">
                        <div className="media">
                            <div className="media-left">
                                <figure className="image is-96x96">
                                    <Img
                                        fluid={ data.strapiArticle.author.picture.localFile.childImageSharp.fluid }
                                    />
                                </figure>
                            </div>
                            <div className="media-content">
                                <p className="title is-4">
                                    {data.strapiArticle.title}
                                </p>
                                <p className="subtitle is-5">
                                    {data.strapiArticle.author.name}
                                </p>
                                <p className="subtitle is-6">
                                    {new Date(data.strapiArticle.publishedAt).toDateString()}
                                </p>
                            </div>
                        </div>
                        <div className="content">

                            <article class="message is-dark">
                                <div class="message-body">
                                    <BlogBlocks blocks={data.strapiArticle.content} />
                                </div>
                            </article>
                        </div>
                    </div>
                    <footer className="card-footer">
                        <a href="#" className="card-footer-item">Twitter</a>
                        <a href="#" className="card-footer-item">FB</a>
                        <a href="#" className="card-footer-item">Reddit</a>
                    </footer>
                </div>
            </PaddedSection>
        </NegativePaddingDiv>
    </>
)

export const blogQuery = graphql`
    query blogPost($strapiId: Int) {
        strapiArticle(strapiId: { eq: $strapiId }) {
            strapiId
            cover {
                caption
                alternativeText
                localFile {
                    childImageSharp {
                        fluid {
                            ...GatsbyImageSharpFluid_withWebp_tracedSVG
                        }
                    }
                }
            }
            author {
                name
                picture {
                    caption
                    alternativeText
                    localFile {
                        childImageSharp {
                            fluid {
                                ...GatsbyImageSharpFluid_withWebp_tracedSVG
                            }
                        }
                    }
                }
            }
            title
            description
            publishedAt
            slug
            content {
                strapi_component
                rich_text
                image {
                    caption
                    alternativeText
                    localFile {
                        childImageSharp {
                            fluid {
                                ...GatsbyImageSharpFluid_withWebp_tracedSVG
                            }
                        }
                    }
                }
                video {
                    caption
                    alternativeText
                    localFile {
                        videoVP9 {
                            path
                            ext
                        }
                        videoH264 {
                            path
                            ext
                        }
                        videoScreenshots {
                            childImageSharp {
                                fluid {
                                    ...GatsbyImageSharpFluid_withWebp_tracedSVG
                                }
                            }
                            publicURL
                        }
                    }
                }
                quote
            }
        }
    }
`

export default BlogTemplate;
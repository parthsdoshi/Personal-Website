import React from "react"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

import SEO from "../components/seo"
import NavbarFooter from "../components/NavbarFooter"

export const cat404Data = graphql`
  query {
    strapiGlobal {
      notFoundImage {
        localFile {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
const NotFoundPage = ({ data }) => {
  let topPadding = {paddingTop: "1.5em"}
  let marginRightStyle = { marginRight: ".3em" }

  return (
    <NavbarFooter>
      <SEO title="404: Not found" />
      <section className="hero">
        <div className="hero-body">
          <div className="container">
            <div className="columns box is-vcentered">
              <div className="column is-half">
                <Img fluid={data.strapiGlobal.notFoundImage.childImageSharp.fluid} alt="Cat hiding under papers imitating a 404 not found." />
              </div>
              <div className="column is-half has-text-centered">
                <div className="content title">
                  <h1>NOT FOUND</h1>
                </div>
                <div className="content subtitle">
                  <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
                </div>
                <div style={topPadding}>
                    <Link className="button is-dark" to="/">
                      <span className="icon" style={marginRightStyle}>
                          <i className="fas fa-home"></i>
                      </span>
                      Let's go home
                    </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </NavbarFooter>
  )
}

export default NotFoundPage;
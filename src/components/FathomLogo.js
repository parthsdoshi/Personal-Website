import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const FathomLogo = () => {
  const data = useStaticQuery(graphql`
    query {
      strapiWorkExperience(slug: {eq: "fathom-health"}) {
        logo {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp_tracedSVG
            }
          }
        }
      }
    }
  `)
  let image = data.strapiWorkExperience.logo

  return <Img fluid={image.childImageSharp.fluid} alt="Fathom Health's logo." />
}

export default FathomLogo;
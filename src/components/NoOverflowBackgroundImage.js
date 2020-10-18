import React from "react"
import BackgroundImage from 'gatsby-background-image'
import styled from 'styled-components'

const ChildrenBackgroundImage = ({ className, fluid, children }) => {
    return (
        <BackgroundImage 
            className={className} 
            fluid={fluid}
        >
            {children}
        </BackgroundImage>
    )
}

const NoOverflowBackgroundImage = styled(ChildrenBackgroundImage)`
  width: 100%;
  background-position: 50% 0%;
  background-repeat: repeat-y;
  background-size: cover;
  overflow: hidden;
`

export default NoOverflowBackgroundImage
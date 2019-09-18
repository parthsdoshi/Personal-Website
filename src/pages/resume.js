import React from "react"

import { graphql } from "gatsby";

const Resume = ({ data }) => (
    <iframe src={data.site.siteMetadata.resume} style={{position: "fixed", top: 0, left: 0, bottom: 0, right: 0, width: "100%", height: "100%", border: "none", margin: 0, padding: 0, overflow: "hidden", zIndex:999999}} title="resume">
        Your browser doesn't support iframes.
        You can find the resume here:
        <a href={data.site.siteMetadata.resume}>Resume</a>
    </iframe>
)

export default Resume;

export const resumeQuery = graphql`
    query {
        site {
            siteMetadata {
                resume
            }
        }
    }
`
import React, { useEffect, useState } from "react"

import { graphql } from "gatsby";
import NavbarFooter from "../components/NavbarFooter";

const Resume = ({ data }) => {
    const [height, setHeight] = useState("100%")
    useEffect(() => {
        document.documentElement.style.overflowY = "hidden"
        // 96 is calculated height of header
        setHeight((document.documentElement.clientHeight - 96).toString() + "px", [])

        return () => {
            document.documentElement.style.overflowY = "auto"
        }
    })

    return (
        <NavbarFooter hideFooter={true}>
            <iframe src={data.site.siteMetadata.resume} style={{position: "relative", overflowY: "hidden", width: "100%", height: height, border: "none", padding: 0}} title="resume">
                <a href={data.site.siteMetadata.resume}>
                    Parth Doshi's very interesting résumé. You're seeing this text because you probably don't have javascript enabled!
                </a>
            </iframe>
        </NavbarFooter>
    )
}

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

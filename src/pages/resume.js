import React, { useEffect, useState } from "react"

import { graphql } from "gatsby";
import NavbarFooter from "../components/NavbarFooter";
import SEO from "../components/seo";

const Resume = ({ data }) => {
    let resumeLink = data.strapiGlobal.resume_link
    const [height, setHeight] = useState("100%")
    useEffect(() => {
        document.documentElement.style.overflowY = "hidden"
        // 96 is calculated height of header
        setHeight((document.documentElement.clientHeight - 96).toString() + "px")

        window.addEventListener('resize', () => {
            setHeight((document.documentElement.clientHeight - 96).toString() + "px")
        })

        return () => {
            document.documentElement.style.overflowY = "auto"
        }
    }, [])

    return (
        <NavbarFooter hideFooter downloadResume>
            <SEO title="Résumé" />
            <iframe src={resumeLink} style={{position: "relative", overflowY: "hidden", width: "100%", height: height, border: "none", padding: 0}} title="resume">
                <a href={resumeLink}>
                    Parth Doshi's very interesting résumé. You're seeing this text because you probably don't have javascript enabled!
                </a>
            </iframe>
        </NavbarFooter>
    )
}

export default Resume;

export const resumeQuery = graphql`
    query {
        strapiGlobal {
            resume_link
        }
    }
`

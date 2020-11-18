import React from "react"

import NavbarFooter from "../components/NavbarFooter"
import PaddedSection from "../components/Section"
import SEO from "../components/seo"
import BlogHeader from "../components/blog/BlogHeader"
import BlogCatalog from "../components/blog/BlogCatalog"


const BlogPage = () => {
    return (
        <NavbarFooter hideFooter hideChefNotification>
            <SEO title="Blog" />
            <PaddedSection paddingBottom="0" paddingTop="1em">
                <BlogHeader />
            </PaddedSection>
            <BlogCatalog />
        </NavbarFooter>
    )
}


export default BlogPage
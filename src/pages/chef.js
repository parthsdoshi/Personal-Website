import React from "react"
import { useCMS } from 'tinacms'
import slugify from "slugify"

import NavbarFooter from "../components/NavbarFooter"
import PaddedSection from "../components/Section"
import SEO from "../components/seo"
import BlogHeader from "../components/blog/BlogHeader"
import BlogCatalog from "../components/blog/BlogCatalog"

import { DEFAULT_AUTHOR, DEFAULT_PATH, DEFAULT_TITLEIMAGE } from "../shared/chef"

function createBlogPostSlug(form) {
    // Normalizes slug for a human-readable uri.
    let folder = form.slug ? form.slug : form.title
    return slugify(folder)
}

function BlogPostCreator(JsonCreatorPlugin) {
    return new JsonCreatorPlugin({
        label: "Create Post",
        fields: [
            {
                name: "title",
                component: "text",
                label: "Title",
                description: "The title of your new post",
                required: true,
            },
            {
                name: "date",
                component: "date",
                label: "Date",
                description: "The default will be today.",
            },
            {
                name: "author",
                component: "text",
                label: "Author",
                description: `Who wrote this? The default author is ${DEFAULT_AUTHOR}.`,
            },
            {
                name: "slug",
                component: "text",
                label: "Filename / Slug",
                placeholder: "",
                description:
                    "What you want to name the file this post is contained in. The default is inferred from the title.",
            },
        ],
        filename: form => {
            let slug = createBlogPostSlug(form)
            return `${DEFAULT_PATH}/${slug}/index.json`
        },
        data: form => ({
            title: form.title,
            titleImage: "../../../images/placeholder_1280x960.png",
            authorImage: "../../../images/placeholder_96x96.png",
            date: (form.date ? form.date : new Date()).toISOString(),
            author: form.author ? form.author : "Parth Doshi",
            slug: createBlogPostSlug(form),
        }),
    })
}

const ChefPage = () => {
    const cms = useCMS()
    // We use the below to dynamically load tina cms plugins.
    React.useEffect(() => {
        if (cms.enabled) {
            import("react-tinacms-date").then(({ DateFieldPlugin }) => {
                cms.plugins.add(DateFieldPlugin)
            })
            import('gatsby-tinacms-json').then(({ JsonCreatorPlugin }) => {
                cms.plugins.add(BlogPostCreator(JsonCreatorPlugin))
            })
        }
    }, [cms.enabled, cms.plugins])

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


export default ChefPage
import React from "react"
import { useCMS } from 'tinacms'
import slugify from "slugify"

import NavbarFooter from "../components/NavbarFooter"
import SEO from "../components/seo"
import BlogCatalog from "../components/blog/BlogCatalog"

import { DEFAULT_AUTHOR, DEFAULT_PATH, DEFAULT_TITLEIMAGE } from "../shared/chef"

function createBlogPostSlug(form) {
    // Normalizes slug for a human-readable uri.
    let folder = form.slug ? form.slug : form.title
    return slugify(folder)
}

function BlogPostCreator(RemarkCreatorPlugin) {
    return new RemarkCreatorPlugin({
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
            return `${DEFAULT_PATH}/${slug}/index.md`
        },
        frontmatter: form => ({
            title: form.title,
            titleImage: null,
            date: (form.date ? form.date : new Date()).toISOString(),
            author: form.author ? form.author : "Parth Doshi",
            slug: createBlogPostSlug(form),
        }),
        body: form => "Add content here."
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
            import('gatsby-tinacms-remark').then(({ RemarkCreatorPlugin }) => {
                cms.plugins.add(BlogPostCreator(RemarkCreatorPlugin))
            })
        }
    }, [cms.enabled, cms.plugins])

    return (
        <NavbarFooter hideFooter>
            <SEO title="Food" />
            <BlogCatalog />
        </NavbarFooter>
    )
}


export default ChefPage
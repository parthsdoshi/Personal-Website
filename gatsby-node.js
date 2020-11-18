/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path');


exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions
    const blogPostTemplate = path.resolve(`src/templates/blog/BlogTemplate.js`)

    // Query for markdown nodes to use in creating pages.
    const { errors, data } = await graphql(`
        query getEdges {
            allStrapiArticle {
                edges {
                    node {
                        strapiId
                        slug
                        category {
                            slug
                        }
                    }
                }
            }
        }
    `)

    if (errors) {
        reporter.panicOnBuild(`Error while running GraphQL query: ${errors}`)
        return
    }

    // Create blog post pages.
    data.allStrapiArticle.edges.forEach(({ node }) => {
        createPage({
            path: `/blog/${node.category.slug}/${node.slug}`,
            component: blogPostTemplate,
            context: {
                // Add optional context data to be inserted
                // as props into the page component..
                //
                // The context data can also be used as
                // arguments to the page GraphQL query.
                //
                // The page "path" is always available as a GraphQL
                // argument.
                strapiId: node.strapiId,
            },
        })
    })
}
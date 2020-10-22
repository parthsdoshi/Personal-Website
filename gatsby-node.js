/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path")
const { DEFAULT_PATH } = require("./src/shared/chef")

exports.createSchemaCustomization = ({ actions }) => {
    const typeDefs = `
      type TestJsonJsonBlocks implements Node {
        content: String
        image: File
      }
      type TestJsonJson implements Node {
        titleImage: File
        authorImage: File
        title: String
        date: Date
        blocks: [TestJsonJsonBlocks]
      }
    `
    actions.createTypes(typeDefs)
}

exports.createPages = async ({ graphql, actions, reporter }) => {
    const { createPage } = actions
    const blogPostTemplate = path.resolve(`src/templates/blog/BlogTemplate.js`)

    // Take the chef path, grab any folder (each post is a folder), grab any file in that folder
    const blogContentPath = path.join(DEFAULT_PATH, "*", "*")

    // Query for markdown nodes to use in creating pages.
    const { errors, data } = await graphql(`
        query getEdges {
            allTestJsonJson( filter: { fileRelativePath: { glob: "${blogContentPath}" } }) {
                edges {
                    node {
                        id
                        slug
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
    data.allTestJsonJson.edges.forEach(({ node }) => {
        createPage({
            path: `/chef/${node.slug}`,
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
                id: node.id,
            },
        })
    })
}
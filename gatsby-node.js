const path = require("path")
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions
    fmImagesToRelative(node);

    if(node.internal.type === "MarkdownRemark") {
        const slug = path.basename(node.fileAbsolutePath, ".md")
        //console.log("@@@@", slug)
        //console.log("@@@@", node.fileAbsolutePath)
        createNodeField({
            node,
            name: "slug",
            value: slug
        })
        //console.log(JSON.stringify(node, undefined, 4))
    }
}

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const blogTemplate = path.resolve("./src/templates/work.js")
    const res = await graphql(`
        query {
            allMarkdownRemark {
                edges {
                    node {
                        fields {
                            slug
                        }
                    }
                }
            }
        }
    `)

    res.data.allMarkdownRemark.edges.forEach((edge) => {
        createPage({
            component: blogTemplate,
            path: `/work/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        })
    })
}
import React from "react"
import { graphql } from "gatsby"

//import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"

import Head from "../components/head"

import Img from "gatsby-image"

export const query = graphql`
    query (
        $slug: String!
    ) {
        markdownRemark (
        fields: {
            slug: {
            eq: $slug
            }
        }
        ) {
        frontmatter {
            title
            featuredImage {
                childImageSharp {
                  fluid(maxWidth: 800) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            
        }
        html
        }
    }
`

// export const query = graphql`
//     query($slug: String!){
//         contentfulBlogPost(slug: {eq: $slug}){
//             title
//             publishedDate(formatString: "MMMM Do YYYY")
//             body {
//                 json
//             }
//         }
//     }
// ` 

// const Blog = (props) => {
//     const options = {
//         renderNode: {
//             "embedded-asset-block": (node) => {
//                 const alt = node.data.target.fields.title["en-US"]
//                 const url = node.data.target.fields.file["en-US"].url
//                 return <img alt={alt} src={url} />
//             }
//         }
//     }
    

{/* <h1>{props.data.contentfulBlogPost.title}</h1>
<p>{props.data.contentfulBlogPost.publishedDate}</p>  
{documentToReactComponents(props.data.contentfulBlogPost.body.json, options)} */}


const Blog = (props) => {
    return (
        <Layout>
            <Head title={props.data.markdownRemark.frontmatter.title} ></Head>
            <center><h1>{props.data.markdownRemark.frontmatter.title}</h1></center>
            <Img fluid={props.data.markdownRemark.frontmatter.featuredImage} />
            <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
        </Layout>
    )
}
//            <p>{props.data.markdownRemark.frontmatter.date}</p>
export default Blog
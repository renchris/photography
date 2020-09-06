import React from "react"

import Layout from "../components/layout"
import { Link, useStaticQuery, graphql } from "gatsby"

import blogStyles from "./work.module.scss"

import Head from "../components/head"

import Img from "gatsby-image"




// query {
//     allContentfulBlogPost ( sort: { fields: publishedDate, order: DESC}) {
//         edges {
//             node {
//                 title
//                 slug
//                 publishedDate(formatString:"MMMM Do, YYYY")
//             }
//         }
//     }
// }



const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
            edges {
                node {
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
                    fields {
                        slug
                    }
                }
            }
        }
    }
    `)

    console.log(data)
    return (
        <Layout>
            <Head title="Work" />
            <h1>Work</h1>
            
            <ol className={blogStyles.posts}>
                {data.allMarkdownRemark./*allContentfulBlogPost.*/edges.map((edge) => {
                    return (
                        <li className={blogStyles.post}>
                            <Link to = {`/work/${edge.node.fields.slug}`}>
                                <div>
                                    <h2 className={blogStyles.overlayText}>{edge.node.frontmatter.title}</h2>
                                    <Img className={blogStyles.image} fluid={edge.node.frontmatter.featuredImage.childImageSharp.fluid} />  
                                </div>
                            </Link>
                        </li>
                    )
                })}
            </ol>
        </Layout>
    )
}
//<p>{edge.node.frontmatter.date.publishedDate}</p>

//            <h1 className={blogStyles.postElement}>HELLO</h1>
//<h1 className={blogStyles.postElement}>THERE</h1>
//<h2>{edge.node.frontmatter.title}</h2>
export default BlogPage
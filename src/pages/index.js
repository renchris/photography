import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

import headerStyles from "../components/header.module.scss"

const IndexPage = () => {
    return (
        <Layout>
            <Head title="Home" />
            <h1>Welcome to my Portfolio!</h1>
            <p>Hi! I'm Chris Ren, a professional photographer here in Vancouver, BC</p>
            <p>My passion lives for shooting events, portaits, and brand content. Take a look at <Link className={headerStyles.link} to ="/work">my work</Link></p>
            <p>I'd be happy to shoot for your project or business, get in touch with me at my <Link className={headerStyles.link} to ="/contact">Contact Page</Link></p>
        </Layout>
    )
}
////<p>Please check out my photoshoots under my <Link to ="/work">Work Page</Link></p>
export default IndexPage

//About.js
// import React from "react"
// import { Link } from "gatsby"

// import Layout from "../components/layout"

// import Head from "../components/head"

// const AboutPage = () => {
//     return (
//         <Layout>
//             <Head title="About" />
//             <h1>About Me</h1>
//             <p>Hi! I'm Chris Ren, a professional photographer in Vancouver, BC.</p>
//             <p>My passion lives for shooting events, portaits, and brand content.</p>
//             <p>I'd be happy to shoot for your project or business, get in touch with me at my <Link to ="/contact">Contact Page</Link></p>
//         </Layout>
//     )
// }

// export default AboutPage
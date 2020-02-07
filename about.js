import React from "react"
import { Link } from "gatsby"

import Header from "../components/header"
import Footer from "../components/footer"

const AboutPage = () => {
    return (
        <div>
            <Header />
            <h1>About Page</h1>
            <p>Hello. My name is Chris. I'm a 4th-year UBC student in CS seeking opportunities software development job.</p>
            <p>My hobbies include DJing, photography, and ultimate. This is my website to showcase my photography porfolio.</p>
            <p>Get in touch with me at my contact page: <Link to ="/contact">Contact Page</Link></p>
            <Footer />
        </div>
    )
}

export default AboutPage

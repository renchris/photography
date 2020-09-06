import React from "react"

import Layout from "../components/layout"
import Head from "../components/head"

import headerStyles from "../components/header.module.scss"

const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact" />
            <h1>Contact Page</h1>
            <p>You may contact me at by leaving me an email at ren.chris@outlook.com</p>
            <p>Connect with me on <a className={headerStyles.link} href="https://www.instagram.com/iloveenvy/" target="_blank">Instagram</a></p>        </Layout>

    )
}

export default ContactPage 
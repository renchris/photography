import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

import headerStyles from "../components/header.module.scss"

const NotFound = () => {
    return (
        <Layout>
            <Head title="404" />
            <h1>Page not found</h1>
            <p>Head back to <Link className={headerStyles.link} to="/">Home Page</Link></p>
        </Layout>
    )
}

export default NotFound
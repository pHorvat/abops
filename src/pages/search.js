import * as React from "react"
import Search from "../components/SearchContainer"
import Layout from "../components/layout"
import Seo from "../components/seo"

const search = () => (
    <Layout>
        <Seo title="Search" />
        <h1>Search</h1>
        <Search/>

    </Layout>
)

export default search

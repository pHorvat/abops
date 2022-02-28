import * as React from "react"
import Search from "../components/SearchContainer"
import Layout from "../components/layout"
import Seo from "../components/seo"

const search = () => (
    <Layout>
        <Seo title="Pretraživač" />
        <h1>Pretraživač</h1>
        <Search/>

    </Layout>
)

export default search

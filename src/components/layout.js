/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Navbar from "./Navbar/navbar"
import Footer from "./Footer/Footer";
import "../fonts/typography.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
        <Navbar/>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div className="fullWidth"
        style={{
          margin: `0 auto`,
          padding: `0 1.0875rem`,
            minHeight: "100vh",
            display: "flex",
            flexDirection:"column",


        }}
      >
        <main style={{marginBottom: "100px"}}>{children}</main>
          <Footer/>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

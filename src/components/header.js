import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "../fonts/typography.css"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#3fb72a`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
              fontFamily: `Playfair Display Italic`,
              fontWeight: 400,
              textTransform: `capitalize`,

          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

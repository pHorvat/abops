import React from "react"
import styled from "styled-components"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const LogoWrap = styled.div`
  margin: auto 0;
  flex: 0 1 36px;
 // @media (max-width: 768px) and (orientation: landscape) {
 //   flex: 0 1 25px;
 // }
`

export function Logo() {
    return (
        <LogoWrap as={Link} to="/">
        <StaticImage
            src="../../images/oculus-logo.png"
            alt="logo"
            placeholder="blurred"
            layout="fixed"
            height={70}
            quality={99}
        />
        </LogoWrap>
    )
}



export default Logo
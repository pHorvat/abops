import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavItem = styled(Link)`
  text-decoration: none;
  color: #111;
  display: inline-block;
  white-space: nowrap;
  margin: 0 1vw;
  transition: all 200ms ease-in;
  position: relative;

  :after {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 0%;
    content: ".";
    color: transparent;
    background: rgb(63, 183, 42);
    height: 1px;
    transition: all 0.4s ease-in;
  }

  :hover {
    color: rgb(63, 183, 42);
    ::after {
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`
const NavbarLinks = () => {
    return (
        <>
            <NavItem to="/">Početna stranica</NavItem>
            <NavItem to="/oNama">O nama</NavItem>
            <NavItem to="/gallery">Galerija</NavItem>
            <NavItem to="/kontakt">Kontakt</NavItem>
        </>
    )
}

export default NavbarLinks
import * as React from "react"
import PropTypes from "prop-types"
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {Link} from "gatsby";
import "../main.css"
import "./style.css"
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () => (
    <footer >
        <div className="waves">
            <div className="wave" id="wave1"></div>
            <div className="wave" id="wave2"></div>
            <div className="wave" id="wave3"></div>
            <div className="wave" id="wave4"></div>
        </div>
        <ul className="social_icon" style={{marginTop:"4rem"}}>
            <li>
                <Link className={"social_iconA"} to={"#"}> <FacebookIcon/></Link>
            </li>
            <li>
                <Link className={"social_iconA"} to={"#"}> <FacebookIcon/></Link>
            </li>
            <li>
                <Link className={"social_iconA"} to={"#"}> <FacebookIcon/></Link>
            </li>
            <li>
                <Link className={"social_iconA"} to={"#"}> <FacebookIcon/></Link>
            </li>
        </ul>
        <ul className="social_icon">
            <li><Link className={"menuLink"} to={"#"}>Home</Link></li>
            <li><Link className={"menuLink"} to={"#"}>About</Link></li>
            <li><Link className={"menuLink"} to={"#"}>Gallery</Link></li>
            <li><Link className={"menuLink"} to={"#"}>Contact</Link></li>
        </ul>
        <p>© {new Date().getFullYear()}, Patrik Horvat & Vedran Orešković
            {` `}</p>

    </footer>

)



export default Footer

import * as React from "react"
import PropTypes from "prop-types"
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {Link} from "gatsby";
import "../main.css"
import "./style.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

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
                <Link className={"social_iconB"} to={"#"}> <InstagramIcon/></Link>
            </li>
            <li>
                <Link className={"social_iconA"} to={"#"}> <LinkedInIcon/></Link>
            </li>
            <li>
                <Link className={"social_iconA"} to={"#"}> <YouTubeIcon/></Link>
            </li>
        </ul>
        <ul className="social_icon">
            <li><Link className={"menuLink"} to={"/"}>Početna stranica</Link></li>
            <li><Link className={"menuLink"} to={"/oNama"}>O nama</Link></li>
            <li><Link className={"menuLink"} to={"/gallery"}>Galerija</Link></li>
            <li><Link className={"menuLink"} to={"/kontakt"}>Kontakt</Link></li>
        </ul>
        <p>© {new Date().getFullYear()}, Patrik Horvat & Vedran Orešković
            {` `}</p>

    </footer>

)



export default Footer

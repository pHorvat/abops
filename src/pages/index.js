import * as React from "react"
import Grid from '@mui/material/Grid';
import Layout from "../components/layout"
import Seo from "../components/seo"
import Tile from "../components/tiles"
import "../components/main.css"
import dogVideo from "../video/dogvideo.mp4"
import dogVideoWebM from "../video/dogvideo.webm"
import {Link} from "gatsby";
import FacebookIcon from "@mui/icons-material/Facebook";
import Footer from "../components/Footer/Footer";
import videoPoster from "../images/videoPoster.jpg"

{/*
position:"absolute", width:"100%", left:"50%",
        top:"70%", height:"100%", objectFit:"cover",
        transform:"translate(-50%,-50%)",
        zIndex:"-10", filter: "blur(2px)",
*/}

const IndexPage = () => (
  <Layout>
    <video id="video"
    autoPlay
    loop
    muted
    poster={videoPoster}
    style={{

        position: "fixed",
        right: "0",
        bottom: "0",
        minWidth: "100%",
        minHeight: "100%",
        zIndex:"-10"

    }}
    >
        <source src={dogVideo} />
        <source src={dogVideoWebM}/>
    </video>
    <Seo title="Home" />
    <h1 className="h1Sadrzaj">Sadržaj</h1>

      <Grid container spacing={2} direction={"row"}>
          <Grid  item xs={12} md={6} lg={4} >
              <Tile tilePart={"Deo 1"} tileContent={"Anatomija oka i dijagnostičke procedure"} tileColor={"#40c4cc"} tileLink={"prviDeo"}/>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
              <Tile tilePart={"Deo 2"} tileContent={"Bolesti očnih kapaka"} tileColor={"#f68b6d"} tileLink={"#"}/>
          </Grid>
          <Grid item xs={12} md={6} lg={4} >
              <Tile tilePart={"Deo 3"} tileContent={"Bolesti očne jabučice"} tileColor={"#2a599a"} tileLink={"#"}/>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
              <Tile tilePart={"Deo 4"} tileContent={"Bolesti Konjunktive, nazolakrimalnog sistema i trećeg očnog kapka"} tileColor={"#a577a6"} tileLink={"#"}/>
          </Grid>
      </Grid>
      <script> </script>
  </Layout>
)

export default IndexPage

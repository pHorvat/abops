import * as React from "react"
import Grid from '@mui/material/Grid';
import Layout from "../components/layout"
import Seo from "../components/seo"
import Tile from "../components/tiles"

const tilesCSS = {
    borderRadius: 0,
    border: "2px solid #000",
    backgroundColor: "black",
    color: "black",
    transition: "background 1s, color 1s",
    "&:hover": {
        backgroundColor: "black",
        color: "black",
    },
    textDecoration: "none"
};

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Sadržaj</h1>

      <Grid container spacing={2} direction={"row"}>
          <Grid item xs={12} md={6} lg={4} >
              <Tile style={tilesCSS} tilePart={"Deo 1"} tileContent={"Anatomija oka i dijagnostičke procedure"} tileColor={"#40c4cc"} tileLink={"prviDeo"}/>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
              <Tile tilePart={"Deo 2"} tileContent={"Bolesti očnih kapaka"} tileColor={"#f68b6d"}/>
          </Grid>
          <Grid item xs={12} md={6} lg={4} >
              <Tile tilePart={"Deo 3"} tileContent={"Bolesti očne jabučice"} tileColor={"#2a599a"}/>
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
              <Tile tilePart={"Deo 4"} tileContent={"Bolesti Konjunktive, nazolakrimalnog sistema i trećeg očnog kapka"} tileColor={"#a577a6"}/>
          </Grid>
      </Grid>
  </Layout>
)

export default IndexPage

import * as React from "react"
import PropTypes from "prop-types"
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {Link} from "gatsby";
import "../components/main.css"
import glassBg from "../images/glassBg.png"

const Tile = ({ tilePart,tileContent,tileColor, tileLink }) => (
    <Link className="box" style={{textDecoration: "none"}} to={tileLink}>
        <img src={glassBg} style={{position: "absolute", objectFit:"cover", width:"100%", height:"100%", overflow:"hidden", opacity:"0.15"}}/>
        <Card sx={{ minWidth: 275}} style={{backgroundColor: tileColor, height:"100%", }} >
            <CardContent>

                <Typography sx={{ fontSize: 20 }} color="white" gutterBottom>
                    {tilePart}
                </Typography>
                <Typography variant="body1" color={"white"}>
                    {tileContent}
                </Typography>

            </CardContent>
        </Card>
    </Link>

)

Tile.propTypes = {
    tilePart: PropTypes.string,
    tileContent: PropTypes.string,
    tileColor: PropTypes.any,

}

Tile.defaultProps = {
    tilePart:``,
    tileContent:``,
    tileColor:``
}

export default Tile

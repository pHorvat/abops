import * as React from "react"
import PropTypes from "prop-types"
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";

const Tile = ({ tilePart,tileContent,tileColor }) => (

    <Card sx={{ minWidth: 275 }} style={{backgroundColor: tileColor, height:"100%"}} >
        <CardContent>
            <Typography sx={{ fontSize: 20 }} color="white" gutterBottom>
                {tilePart}
            </Typography>
            <Typography variant="body1" color={"white"}>
                {tileContent}
            </Typography>
        </CardContent>
        <CardActions>
            <Button variant={"contained"} color={"inherit"} size="small">Saznaj više</Button>
        </CardActions>
    </Card>

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
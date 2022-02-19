import * as React from "react"
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "../components/main.css"
import Grid from "@mui/material/Grid";
import Zoom from "react-medium-image-zoom";
import 'react-medium-image-zoom/dist/styles.css'
import PropTypes from "prop-types";
import {Box} from "@mui/material";



function Image(props) {
    return (
    <Card className="centered" style={{marginTop: "2rem", marginBottom:"1rem"}}>
        <Grid container
              spacing={1}
              alignItems="center"
              justifyContent="center"
        >
            <Grid item xs={12} >
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"

                >
                    <Zoom>
                        {props.children}
                    </Zoom>
                </Box>

            </Grid>
            <Grid item >
                <CardContent style={{textAlign: "justify"}}>
                    <Typography variant="body1" color="text.secondary">
                        {props.imageDesc}
                    </Typography>
                </CardContent>
            </Grid>


        </Grid>
    </Card>
    )
}

Image.propTypes = {
    imageDesc: PropTypes.string,

}


Image.defaultProps = {
    imageDesc:``
}

export default Image
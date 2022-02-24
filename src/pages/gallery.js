import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {StaticImage} from "gatsby-plugin-image";
import Grid from "@mui/material/Grid";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import "../components/main.css"
import {Box} from "@mui/material";
import 'react-medium-image-zoom/dist/styles.css'
import Image from "../components/image";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"



const gallery = () => (
    <Layout>
        <Seo title="Galerija" />
        <Box sx={{ margin:"0 auto", maxWidth: "1450px"}} >

            <ResponsiveMasonry
                columnsCountBreakPoints={{1: 1, 400: 2, 800: 3, 1000: 4, 1050: 5}}
            >
                <Masonry columnsCount={5} gutter={7}>
                    {itemData.map((item) => (
                        <div key={item.img}>
                            <img
                                className={"boxGallery"}
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </div>
                    ))}

                </Masonry>
            </ResponsiveMasonry>
        </Box>


    </Layout>
)

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
        title: 'Bed',
    },
    {
        img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
        title: 'Books',
    },
    {
        img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
        title: 'Sink',
    },
    {
        img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
        title: 'Kitchen',
    },
    {
        img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
        title: 'Blinds',
    },
    {
        img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
        title: 'Chairs',
    },
    {
        img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
        title: 'Laptop',
    },
    {
        img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
        title: 'Doors',
    },
    {
        img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
        title: 'Coffee',
    },
    {
        img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
        title: 'Storage',
    },
    {
        img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
        title: 'Candle',
    },
    {
        img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
        title: 'Coffee table',
    },


];

export default gallery
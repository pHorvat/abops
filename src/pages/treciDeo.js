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

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(1.5)',  }}
    >
        •
    </Box>
);

const treciDeo = () => (
    <Layout>
        <Seo title="Treći Deo" />


        <Grid container spacing={2}>
            <Grid item xs={12} >
                <h1>Bolesti očne jabučice</h1>
            </Grid>
            <Grid item xs={12} md={9}>

                <Card id={"Mikroftalmija"} variant="outlined" sx={{ minWidth: 275}} style={{marginTop:"1rem"}} >
                    <CardContent >
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" >
                            Odeljak 39
                        </Typography>
                        <Typography variant="h5" component="div">
                            Mikroftalmija
                        </Typography>
                        <hr/>
                        <Typography variant="h6" sx={{fontStyle:"italic"}}>
                            Opis bolesti i klinička slika
                        </Typography>
                        <Typography  component={'div'} variant="body1" style={{marginLeft:"1rem"}}>
                            Mikroftalmis je kongenitalna anomalija. Kod pacijenta se zapaža mala očna jabučica
                            najčešće praćena malim palpebralnim otvorom i srazmerno malom orbitom. Mala očna
                            jabučica će uticati na razvoj kostiju orbite, koje se neće moći pravilno razvijati, pa se
                            kod psa mogu javiti i druge promene (problemi s devijacijom nazalnih struktura, pa čak
                            i problemi s disanjem). Mikroftalmija se često javlja zajedno s drugim malformacijama
                            oka, kao što su perzistentne pupilarne membrane, perzistentni hiperplastični primarni
                            vitreus, katarakta, displazija retine i koloboma različitih struktura oka Kod nekih rasa pas
                            mikroftalmija se javlja u okviru naslednih sindroma (CEA – Collia, Eye Anomaly, MOD –
                            Merle Ocular Dysgenesis).
                        </Typography>
                        <Image imageDesc={"Slika 39.1. Kongenitalna mikroftalmija levog oka\n" +
                            "kod psa rase čau-čau"}>
                            <StaticImage src={"../images/Slika_39.1.jpg"} alt={"Slika 39.1"}/>
                        </Image>
                        <Image imageDesc={"Slika 39.2. Kongenitalna mikroftalmija kod jazavičara\n" +
                            "uz druge kongenitalne promene:\n" +
                            "koloboma, diskorija, katarakta"}>
                            <StaticImage src={"../images/Slika_39.2.jpg"} alt={"Slika 39.2"}/>
                        </Image>
                        <Image imageDesc={"Slika 39.3. Kongenitalna mikroftalmija. Isti pas s\n" +
                            "prethodne slike, drugo oko."}>
                            <StaticImage src={"../images/Slika_39.3.jpg"} alt={"Slika 39.3"}/>
                        </Image>
                        <Image imageDesc={"Slika 39.4. Štene rotvajlera sa mikroftalmijom\n" +
                            "levog oka."}>
                            <StaticImage src={"../images/Slika_39.4.jpg"} alt={"Slika 39.4"}/>
                        </Image>
                    </CardContent>
                </Card>

                <Card id={"Ftiza-Atrofijacocnecjabucice"} variant="outlined" sx={{ minWidth: 275 }} style={{marginTop:"1rem", alignItems:"center"}} >
                    <CardContent >
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" >
                            Odeljak 40
                        </Typography>
                        <Typography variant="h5" component="div">
                            Ftiza/Atrofija očne jabučice
                        </Typography>
                        <hr/>
                        <Typography variant="h6" sx={{fontStyle:"italic"}}>
                            Opis bolesti i klinička slika
                        </Typography>
                        <Typography  component={'div'} variant="body1" style={{marginLeft:"1rem"}}>
                            Ftiza/Atrofija očne jabučice je stečeno izrazito smanjenje očne jabučice, uz menjanje
                            njenog oblika, koje nastaje kao posledica terminalnih promena na oku usled inflamacije,
                            oticanja očne vodice nakon perforacije oka, a najčešće kao posledica odlepljenja retine.
                            Zahvaćeno oko je slepo, malo, s fibrotičnom rožnjačom, uvealnim adhezijama, kataraktom
                            i odvojenom retinom.
                        </Typography>


                        <Image imageDesc={"Slika 40.1. Ftiza očne jabučice kod šar-peja. Očna jabučica je toliko mala da se ni ne zapaža od nabora\n" +
                            "konjunktive. Uzrok ftize kod ovog psa je trauma a dijagnoza je potvrđena ultrazvukom."}>
                            <StaticImage
                                src="../images/Slika_40.1.jpg"
                                alt="Slika 4.1"
                            />
                        </Image>



                    </CardContent>

                </Card>
            </Grid>
            <Grid className="sadrzaj" item md={3}>
                <Card style={{padding:"0.5rem", marginTop: "1rem",position: "sticky", right:0, top:20}}>
                    <Typography variant="h4">Sadržaj</Typography>
                    <AnchorLink className="anchorLink" to="/treciDeo#Mikroftalmija" title="Mikroftalmija">
                        <Typography variant="body1">Mikroftalmija</Typography>
                    </AnchorLink>
                    <AnchorLink  className="anchorLink" to="/treciDeo#Ftiza-Atrofijacocnecjabucice" title="Ftiza/Atrofija očne jabučice">
                        <Typography variant="body1">Ftiza/Atrofija očne jabučice</Typography>
                    </AnchorLink>

                </Card>
            </Grid>
        </Grid>
    </Layout>
)


export default treciDeo
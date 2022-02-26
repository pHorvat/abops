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

const drugiDeo = () => (
    <Layout>
        <Seo title="Drugi Deo" />


        <Grid container spacing={2}>
            <Grid item xs={12} >
                <h1>Bolesti očnih kapaka</h1>
            </Grid>
            <Grid item xs={12} md={9}>

                <Card id={"Agenezaocnihkapaka"} variant="outlined" sx={{ minWidth: 275}} style={{marginTop:"1rem"}} >
                    <CardContent >
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" >
                            Odjeljak 3
                        </Typography>
                        <Typography variant="h5" component="div">
                            Ageneza očnih kapaka
                        </Typography>
                        <hr/>
                        <Typography variant="h6" sx={{fontStyle:"italic"}}>
                            Opis bolesti i klinička slika
                        </Typography>
                        <Typography  component={'div'} variant="body1" style={{marginLeft:"1rem"}}>
                            Ageneza očnih kapaka je nasledna bolest, najčešće kod mačaka, i može se ispoljiti
                            kod više mačića iz istog legla. Obolele životinje se rode sa nekompletnim rubom
                            očnih kapaka. Uglavnom je poremećaj bilateralan i simetričan, a defekt zahvata
                            sve slojeve, najčešće srednjeg dela gornjeg očnog kapka. Kod pasa je najčešće
                            zahvaćen lateralni deo donjeg očnog kapka. Veličina defekta može varirati. Često je
                            ova genetska anomalija praćena i drugim anomalijama oka, pri čemu je prisustvo
                            perzistentnih pupilarnih membrana najčešći prateći problem kod mačaka. Kod
                            pasa, agenezu očnog kapka ponekad prate mikroftalmija, odsustvo lakrimalnih
                            žlezdi, perzistentne pupilarne membrane, katarakta, displazija retine i koloboma
                            očnog nerva. Ponekad se kod pasa zapaža prisustvo kompletnog ruba očnog
                            kapka, ali bez razvijenih meibomovih žlezda. Ageneza očnih kapaka najčešće ima
                            za posledicu trihijazu (kontakt dlaka i površine oka), što može dovesti do promena
                            na kornei, vaskularizacije, pigmentnog keratitisa, kornealnog sekvestra i ulcera.
                            Ukoliko životinja nije u mogućnosti da očnim kapcima u potpunosti zatvori oko,
                            gubi se zaštitna uloga očnih kapaka. Tada dolazi do izloženosti oka nepovoljnim
                            uticajima spoljne sredine i do isušivanja oka. Takve jedinke su sklone povredama
                            oka i keratitisu.
                        </Typography>
                        <br/>
                        <Typography variant="h6" sx={{fontStyle:"italic"}}>
                            Terapija
                        </Typography>
                        <Typography  component={'div'} variant="body1" style={{marginLeft:"1rem"}}>
                            U nekim blažim slučajevima je dovoljno učestalo nanositi lubrikante na površinu
                            oka i trajno ukloniti dlačne folikule onih dlaka koje iritiraju površinu oka. Ukoliko
                            pacijent ima izražene smetnje, nemogućnost da zaštiti korneu kapcima, ili se
                            često i uprkos preventivi pojavljuju ulceri na kornei, oftalmolog može predložiti
                            hiruršku rekonstrukciju očnih kapaka.
                        </Typography>
                        <Image imageDesc={"Slika 3.1. Ageneza jedne polovine gornjeg očnog kapka kod mačke.\n" +
                            "Nedostaje rub očnog kapka i to je razlog što dlake s gornjeg\n" +
                            "očnog kapka dolaze u kontakt sa korneom (trihijaza)."}>
                            <StaticImage src={"../images/Slika_3.1.jpg"} alt={"Slika 3.1"}/>
                        </Image>
                        <Image imageDesc={"Slika 3.2. Ageneza dve trećine gornjeg očnog kapka kod mačke.\n" +
                            "Nedostaje rub očnog kapka i to je razlog što dlake s gornjeg\n" +
                            "očnog kapka dolaze u kontakt s korneom (trihijaza). Kornea je\n" +
                            "hronično iritirana dlakama i uočava se neovaskularizacija,\n" +
                            "pigmentacija i pojava ožiljaka na kornei. Zbog iritacije oka\n" +
                            "uočava se iscedak iz oka."}>
                            <StaticImage src={"../images/Slika_3.2.jpg"} alt={"Slika 3.2"}/>
                        </Image>
                        <Image imageDesc={"Slika 3.3. Ageneza polovine gornjeg očnog kapka kod psa (medijalna\n" +
                            "regija). Nedostaje rub očnog kapka i to je razlog što dlake\n" +
                            "sgornjeg očnog kapka dolaze u kontakt skorneom (trihijaza).\n" +
                            "Kornea je hronično iritirana dlakama i uočava se\n" +
                            "neovaskularizacija i hronična centralna fibroza. Kao rezultat\n" +
                            "ageneze, orbicularis oculi mišić je nerazvijen, što je dovelo do\n" +
                            "smanjenog motiliteta očnog kapka i hroničnog keratitisa."}>
                            <StaticImage src={"../images/Slika_3.3.jpg"} alt={"Slika 3.3"}/>
                        </Image>
                    </CardContent>
                </Card>

                <Card id={"Povredeocnihkapaka"} variant="outlined" sx={{ minWidth: 275 }} style={{marginTop:"1rem", alignItems:"center"}} >
                    <CardContent >
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" >
                            Odeljak 4
                        </Typography>
                        <Typography variant="h5" component="div">
                            Povrede očnih kapaka
                        </Typography>
                        <hr/>
                        <Typography variant="h6" sx={{fontStyle:"italic"}}>
                            Opis bolesti i klinička slika
                        </Typography>
                        <Typography  component={'div'} variant="body1" style={{marginLeft:"1rem"}}>
                            Očni kapci imaju svoj spoljni deo, koji čine koža i kružni mišić oka, i unutrašnji deo, koji
                            čine konjunktiva i vezivno tkivo. Mehaničke povrede očnih kapaka su najčešće u vidu
                            laceracija i kod pasa i mačaka se često mogu uočiti posle međusobnih borbi, posle lova
                            ili igre u prirodi. Laceracije mogu biti površne, kada je povreda samo na koži kapka, ili
                            mogu zahvatiti sve slojeve očnog kapka. Laceraciju očnog kapka, ma kako u početku
                            bezazleno izgledala, treba shvatiti ozbiljno. Zbog kontrakcije kružnog mišića oka, od
                            male laceracije nastaće veliki defekt tkiva. Isto tako, novonastali ožiljak može dovesti do
                            uvrtanja ili izvrtanja očnog kapka. Svaka anatomska nepravilnost očnog kapka dovodi
                            do poremećaja njegove funkcije, pa se kao posledica mogu javiti oštećenja na kornei.
                            Oštećenja najčešće izazovu dlake poreklom s kože očnih kapaka, koje su zbog povrede
                            tkiva dospele na površinu oka, ili nastalo ožiljno tkivo na rubu kapka koje iritira osetljive
                            strukture oka.
                        </Typography>
                        <br/>
                        <Typography variant="h6" sx={{fontStyle:"italic"}}>
                            Terapija
                        </Typography>
                        <Typography  component={'div'} variant="body1" style={{marginLeft:"1rem"}}>
                            Kada postoji laceracija očnog kapka, uvek treba izvršiti temeljan oftalmološki
                            pregled i utvrditi da li postoje skrivene povrede unutrašnjih struktura oka ili
                            prisutno strano telo u oku. Ranu treba što pre hirurški obraditi, a rub kapka
                            dovesti u anatomsko stanje koje je bilo pre povrede. Ranu ne treba ostaviti
                            da spontano zarasta zbog mogućnosti formiranja anatomskog defekta koji će
                            narušiti fiziološku ulogu očnih kapaka, ali i zbog moguće bakterijske infekcije. Iz
                            tog razloga se laceracije očnih kapaka hirurški zbrinjavaju što je pre moguće. Po
                            potrebi, psu se nakon obavljene intervencije stavlja oko vrata zaštitna kragna,
                            koja treba da spreči psa da češanjem pokida konce.
                        </Typography>

                        <Image imageDesc={"Slika 4.1. Laceracija donjeg očnog kapka koju je\n" +
                            "ovaj pas zadobio nakon borbe s drugim\n" +
                            "psom. Jedna trećina ruba donjeg očnog\n" +
                            "kapka, širine 2-3 mm, je odvojena i\n" +
                            "zahteva hitnu rekonstrukciju."}>
                            <StaticImage
                                src="../images/Slika_4.1.jpg"
                                alt="Slika 4.1"
                            />
                        </Image>

                        <Image imageDesc={"Slika 4.2. Laceracija kapka. Isti pas posle detaljnog\n" +
                            "pregleda, pri čemu se uviđa tačna\n" +
                            "ozbiljnost laceracije."}
                        >
                            <StaticImage
                                src="../images/Slika_4.2.jpg"
                                alt="Slika 4.2"
                            />
                        </Image>

                        <Image imageDesc={"Slika 4.3. Laceracija kapka. Isti pas posle hirurške\n" +
                            "intervencije. Repozicija je pravilno\n" +
                            "izvedena i rub očnog kapka je doveden u\n" +
                            "ispravnu anatomsku poziciju, što je\n" +
                            "neophodno da bi očni kapak imao\n" +
                            "neometanu funkciju."}>
                            <StaticImage
                                src="../images/Slika_4.3.jpg"
                                alt="Slika 4.3."
                            />
                        </Image>
                        <Image imageDesc={"Slika 4.4. Pas snimljen nakon laceracije gornjeg\n" +
                            "očnog kapka koja je spontano zarasla.\n" +
                            "Obratite pažnju na kontakt između dlaka\n" +
                            "s gornjeg očnog kapka i rožnjače zbog\n" +
                            "defekta ruba kapka."}>
                            <StaticImage
                                src="../images/Slika_4.4.jpg"
                                alt="Slika 4.4."
                            />
                        </Image>


                    </CardContent>

                </Card>
            </Grid>
            <Grid className="sadrzaj" item md={3}>
                <Card style={{padding:"0.5rem", marginTop: "1rem",position: "sticky", right:0, top:20}}>
                    <Typography variant="h4">Sadržaj</Typography>
                    <AnchorLink className="anchorLink" to="/drugiDeo#Agenezaocnihkapaka" title="Ageneza očnih kapaka">
                        <Typography variant="body1">Ageneza očnih kapaka</Typography>
                    </AnchorLink>
                    <AnchorLink  className="anchorLink" to="/drugiDeo#Povredeocnihkapaka" title="Povrede očnih kapaka">
                        <Typography variant="body1">Povrede očnih kapaka</Typography>
                    </AnchorLink>

                </Card>
            </Grid>
        </Grid>
    </Layout>
)


export default drugiDeo
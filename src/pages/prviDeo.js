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

const prviDeo = () => (
    <Layout>
        <Seo title="Prvi Deo" />


        <Grid container spacing={2}>
            <Grid item xs={12} >
            <h1>Anatomija oka i dijagnostičke procedure</h1>
            </Grid>
            <Grid item xs={12} md={9}>

                <Card id={"Anatomijaokapasaimacaka"} variant="outlined" sx={{ minWidth: 275}} style={{marginTop:"1rem"}} >
                    <CardContent >
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" >
                            Odjeljak 1
                        </Typography>
                        <Typography variant="h5" component="div">
                            Anatomija oka pasa i mačaka
                        </Typography>
                        <hr/>
                        <Typography variant="body1">
                            Anatomsku građu oka pasa i mačaka čine različite strukture koje imaju ulogu da zaštite organ vida i omoguće složenu funkciju vida.
                        </Typography>
                        <Typography  component={'div'} variant="body1" style={{marginLeft:"1rem"}}>
                            <ul>
                                <li>
                                    Orbita je konusna koštana šupljina koja pruža oku mehaničku potporu i oivičena
                                    je periorbitom. U kostima orbite se nalaze kanali kroz koje do oka dolaze
                                    nervi, arterije i vene. Njenu šupljinu ispunjava očna jabučica, mišići, masno
                                    tkivo, suzne žlezde, krvni sudovi i nervi. Orbita konja i goveda ima potpun
                                    koštani obruč, dok je kod pasa i mačaka nepotpun, pa lateralni orbitalni rub
                                    ne poseduje koštanu osnovu, već njega formira orbitalni ligament.
                                </li>
                                <li>
                                    Očna jabučica je smeštena u orbiti i njena veličina varira u zavisnosti od vrste
                                    i rase životinje. Njena veličina nije direktno proporcionalna veličini životinje.
                                    Očna jabučica je sferičnog oblika i zahvaljujući brojnim dobro inervisanim
                                    mičićima ima izraženu pokretljivost u orbiti.
                                </li>
                                <li>
                                    Očne kapke gradi koža, mišići, tarzus, ligamenti i konjunktiva. U očnim kapcima se nalaze brojni nervi, krvni sudovi, žlezde (lojne, znojne i suzne), otvori
                                    lakrimalnih kanala i trepavice. Kod pasa i mačaka je lako uočljiv treći očni
                                    kapak, koji sadrži hrskavicu u obliku slova „Т”, suznu žlezdu trećeg očnog kapka
                                    i konjunktivu kojom je u potpunosti prekriven. Anatomski i funkcionalno
                                    ispravni očni kapci su od izuzetnog značaja za kvalitet vida i zdravlje oka
                                    pasa i mačaka. Pored funkcije zaštite oka, koju obezbeđuju treptanjem, oni
                                    sadrže žlezde značajne za kvalitet suznog filma, učestvuju u ravnomernom
                                    raspoređivanju suznog filma preko rožnjače i štite rožnjaču od prekomernog
                                    isušivanja. Takođe, oni usmeravaju suzni film ka otvoru lakrimalnog kanala.

                                </li>
                                <li>
                                    Spoljašnji omotač oka čini kornea (rožnjača) s prednje strane, a episkleralno
                                    i skleralno tkivo sa zadnje strane. Prelazna zona između beonjače i rožnjače
                                    naziva se limbus. Limbus je zona koja sadrži progenitor (stem) ćelije koje služe
                                    za proizvodnju kornealnih epitelnih ćelija. Takođe, progenitor ćelije limbusa
                                    imaju važnu ulogu u kontroli imunog odgovora i sprečavaju preteranu inflamaciju
                                    senzitivnog kornealnog tkiva. Postojanje progenitor ćelija u limbusu je
                                    verovatno i razlog zašto većina tumoroznih procesa kornealnog i skleranog
                                    tkiva upravo i počinje u limbalnom tkivu. Kornealne dimenzije se kod pasa
                                    kreću od 13-17 mm u horizontalnoj osi i 12-16 mm u vertikalnoj, a 17 mm u
                                    horizontalnoj i 16 mm u vertikalnoj osi kod mačaka. Kornea ima ulogu zaštite
                                    oka, a zbog svoje transparentnosti je u mogućnosti da propušta svetlosne
                                    zrake. Gradi je skvamozni višeslojni epitel s bazalnom membranom, stroma,
                                    Descemetova membrana i endotel.
                                </li>
                                <li>
                                    Uvea je vaskularna tunika oka. Njenu prednju stranu čine iris i cilijarno telo,
                                    a zadnju horoid, čija je uloga da snadbeva krvnim sudovima retinu. Boja irisa
                                    određuje boju očiju. Iris i cilijarno telo daju potporu sočivu i značajni su za oblik
                                    zenice, a učestvuju i u procesu akomodacije oka. Između rožnjače anteriorno
                                    i irisa i sočiva posteriorno, nalazi se prednja očna komora ispunjena očnom
                                    vodicom. U bazi cilijarnog tela se takođe nalaze progenitor (stem) ćelije koje
                                    su neaktivne kod sisara, ali kod ostalih vrsta životinja mogu da kompletno
                                    regenerišu oštećenu retinu. Postojanje progenitor ćelija u bazi cilijarnog tela
                                    je verovatno razlog zbog čega većina primarnih okularnih tumora upravo
                                    počinje da raste u ovoj regiji.
                                </li>
                                <li>
                                    Sočivo predstavlja bikonveksnu prozirnu strukturu i smešteno je iza irisa, a
                                    fiksira ga cilijarno telo sa zonularnim ligamentima. Čine ga kapsula sočiva,
                                    epitel sočiva i vlakna. Sočivo propušta i prelama svetlosne zrake na putu ka
                                    retini i učestvuje u procesu akomodacije oka. Zbog svoje funkcije, ono mora
                                    biti prozirno. Sa starošću ili usled određenih metaboličkih poremećaja, očno
                                    sočivo može da promeni boju i donekle izgubi prozirnost (nuklearna skleroza),
                                    što generalno ne utiče na kvalitet vida. U nekim slučajevima, senilne promene
                                    na očima (nuklearna skleroza) mogu da utiču na noćni vid i percepciju dubine
                                    kod starijih životinja. S druge strane, stvarno zamućenje sočiva (katarakta) je
                                    jedan od najčešćih uzroka slepila kod pasa.
                                </li>
                                <li>
                                    Vitreus predstavlja najveću strukturu oka i zauzima prostor od lensa anteriorno
                                    do retine posteriorno. Sastavljen je od vode (99%), a preostalih 1% čine kolagena
                                    vlakna, hijalociti, hijaluronska kiselina (koja vitreusu daje viskoznost) i drugi
                                    glikozaminoglikani. Degenerativne promene vitreusa mogu izazvati odlepljenje
                                    retine, što je naročito slučaj kod pasa koji imaju genetsku degeneraciju vitreusa
                                    i naviku da agresivno tresu igračke.
                                </li>
                                <li>
                                    Retina je smeštena na zadnjem delu oka i njena uloga je da prima svetlosne
                                    nadražaje i prevodi ih u elektronske impulse koji se dalje sprovode i obrađuju
                                    u mozgu. Sastoji se od više različitih slojeva i bogata je krvnim sudovima.
                                    Fotoreceptori retine, štapići i čepići, odgovorni su za noćni i dnevni vid i ra-spoznavanje
                                    boja. Nervne ćelije retine spajaju se tako da čine optički nerv koji
                                    napušta očnu jabučicu posteriorno, ide dalje do optičke raskrsnice i centra
                                    za vid u potiljačnom režnju velikog mozga. Specijalizovane ćelije optičkog
                                    nerva, koje sadrže pigment melanopsin, mogu da vrše funkciju percepcije
                                    svetlosnog signala, čak i u slučaju kompletne degeneracije štapića i čepića,
                                    tako da prisustvo refleksa pupile posle iluminacije belim svetlom ne mora da
                                    znači da je vid još uvek očuvan.
                                </li>

                            </ul>
                        </Typography>
                    </CardContent>
                </Card>

                <Card id={"Klinickipregledoka"} variant="outlined" sx={{ minWidth: 275 }} style={{marginTop:"1rem", alignItems:"center"}} >
                    <CardContent >
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" >
                            Odjeljak 2
                        </Typography>
                        <Typography variant="h5" component="div">
                            Klinički pregled oka
                        </Typography>
                        <hr/>
                        <Typography variant="body1" >
                            Oko je ogledalo zdravlja i nikada se ne posmatra zasebno kao organ, već se mora uzeti
                            u obzir opšte zdravstveno stanje ljubimca. Često su promene na oku posledica životno
                            ugrožavajućih patoloških stanja, bilo da je oko primarni uzrok bolesti ili se na oku samo
                            pokazala neka sistemska bolest. Takođe, pas koji nije životno ugrožen, ali ima probleme
                            s vidom i/ili iritacijom oka, nije srećan pas. Takav ljubimac će više vremena provoditi
                            u snu, biće neraspoložen i neaktivan. Svakodnevne aktivnosti postaju mu mrske ili
                            ga mogu ugroziti. Uobičajeno je da vlasnici i nisu svesni koliki je problem imao njihov
                            ljubimac dok ne posete oftalmologa i otklone problem. Tek onda zapaze promene kod
                            svog ljubimca, primete da je razigraniji i da se „podmladio“. Iz tog razloga, neophodan
                            je detaljan i stručan opšti klinički pregled psa ili mačke i detaljan i stručan oftalmološki
                            pregled za precizno postavljanje dijagnoze i određivanje terapije.
                        </Typography>
                        <Typography variant="body1">
                            Detaljan pregled oka treba da sadrži sve ili neke od sledećih koraka:
                        </Typography>
                        <Typography  component={'div'} variant="body1" gutterBottom>
                            <ol>
                                <li>
                                    Pažljivo uzetu anamnezu
                                </li>
                                <li>
                                    Oftalmološki pregled
                                </li>
                                <li>
                                    Specijalna dijagnostička ispitivanja
                                </li>
                            </ol>
                        </Typography>
                        <Typography variant="body1">
                            1. Anamnezom počinje svaki pregled. Svi podaci o rasi, starosti, polu pacijenta, istoriji
                            bolesti, trenutnoj ili skorašnjoj terapiji, podaci o putovanjima ili promeni mesta prebivališta,
                            kao i sve što je vlasnik primetio a tiče se opšteg stanja pacijenta i/ili promena na očima
                            ili u kvalitetu vida, moraju se pažljivo utvrditi i zabeležiti.
                        </Typography>
                        <Typography variant="body1">
                            2. U oftalmološki pregled spada:
                        </Typography>
                        <Typography  component={'div'} variant="body1" style={{marginLeft:"1rem"}}>
                            <ul>
                                <li>
                                    Pregled oka palpacijom i retropulsija
                                </li>
                                <li>
                                    Utvrđivanje refleksa zenice oka na svetlost
                                </li>
                                <li>
                                    Utvrđivanje postojanja palpebralnog refleksa, koji podrazumeva treptaj posle
                                    taktilnog stimulusa
                                </li>
                                <li>
                                    „Menace odgovor” (ispitivanje refleksnog treptaja kao odgovor oka na brzo
                                    približavanje objekta)
                                </li>
                                <li>
                                    „Dazzle reflex” (treptaj izazvan jakom fokalnom svetlošću uperenom u oko)
                                </li>
                                <li>
                                    Širmerov test za utvrđivanje kvantiteta suznog filma
                                </li>
                                <li>
                                    Test fluorescinom, da bi se utvrdilo prisustvo ulcera na kornei
                                </li>

                            </ul>
                        </Typography>
                        <Image imageDesc={"Slika 2.1. Metodi fiksacije kako bi se obezbedio bezbedan klinički pregled kod agresivnih pacijenata"}>
                            <StaticImage
                                src="../images/Slika_2.1.png"
                                alt="Slika 2.1.Metodi fiksacije kako bi se obezbedio bezbedan klinički pregled kod agresivnih pacijenata"
                            />
                        </Image>

                        <Image imageDesc={"Slika 2.2. Testiranje produkcije suza: A) Širmerove test-tračice za utvrđivanje\n" +
                            "kvantiteta suznog filma (normalna vrednost za pse je >15 mm/min;\n" +
                            "normalna vrednost za mačke između 8 i 15 mm/min); B) Prelomiti\n" +
                            "tračicu dok je još zapakovana kako bi se izbegla kontaminacija\n" +
                            "masnoćom s kože koja može artificijelno da promeni vrednosti\n" +
                            "testiranja; C) Staviti u forniks donjeg očnog kapka; D) Zatvoriti očne\n" +
                            "kapke u trajanju od jednog minuta, posle čega se produkcija suza može\n" +
                            "očitati sa baždarene skale."}
                               >
                            <StaticImage
                                src="../images/Slika_2.2.jpg"
                                alt="Slika 2.2.Testiranje produkcije suza:"
                            />
                        </Image>

                        <Image imageDesc={"Slika 2.3. Testiranje refleksa zenice oka hromatskim svetlom"}>
                            <StaticImage
                                src="../images/Slika_2.3.jpg"
                                alt="Slika 2.3. Testiranje refleksa zenice oka hromatskim svetlom"
                            />
                        </Image>


                    </CardContent>

                </Card>
            </Grid>
            <Grid className="sadrzaj" item md={3}>
                <Card style={{padding:"0.5rem", marginTop: "1rem",position: "sticky", right:0, top:20}}>
                    <Typography variant="h4">Sadržaj</Typography>
                    <AnchorLink className="anchorLink active" to="/prviDeo#Anatomijaokapasaimacaka" title="Anatomija oka pasa i mačaka">
                    <Typography variant="body1">{bull} Anatomija oka pasa i mačaka</Typography>
                    </AnchorLink>
                    <AnchorLink className="anchorLink" to="/prviDeo#Klinickipregledoka" title="Klinički pregled oka">
                        <Typography variant="body1"> {bull} Klinički pregled oka</Typography>
                    </AnchorLink>

                </Card>
            </Grid>
        </Grid>
    </Layout>
)


export default prviDeo
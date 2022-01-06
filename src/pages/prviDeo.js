import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';

const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(1.5) translate(-1rem)',  }}
    >
        •
    </Box>
);


const prviDeo = () => (
    <Layout>
        <Seo title="Prvi Deo" />
        <h1>Anatomija oka i dijagnostičke procedure</h1>

        <Card  variant="outlined" sx={{ minWidth: 275, maxWidth:0.9 }} style={{margin:"1rem"}} >
            <CardContent >
                <Typography sx={{ fontSize: 14 }} color="text.secondary" >
                    Odjeljak 1
                </Typography>
                <Typography variant="h5" component="div">
                    Anatomija oka pasa i mačaka
                </Typography>
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


                    </ul>
                </Typography>
            </CardContent>
        </Card>

        <Card variant="outlined" sx={{ minWidth: 275 }} style={{margin:"1rem"}} >
            <CardContent >
                <Typography sx={{ fontSize: 14 }} color="text.secondary" >
                    Odjeljak 2
                </Typography>
                <Typography variant="h5" component="div">
                    Klinički pregled oka
                </Typography>
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
                <CardMedia
                    component="img"
                    height="140"
                    image="../../images/Slika_2.1.png"
                    alt="Slika 2.1.Metodi fiksacije kako bi se obezbedio bezbedan klinički pregled kod agresivnih pacijenata"
                />

            </CardContent>
        </Card>




    </Layout>
)


export default prviDeo
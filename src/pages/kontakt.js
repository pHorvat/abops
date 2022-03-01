import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../components/stranica_dva/styleContact.scss"
import Grid from "@mui/material/Grid";
import contactBg from "../images/contactBg.jpg"

const kontakt = () => (
    <div style={{backgroundImage: `url(${contactBg})`,
            backgroundPosition:"center"
            }}>
    <Layout id="prva">
        <Seo title="contacts" />

        <h1 id="podNaslov">Kontaktirajte nas</h1>
        <p className="subtitle">Pošaljite nam poruku!</p>
            <Grid container>
        <div id="contact-container">
                <Grid className="povrat" item xs sm container>
                        <Grid className="prva" item xs container direction="row">
                <div className="contact-info">
                        <h4>
                                Kontakt
                        </h4>
                        <p>Popunite upit kako bi ste stupili u kontakt s nama!</p>

                        <div className="icon-text">
                                <i className="fa-duotone fa-phone"></i>
                                <span>462-321-211</span>
                        </div>
                        <div className="icon-text">
                                <i className="fa-duotone fa-envelopes"></i>
                                <span>oculus@private.com</span>
                        </div>
                        <div className="icon-text">
                                <i className="fa-duotone fa-map-location-dot"></i>
                                <span>Beograd, Nikole Tesla 14b</span>
                        </div>
                </div>
                                        </Grid>

                                <Grid item xs container direction="column">
                        <form action="https://getform.io/f/d4e0236a-d88a-4f98-b57c-4a8d9289e7e9" method="POST">
                        <div className="col">
                                <div className="form-group">
                                        <label htmlFor="ime">Ime</label>
                                        <input type="text" name="Ime"/>
                                </div>

                                <div className="form-group">
                                        <label htmlFor="prezime">Prezime</label>
                                        <input type="text" name="Prezime"/>
                                </div>
                        </div>

                        <div className="col">
                                <div className="form-group">
                                        <label htmlFor="email">E-Mail</label>
                                        <input type="email" name="email"/>
                                </div>
                                <div className="form-group">
                                        <label htmlFor="tel">Telefonski broj</label>
                                        <input type="tel" name="Tel. broj"/>
                                </div>
                        </div>
                        <div className="col">
                                <div className="form-group solo">
                                        <label htmlFor="text">Kako Vam možemo pomoći?</label>
                                        <div id="radio-buttons">
                                                <div className="radio-button">
                                                        <input type="radio" id="radioZakazati" name="Vrsta upita" value="zakazati"/><label htmlFor="radioZakazati">Zakazati
                                                        termin</label>
                                                </div>
                                                <div className="radio-button">
                                                        <input type="radio" id="radioOdgoda" name="Vrsta upita" value="odgoda"/><label htmlFor="radioOdgoda">Odgoda
                                                        termina</label>
                                                </div>
                                                <div className="radio-button">
                                                        <input type="radio" id="radioIzmjena" name="Vrsta upita" value="izmjena"/><label htmlFor="radioIzmjena">Izmjena
                                                        termina</label>
                                                </div>
                                                <div className="radio-button">
                                                        <input type="radio" id="radioUpit" name="Vrsta upita" value="upit"/><label htmlFor="radioUpit">Upit o
                                                        bolesti</label>
                                                </div>
                                        </div>
                                </div>
                        </div>
                        <div className="col">
                                <div className="form-group solo">
                                        <label>Poruka</label>
                                        <textarea name="Poruka"/>
                                </div>
                        </div>

                        <div className="col">
                                <div className="form-group solo right botun">
                                        <button type="submit" className="primary">Pošalji poruku</button>
                                </div>
                        </div>
                </form>
                                </Grid>
                </Grid>
        </div>
            </Grid>
    </Layout>
    </div>
)

export default kontakt
import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../components/stranica_dva/styleContact.scss"
import Grid from "@mui/material/Grid";

const kontakt = () => (
    <Layout id="prva">
        <Seo title="contacts" />
            <img src="https://images.pexels.com/photos/4214919/pexels-photo-4214919.jpeg?cs=srgb&dl=pexels-marián-šicko-4214919.jpg&fm=jpg" />
        <h1 id="podNaslov">Kontaktirajte nas</h1>
        <p className="subtitle">Lorem ipsum</p>
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
                <form>
                        <div className="col">
                                <div className="form-group">
                                        <label htmlFor="ime">Ime</label>
                                        <input type="text"></input>
                                </div>

                                <div className="form-group">
                                        <label htmlFor="prezime">Prezime</label>
                                        <input type="text"></input>
                                </div>
                        </div>

                        <div className="col">
                                <div className="form-group">
                                        <label htmlFor="email">E-Mail</label>
                                        <input type="email"></input>
                                </div>
                                <div className="form-group">
                                        <label htmlFor="tel">Telefonski broj</label>
                                        <input type="tel"></input>
                                </div>
                        </div>
                        <div className="col">
                                <div className="form-group solo">
                                        <label htmlFor="text">Kako Vam možemo pomoći?</label>
                                        <div id="radio-buttons">
                                                <div className="radio-button">
                                                        <input type="radio" id="radioZakazati" name="type"
                                                               value="zakazati"></input><label htmlFor="radioZakazati">Zakazati
                                                        termin</label>
                                                </div>
                                                <div className="radio-button">
                                                        <input type="radio" id="radioOdgoda" name="type"
                                                               value="odgoda"></input><label htmlFor="radioOdgoda">Odgoda
                                                        termina</label>
                                                </div>
                                                <div className="radio-button">
                                                        <input type="radio" id="radioIzmjena" name="type"
                                                               value="izmjena"></input><label htmlFor="radioIzmjena">Izmjena
                                                        termina</label>
                                                </div>
                                                <div className="radio-button">
                                                        <input type="radio" id="radioUpit" name="type"
                                                               value="upit"></input><label htmlFor="radioUpit">Upit o
                                                        bolesti</label>
                                                </div>
                                        </div>
                                </div>
                        </div>
                        <div className="col">
                                <div className="form-group solo">
                                        <label>Poruka</label>
                                        <textarea></textarea>
                                </div>
                        </div>

                        <div className="col">
                                <div className="form-group solo right botun">
                                        <button className="primary">Pošalji poruku</button>
                                </div>
                        </div>
                </form>
                                </Grid>
                </Grid>
        </div>
            </Grid>
    </Layout>
)

export default kontakt
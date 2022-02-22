import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../components/stranica_dva/styleContact.scss"

const kontakt = () => (
    <Layout id="prva">
        <Seo title="contacts" />
        <h1 id="podNaslov">Kontaktirajte nas</h1>
        <p className="subtitle">Lorem ipsum</p>

        <div id="contact-container">
                <div className="contact-info">
                        <h4>
                                Informacije za kontakt
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

                        <div className="social-media">
                                <a href="kontakt.js" className="icon-circle">
                                        <i className="icon"></i>
                                </a>
                        </div>

                        <div className="social-media">
                                <a href="kontakt.js" className="icon-circle">
                                        <i className="icon"></i>
                                </a>
                        </div>
                        <div className="social-media">
                                <a href="kontakt.js" className="icon-circle">
                                        <i className="icon"></i>
                                </a>
                        </div>
                        <div className="social-media">
                                <a href="kontakt.js" className="icon-circle">
                                        <i className="icon"></i>
                                </a>
                        </div>
                        <form>
                                <div className="col">
                                        <div className="form-group">
                                                <label>Ime</label>
                                                <input type="text"></input>
                                        </div>
                                        <div className="form-group">
                                                <label>Prezime</label>
                                                <input type="text"></input>
                                        </div>
                                </div>

                                <div className="col">
                                        <div className="form-group">
                                                <label>E-Mail</label>
                                                <input type="email"></input>
                                        </div>
                                        <div className="form-group">
                                                <label>Telefonski broj</label>
                                                <input type="tel"></input>
                                        </div>
                                </div>

                                <div className="col">
                                        <div className="form-group solo">
                                                <label>Kako Vam možemo pomoći?</label>
                                                        <div id="radio-buttons">
                                                                <div className="radio-button">
                                                                        <input type="radio" id="radioZakazati" name="type" value="zakazati"></input><label for="radioZakazati">Zakazati termin</label>
                                                                </div>
                                                                <div className="radio-button">
                                                                        <input type="radio" id="radioOdgoda" name="type" value="odgoda"></input><label for="radioOdgoda">Odgoda termina</label>
                                                                </div>
                                                                <div className="radio-button">
                                                                        <input type="radio" id="radioIzmjena" name="type" value="izmjena"></input><label for="radioIzmjena">Izmjena termina</label>
                                                                </div>
                                                                <div className="radio-button">
                                                                        <input type="radio" id="radioUpit" name="type" value="upit"></input><label for="radioUpit">Upit o bolesti</label>
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
                                        <div className="form-group solo right">
                                                <button className="primary">Pošalji poruku</button>
                                        </div>
                                </div>
                        </form>
                </div>
        </div>
    </Layout>
)

export default kontakt
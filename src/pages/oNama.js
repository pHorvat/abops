import React, {Component, useState} from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';
import putanja from '../images/Slika_background_kontakt.jpg'
import Layout from "../components/layout";
import Grid from "@mui/material/Grid";
import "../components/stranica_dva/oNama.scss";

const mapStyles = {
    width: '100%',
    height: "400px",
};

const m1_title = 'Mirjevo: ';
const m1_ime = 'Pupinova 46A';
const m1_lokacija = { lat: 44.7960, lng: 20.5216 };

const m2_title = 'Vračar: ';
const m2_ime = 'Krunska 155';
const m2_lokacija = { lat: 44.7997, lng: 20.4750 };

const m3_title = 'Novi Beograd: ';
const m3_ime = 'Blok 43';
const m3_lokacija = { lat: 44.8065, lng: 20.4210 };

export class MapContainer extends Component {
    state = {
        showingInfoWindow: false,
        activeMarker: {},
        selectedPlace: {}
    };

    onMarkerClick = (props, marker, e) =>
        this.setState({
            selectedPlace: props,
            activeMarker: marker,
            showingInfoWindow: true
        });

    onClose = props => {
        if (this.state.showingInfoWindow) {
            this.setState({
                showingInfoWindow: false,
                activeMarker: null
            });
        }
    };

    render() {
        return (
            <Layout className="oNama">
                <Grid id="mapCont" container>
            <Map className="fullWidth" id="map"
                google={this.props.google}
                zoom={12}
                style={mapStyles}
                initialCenter={
                    {
                        lat: 44.80401,
                        lng: 20.46513,
                    }

                }
            >
                {/* MARKER 1 */}
                <Marker
                    onClick={this.onMarkerClick}
                    title={m1_title}
                    name={m1_ime}
                    position={m1_lokacija}
                />
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                >
                    <div>
                        <h4>
                            {this.state.selectedPlace.title + " " + this.state.selectedPlace.name}
                        </h4>
                    </div>
                </InfoWindow>


                {/* MARKER 2 */}
                <Marker
                    onClick={this.onMarkerClick}
                    title={m2_title}
                    name={m2_ime}
                    position={m2_lokacija}
                />
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                >
                    <div>
                        <h4>
                            {this.state.selectedPlace.title + " " + this.state.selectedPlace.name}
                        </h4>
                    </div>
                </InfoWindow>




                {/* MARKER 3 */}
                <Marker
                    onClick={this.onMarkerClick}
                    title={m3_title}
                    name={m3_ime}
                    position={m3_lokacija}
                />
                <InfoWindow
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                >
                    <div>
                        <h4>
                            {this.state.selectedPlace.title + " " + this.state.selectedPlace.name}
                        </h4>
                    </div>
                </InfoWindow>




            </Map>
                </Grid>
            </Layout>
        );
    }
}



export default GoogleApiWrapper({
    apiKey: 'AIzaSyBY3wSWvSgsZ-o5z_jDRq684Q_auwmOAVw'
})(MapContainer);
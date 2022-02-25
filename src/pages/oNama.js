import React, {Component, useState} from 'react';
import { Map, GoogleApiWrapper, InfoWindow } from 'google-maps-react';
import putanja from '../images/Slika_background_kontakt.jpg'
import Layout from "../components/layout";
import Grid from "@mui/material/Grid";
import "../components/stranica_dva/oNama.scss"
import { Marker } from '@react-google-maps/api';


const mapStyles = {
    width: '100%',
    height: "400px",
};

const m1_ime = <h1 name="Mirjevo"></h1>
const m1_lokacija = { lat: 44.7960, lng: 20.5216 };

const { m2_ime } = "Vracar";
const m2_lokacija = { lat: 44.7997, lng: 20.4750 };

const { m3_ime } = "Blok 43";
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
                    id={1}
                    onClick={this.onMarkerClick}
                    name={m1_ime}
                    position={m1_lokacija}
                    slika={putanja}
                />
                <InfoWindow
                    anchor={m1_lokacija}
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                >
                    <div>
                        <h4>{this.state.selectedPlace.name}</h4>
                        <img style={{height: "100px", width: "100px"}}></img>
                    </div>
                </InfoWindow>



                {/* MARKER 2 */}
                <Marker
                    id={2}
                    onClick={this.onMarkerClick}
                    name={m2_ime}
                    position={m2_lokacija}
                    slika={putanja}
                />
                <InfoWindow
                    position={m2_lokacija}
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                >
                    <div>
                        <h4>{this.state.selectedPlace.name}</h4>
                        <img style={{height: "100px", width: "100px"}}></img>
                    </div>
                </InfoWindow>



                {/* MARKER 3 */}
                <Marker
                    id={3}
                    onClick={this.onMarkerClick}
                    name={m3_ime}
                    position={m3_lokacija}
                    slika={putanja}
                />
                <InfoWindow
                    position={m3_lokacija}
                    marker={this.state.activeMarker}
                    visible={this.state.showingInfoWindow}
                    onClose={this.onClose}
                >
                    <div>
                        <h4>{this.state.selectedPlace.name}</h4>
                        <img style={{height: "100px", width: "100px"}}></img>
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
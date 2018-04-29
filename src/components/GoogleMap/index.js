import React, { Component } from "react";
import { GoogleApiWrapper, Map, Marker, InfoWindow } from "google-maps-react";
import Spinner from "components/Spinner";
import MarkerPopUp from "./markerPopUp";
import withFetchOffices from "containers/Offices";

class GoogleMap extends Component {
  state = {
    activeMarker: {},
    showingInfoWindow: false,
    selectedPlace: {}
  };

  findAllBounds = () => {
    const {
      google,
      state: { offices }
    } = this.props;
    const bounds = new google.maps.LatLngBounds();
    offices.forEach(office => {
      bounds.extend({
        lat: Number(office.latitude),
        lng: Number(office.longitude)
      });
    });
    return bounds;
  };
  onMarkerClick = (props, marker) => {
    console.log(props);
    this.setState({
      selectedPlace: props,
      showingInfoWindow: true,
      activeMarker: marker
    });
  };
  onMapClicked = () => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: {}
      });
    }
  };

  renderMarkers = () => {
    return this.props.state.offices.map(office => (
      <Marker
        key={office.id}
        onClick={this.onMarkerClick}
        title={office.description}
        name={office.name}
        position={{ lat: office.latitude, lng: office.longitude }}
      />
    ));
  };

  render() {
    const { activeMarker, showingInfoWindow, selectedPlace } = this.state;
    const { google } = this.props;
    return (
      <Map
        style={{
          width: "1024px",
          height: "721px",
          margin: "50px auto 50px auto"
        }}
        google={google}
        initialCenter={{ lat: 37.774929, lng: -122.419416 }}
        minZoom={2}
        zoom={2}
        bounds={this.findAllBounds()}
        onClick={this.onMapClicked}
      >
        {this.renderMarkers()}
        <InfoWindow marker={activeMarker} visible={showingInfoWindow}>
          <MarkerPopUp selectedPlace={selectedPlace} />
        </InfoWindow>
      </Map>
    );
  }
}

const offices = withFetchOffices(GoogleMap);

export default GoogleApiWrapper({
  apiKey: "AIzaSyB1GSwH9KRP2fowcFeFByWow4iphMbvJcc",
  LoadingContainer: Spinner
})(offices);

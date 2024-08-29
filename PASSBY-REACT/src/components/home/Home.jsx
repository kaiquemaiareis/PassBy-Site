import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';

class MapContainer extends Component {
  render() {
    const mapStyles = {
      width: '100%',
      height: '100%',
    };

    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{ lat: -34.397, lng: 150.644 }}
      >
        <Marker position={{ lat: -34.397, lng: 150.644 }} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'SuaChaveDaAPI',
})(MapContainer);

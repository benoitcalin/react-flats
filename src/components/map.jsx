import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';

import Marker from './marker';

class Map extends Component {
  shouldComponentUpdate() {
    return true;
  }

  render () {
    const { selectedFlat } = this.props;
    return (
      <GoogleMapReact
        bootstrapURLKeys={{ key: '' }}
        defaultCenter={{
          lat: 48.884211,
          lng: 2.34689
        }}
        center={{
          lat: selectedFlat.lat,
          lng: selectedFlat.lng
        }}
        defaultZoom={15}
      >
        <Marker
          lat={selectedFlat.lat}
          lng={selectedFlat.lng}
        />
      </GoogleMapReact>
    )
  }
}

export default Map;

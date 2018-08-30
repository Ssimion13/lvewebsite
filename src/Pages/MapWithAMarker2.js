import React from "react"
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps";
  
  const MapWithAMarker2 = withScriptjs(withGoogleMap(props =>
    <GoogleMap
      defaultZoom={17}
      defaultCenter={{ lat: 36.118141, lng: -115.136741 }}
       
    >
      <Marker
        position={{ lat: 36.118141, lng: -115.136741 }}
      />
    </GoogleMap>
  ));
  
export default MapWithAMarker2;
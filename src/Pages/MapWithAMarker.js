import React from "react"
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    Marker,
  } from "react-google-maps";
  
  const MapWithAMarker = withScriptjs(withGoogleMap(props =>
    <GoogleMap
      defaultZoom={17}
      defaultCenter={{ lat: 36.056545, lng: -115.101143 }}
       
    >
      <Marker
        position={{ lat: 36.056545, lng: -115.101143 }}
      />
    </GoogleMap>
  ));
  
export default MapWithAMarker;
import React from "react"
import {
    withScriptjs,
    withGoogleMap,
    GoogleMap,
    InfoWindow,
    Marker,
  } from "react-google-maps";

  const MapWithAMarker = withScriptjs(withGoogleMap(props =>
    <GoogleMap
      defaultZoom={17}
      defaultCenter={{ lat: 36.056545, lng: -115.101143 }}
       
    >
      <Marker
        position={{ lat: 36.056545, lng: -115.101143 }}
        title={'Las Vegas Endoscopy'} 
      >
      <InfoWindow>
			<div className="infoWindowText"> Las Vegas Endoscopy </div>

			</InfoWindow>
      </Marker>
    </GoogleMap>
  ));
  
export default MapWithAMarker;
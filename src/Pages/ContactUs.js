import React from "react";
import MapWithAMarker from "./MapWithAMarker";

function ContactUs(props){
    return(
        <div className="informativePage">   
              <MapWithAMarker
                googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAf-HYZFuFTYA1jYr6Xf5SuqB6PCx_nZVE&v=3.exp&libraries=geometry,drawing,places"
                loadingElement={<div style={{ height: `100%` }} />}
                containerElement={<div style={{ height: `400px` }} />}
                mapElement={<div style={{ height: `100%` }} />}
            />
        </div>
    )
}

export default ContactUs;


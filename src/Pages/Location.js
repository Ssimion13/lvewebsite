import React, {Component} from "react";
import logo from "./../Images/logo.png"
import MapWithAMarker from "./MapWithAMarker";
// import Map from "./FrontPage/Map.js";

// import MapWithAMarker from "./MapWithAMarker";
// //import MapWithAMarker2 from "./MapWithAMarker2";
// import {Button} from "reactstrap";

class Location extends Component{
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render(){
        return(
            <div className="contactMain">
            <div className="blockBar">
                <h1 className="blockHeader"> Location </h1>
            </div>

            <div className="contactTextContent">
                {/* <div className="contactNavbar">
                    <Link className="contactButton" to="/"> Home </Link>
                    <Link className="contactButton" to="/Services"> Services </Link>
                    <Link className="contactButton" to="/AboutUs"> About </Link>
                    <Link className="contactButton" to="/Awards"> Awards </Link>
                    <Link className="contactButton" to="/Location"> Contact </Link>
                </div> */}
                <img className="contactLogo" alt="logo" src={logo} />
                <h4 className="contactAddress">    
                    <b> Las Vegas Endoscopy </b> <br/>
                    7315 S Pecos Road <br/>
                    Suite 103 <br/>
                    Las Vegas, NV 89120 <br/>
                </h4>
                <h4 className="contactAddress">
                Phone: (816) 232-2333 
                </h4>
                <h3 className="contactAddress"> Hours of Operation </h3>
                <h4 className="contactAddress">
                    Monday: 6:30am - 4pm <br/>
                    Tuesday: 6:30am - 4pm <br/>
                    Wednesday: 6:30am - 4pm <br/>
                    Thursday: 6:30am - 4pm <br/>
                    Friday: 6:30am - 4pm <br/>
                </h4>
            </div>
            <div className="carouselContainer">
                {/* <Map /> */}
                <MapWithAMarker googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAf-HYZFuFTYA1jYr6Xf5SuqB6PCx_nZVE&v=3.exp&libraries=geometry,drawing,places"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                    />
            </div>



        </div>
            // <div className="contactUsPage">
            //     <div className="contactUsSection">
            //         { /* For LVE no need for this just LVG needs this
            //         <h2> LAS VEGAS </h2>
            //         <div className="map">   
            //             <MapWithAMarker2
            //                 googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAf-HYZFuFTYA1jYr6Xf5SuqB6PCx_nZVE&v=3.exp&libraries=geometry,drawing,places"
            //                 loadingElement={<div style={{ height: `100%` }} />}
            //                 containerElement={<div style={{ height: `400px` }} />}
            //                 mapElement={<div style={{ height: `100%` }} />}
            //             />
            //         </div> */}
            //         <div className="map">   
            //             <MapWithAMarker
            //                 googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyAf-HYZFuFTYA1jYr6Xf5SuqB6PCx_nZVE&v=3.exp&libraries=geometry,drawing,places"
            //                 loadingElement={<div style={{ height: `100%` }} />}
            //                 containerElement={<div style={{ height: `400px` }} />}
            //                 mapElement={<div style={{ height: `100%` }} />}
            //             />
            //         </div>
            //         <div className="contactInformation">
            //             <h2> Contact Information </h2>
            //             <h4> Call today to make an appointment at either one of our locations. </h4>
            //             <p>
            //                 Phone: 1-877 LV GASTRO <br/>
            //                 Office: 702-982-7240 <br/>
            //                 Fax: 702-586-7506 <br/>
            //                 Email: lvg@lvgastro.com <br/>
            //                 <br/>
            //                 {/* <h5> Las Vegas </h5>
            //                 3910 S Maryland Parkway Suite 9b
            //                 Las Vegas, Nevada
            //                 89119, United States
            //                 <br/>
            //                 <br/>
            //                 <h5> Henderson </h5> */}
            //                 7315 S Pecos Rd Suite 101
            //                 Las Vegas, Nevada
            //                 89120 United States
            //             </p>
            //         </div>
            //         <div className="contactForm">
            //             <h2> Contact Us </h2>
            //             <p> Your Name (required) </p>
            //             <input />
            //             <br/>
            //             <p> Your Email (required) </p>
            //             <input />
            //             <br/>
            //             <p> Subject </p>
            //             <input />
            //             <br/>
            //             <p> Your Message </p>
            //             <input />
            //             <br/>
            //             <Button> Send </Button>
            //         </div>

                

            //     </div>
            // </div>
        )
    }
}

export default Location;


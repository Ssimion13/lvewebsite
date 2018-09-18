import React from 'react';
// import {Link} from "react-router-dom";
import logo from "../../Images/logo.png"
import FrontCarousel from "./FrontCarousel";


const TopBar = function(){
        return (
            <div className="footerMain">
                <div className="footerTextContent">
                    {/* <div className="footerNavbar">
                        <Link className="footerButton" to="/"> Home </Link>
                        <Link className="footerButton" to="/Services"> Services </Link>
                        <Link className="footerButton" to="/AboutUs"> About </Link>
                        <Link className="footerButton" to="/Awards"> Awards </Link>
                        <Link className="footerButton" to="/ContactUs"> Contact </Link>
                    </div> */}
                    <img className="footerLogo" alt="logo" src={logo} />
                    <h4 className="footerAddress">    
                        <b> Las Vegas Endoscopy </b> <br/>
                        7315 S Pecos Road <br/>
                        Suite 103 <br/>
                        Las Vegas, NV 89120 <br/>
                    </h4>
                    <h4 className="footerAddress">
                    Phone: (816) 232-2333 
                    </h4>
                    <h3 className="footerAddress"> Hours of Operation </h3>
                    <h4 className="footerAddress">
                        Monday: 6:30am - 4pm <br/>
                        Tuesday: 6:30am - 4pm <br/>
                        Wednesday: 6:30am - 4pm <br/>
                        Thursday: 6:30am - 4pm <br/>
                        Friday: 6:30am - 4pm <br/>
                    </h4>
                </div>
                <div className="carouselContainer">
                    <FrontCarousel />
                </div>



            </div>
        )
}

export default TopBar;
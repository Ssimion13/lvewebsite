import React from 'react';
import {Link} from "react-router-dom";
import logo from "../../Images/logo.png"


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
                    <img className="footerLogo" src={logo} />
                    <p className="footerAddress">    
                        Las Vegas Endoscopy <br/>
                        7315 S Pecos Road <br/>
                        Suite 103 <br/>
                        Las Vegas, NV 89120 <br/>
                    </p> <br/>
                    <p className="footerAddress">
                    Phone: (816) 232-2333 
                    </p>
                    <h4> Hours of Operation </h4>
                    <p>
                        Monday: 6:30am - 4pm <br/>
                        Tuesday: 6:30am - 4pm <br/>
                        Wednesday: 6:30am - 4pm <br/>
                        Thursday: 6:30am - 4pm <br/>
                        Friday: 6:30am - 4pm <br/>
                    </p>
                </div>


            </div>
        )
}

export default TopBar;
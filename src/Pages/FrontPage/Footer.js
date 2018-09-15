import React from 'react';
import {Link} from "react-router-dom";



const TopBar = function(){
        return (
            <div className="footerMain">
                <div className="footerTextContent">
                    <div className="footerNavbar">
                        <Link className="footerButton" to="/"> Home </Link>
                        <Link className="footerButton" to="/Services"> Services </Link>
                        <Link className="footerButton" to="/AboutUs"> About </Link>
                        <Link className="footerButton" to="/Awards"> Awards </Link>
                        <Link className="footerButton" to="/ContactUs"> Contact </Link>
                    </div>
                </div>

            </div>
        )
}

export default TopBar;
import React from 'react';
// import {Link} from "react-router-dom";
import logo from "../../Images/transparentlogo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const TopBar = function(){
    const icons = window.innerWidth > 800 ? "2x" : "1x";
        return (
            <div className="footerMain">
                <div className="footerDiv">
                    <img className="footerLogo" alt="logo" src={logo} />
                </div>
                <div className="footerDiv">
                    <h4> Made by　Scott Simion </h4>
                </div>
                <div className="footerDiv">
                    <a href="https://www.facebook.com/lvgastro/" className="footerThumbnailDiv facebook">
                        <FontAwesomeIcon icon={['fab', 'facebook']} size={icons} className="linkThumbnail"/>
                    </a>
                    <a href="https://twitter.com/lvgastro?lang=en" className="footerThumbnailDiv twitter">
                        <FontAwesomeIcon icon={['fab', 'twitter']} size={icons} />
                    </a>
                    <a href="https://www.instagram.com/lvgastro/?hl=en" className="footerThumbnailDiv instagram">
                        <FontAwesomeIcon icon={['fab', 'instagram']} size={icons} />
                    </a>
                    <a href="https://www.youtube.com/channel/UC8UcyfVXDiZLm4NjXP3IRTg" className="footerThumbnailDiv youtube">
                        <FontAwesomeIcon icon={['fab', 'youtube']} size={icons} />
                    </a>
                </div>

            </div>
        )
}

export default TopBar;
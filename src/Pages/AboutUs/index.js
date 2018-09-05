import React from "react";
import {Link} from "react-router-dom";
import drfajardo from "../../Images/drfajardo.jpg";
import drcremonini from "../../Images/drcremonini.jpg";

function AboutUs(){
    return(
        <div className="informativePage"> 
            <div className="aboutUs">
            <h1> About Us </h1>
            <p> Read about our main doctors below: </p>
            </div>
            <Link to="/DrFajardo" className="doctorThumbnail">
                <img className="doctorPicture" alt="drFajardo" src={drfajardo} />
                <div className="doctorInfo">
                    <h2 className="doctorTitle" > Dr. Noel Fajardo </h2>
                    <p className="doctorSectionText"> 
                    </p>
                </div>
                {/* <h5 className="whyChooseLVEUnderline"> </h5> */}
            </Link>
            <Link to="/DrCremonini" className="doctorThumbnail">
                <img src={drcremonini} className="doctorPicture" alt="drCremonini" />
                <div className="doctorInfo">
                    <h2 className="doctorTitle"> Dr. Filippo Cremonini </h2>
                    <p className="doctorSectionText">
                    </p>
                </div>
            </Link>
        </div>
    )
}

export default AboutUs;
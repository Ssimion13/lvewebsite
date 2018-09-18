import React from "react";
// import {Link} from "react-router-dom";
import FrontPageButton from "./FrontPageButton";
import note from "../../Images/note.png";
import conversation from "../../Images/conversation.png"
import certificate from "../../Images/certificate.png";
import doctor from "../../Images/doctor.png";


function FrontPageButtonContainer(){

    return(
        <div className="frontPageButtonCarouselDiv">

            <div className="frontPageButtonsDiv">
                <FrontPageButton link="/AboutUs" buttonnumber={"button1"} picture={doctor} altname="doctoricon" text="About Us">
                </FrontPageButton>
                <FrontPageButton link="/Services" picture={note} buttonnumber={"button2"} altname="noteicon" text="Services">
                </FrontPageButton>
                <FrontPageButton link="/Awards" picture={certificate} buttonnumber={"button3"} altname="certificateicon" text="Awards">
                </FrontPageButton>
                <FrontPageButton link="/ContactUs" picture={conversation} buttonnumber={"button4"} altname="conversationicon" text="Contact Us">
                </FrontPageButton>
                {/* wtf was this below? */}
                {/* <Link to="/Services" className="frontPageButton button2"> 
                    <span> <img className="frontPageButtonIcons" src={note} alt="noteicon"/> </span>
                    <span className="frontPageButtonText"> Services </span>
                </Link> 
                <Link to="/Awards" className="frontPageButton button3"> 
                    <span> <img className="frontPageButtonIcons" src={certificate} alt="certificateicon"/> </span>
                    <span className="frontPageButtonText"> Awards </span>
                </Link> 
                <Link to="/ContactUs" className="frontPageButton button4"> 
                    <span> <img className="frontPageButtonIcons" src={conversation} alt="conversationicon"/> </span>
                    <span className="frontPageButtonText"> Contact Us </span>
                </Link>  */}
            </div>
        </div>
    )

}

export default FrontPageButtonContainer
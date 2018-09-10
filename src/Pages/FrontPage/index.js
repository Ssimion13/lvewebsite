import React, {Component} from "react";
import conversation from "../../Images/conversation.png";
import certificate from "../../Images/blackcertificate.png";
import note from "../../Images/note.png";
import doctor from "../../Images/doctor.png";
import {Link} from "react-router-dom";
import FrontCarousel from "./FrontCarousel.js";
import Testamonials from "./Testamonials.js";
import WhyChooseLVEThumbnail from "./WhyChooseLVEThumbnail.js"
import FrontPageButton from "./FrontPageButton.js";

class FrontPage extends Component {
    // constructor(){
    //     super();
    // }

    render(){
        return(
            <div className="frontPage">
                {/* <div className="imagePlaceholder"> Placeholder, Insert image Here </div> */}
                <div className="frontPageButtonCarouselDiv">
                    <div className="carouselContainer">
                    <FrontCarousel />
                    </div>
                    <div className="frontPageButtonsDiv">
                        <FrontPageButton link="/AboutUs" buttonnumber={"button1"} picture={doctor} altname="doctoricon" text="About Us">
                        </FrontPageButton>
                        <FrontPageButton link="/Services" picture={note} buttonnumber={"button2"} altname="noteicon" text="Services">
                        </FrontPageButton>
                        <FrontPageButton link="/Awards" picture={certificate} buttonnumber={"button3"} altname="certificateicon" text="Awards">
                        </FrontPageButton>
                        <FrontPageButton link="/ContactUs" picture={conversation} buttonnumber={"button4"} altname="conversationicon" text="Contact Us">
                        </FrontPageButton>
                        <Link to="/Services" className="frontPageButton button2"> 
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
                        </Link> 
                    </div>
                </div>
                <div className="whyChooseLVESection"> 
                    <h3 className="whyChooseLVETitle"> Why Choose Las Vegas Endoscopy? </h3>
                    <h5 className="whyChooseLVEUnderline"> </h5>
                    <div className="whyChooseLVEThumbnailDiv">
                        <WhyChooseLVEThumbnail
                            title="More experience"
                            text="Every year, thousands of people come to Las Vegas Endoscopy for care.
                            Our Gastroenterologists are experienced
                            specialists in treating rare and complex gastrointestinal conditions." >
                        </WhyChooseLVEThumbnail>
                        <WhyChooseLVEThumbnail
                            title="The right answers"
                            text="Every year, thousands of people come to Las Vegas Endoscopy for care.
                            Our Gastroenterologists are experienced
                            specialists in treating rare and complex gastrointestinal conditions." >
                        </WhyChooseLVEThumbnail>
                        <WhyChooseLVEThumbnail
                            title="Seamless Care"
                            text="At Las Vegas Endoscopy, every aspect of your care is coordinated and teams of experts work together to provide 
                            exactly the care you need. What might take months elsewhere can often be done in days here." >
                        </WhyChooseLVEThumbnail>
                        <WhyChooseLVEThumbnail
                            title="Unparalleled expertise"
                            text="Our Doctors at Las Vegas Endoscopy are Mayo Clinic and Harvard Medical School trained.
                            In the U.S. News & World Report rankings of top hospitals, Las Vegas Endoscopy 
                            is consistently ranked among the top clinical centers in the nation." >
                        </WhyChooseLVEThumbnail>
                    </div>
                </div>
                <Testamonials />
            </div>
        )
    }
}

export default FrontPage;
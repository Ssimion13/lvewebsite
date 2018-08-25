import React, {Component} from "react";
import conversation from "./Images/conversation.png";
import certificate from "./Images/blackcertificate.png";
import note from "./Images/note.png";
import doctor from "./Images/doctor.png";
import {Link} from "react-router-dom";
import FrontCarousel from "./FrontCarousel.js";

class FrontPage extends Component {

    render(){
        return(
            <div className="frontPage">
                
                {/* <div className="imagePlaceholder"> Placeholder, Insert image Here </div> */}
                <FrontCarousel />
                <div className="frontPageButtonsDiv">
                    <Link to="/AboutUs" className="frontPageButton button1">
                        <span> <img className="frontPageButtonIcons" src={doctor} alt="doctoricon"/> </span> 
                        <span className="frontPageButtonText"> About Us </span> 
                    </Link>
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
                <div className="whyChooseLVESection"> 
                    <h3 className="whyChooseLVETitle"> Why Choose Las Vegas Endoscopy? </h3>
                    <h5 className="whyChooseLVEUnderline"> </h5>
                    <div className="whyChooseLVEThumbnailDiv">
                        <div className="whyChooseLVEThumbnail"> 
                            <h5> <b> More experience </b> </h5>
                                <p> Every year, thousands of people come to Las Vegas Endoscopy for care.
                                Our Gastroenterologists are experienced
                                specialists in treating rare and complex gastrointestinal conditions.
                                </p>   
                        </div>
                        <div className="whyChooseLVEThumbnail"> 
                            <h5> <b> The right answers </b> </h5>
                            <p> Getting effective treatment depends on identifying the right problem. 
                                In a recent study, 9001 percent of patients who came to Las Vegas Endoscopy for a second opinion 
                                received a new or refined diagnosis.
                            </p>
                        </div>
                        <div className="whyChooseLVEThumbnail">
                            <h5> <b> Seamless Care </b> </h5>
                            <p> At Las Vegas Endoscopy, every aspect of your care is coordinated and teams of experts work together to provide 
                                exactly the care you need. What might take months elsewhere can often be done in days here.
                            </p>
                        </div>
                        <div className="whyChooseLVEThumbnail">
                            <h5> <b> Unparalleled expertise </b> </h5>
                            <p> Our Doctors Las Vegas Endoscopy are Mayo Clinic and Harvard Medical School trained
                            In the U.S. News & World Report rankings of top hospitals, Las Vegas Endoscopy 
                            is consistently ranked among the top clinical centers in the nation.
                            </p>
                        </div>
                    </div>
                
                </div>
            </div>
        )
    }
}

export default FrontPage;
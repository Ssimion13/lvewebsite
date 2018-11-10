import React, {Component} from "react";
import {Link} from "react-router-dom";
// import Testimonials from "./Testimonials.js";
import WhyChooseLVEThumbnail from "./WhyChooseLVEThumbnail.js"
import WhyChooseLVECarousel from "./WhyChooseLVECarousel";
// import drfajardo from "../../Images/drfajardo.png";
import FeeSectionThumbnail from "./FeeSectionThumbnail.js";
import microscope from "../../Images/microscope.jpg";
import doctorlaptop from "../../Images/doctorlaptop.jpg";
import ourwork from "../../Images/ourwork.jpg";
import medicine from "../../Images/drugggs.jpg"
// import FrontPageButtonContainer from "./FrontPageButtonContainer";
import { Button } from 'reactstrap';
import lvecommercial from "../../Videos/lvecommercial.mp4";
import VideoModal from "./VideoModal.js";
import FrontPageService from "./FrontPageService/"
import ORRoom from "../../Images/sampleORroom.jpg";
import sunrise from "../../Images/happysunrise.jpg";
import trollpicture from "../../Images/totallyorroom.jpeg";
//react reveal
import Fade from "react-reveal/Fade";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'






class FrontPage extends Component {
    constructor(){
        super();
    }

    componentDidMount() {
        window.scrollTo(0, 0)
    }


    render(){
        
        //this variable determines the size of icons based on window size.
        const icons = window.innerWidth > 800 ? "5x" : "2x";
        return(
            <div className="frontPage">
                <div className="frontPageVideo">
                    <video className="background-video" muted loop autoPlay >
                        <source src={lvecommercial} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="videoButtonDiv">
                        <Button className="videoButton"> 
                            <Link to="/Location" className="videoButtonText" > Location </Link>
                        </Button>
                        <VideoModal />
                    </div>
                </div>
                <div className="frontPageIntroDiv">
                    <div className="centerAlignerText">
                        <h1 className='centeredIntroTitle'>  Bringing Tomorrow, Today </h1>

                        <h4 className="frontPageHeadingText">
                        "Insert one of those questionable one-liner quotes like those think tanks do that hire hundreds of people to subliminally convince people to buy something for here because Scott needs this to hold as a placeholder"
                        </h4>
                    </div>
                </div>


                <div className="blockBar">
                    <h1 className="blockHeader"> Our Services </h1>
                </div>
                <div className="whyChooseLVECarousel">
                    <WhyChooseLVECarousel />
                </div>
                <div className="frontPageServicesMain">
                <div className="frontPageServicesDiv">
                    <Fade bottom>
                        <div className="servicesButtonDiv">
                            <FrontPageService media={ORRoom} linkTarget={"/ColonoscopyCancerScreening"} heading={"Colonoscopy Screening"} margin="40px"/>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className="servicesButtonDiv">
                            <FrontPageService media={ORRoom} linkTarget={"/UpperEndoscopy"} heading={"Upper Endoscopy"} margin="40px"/>
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className="servicesButtonDiv">
                            <FrontPageService media={sunrise} heading={"GI Clinic"} linkTarget={"/GIMotilityClinic"} />
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className="servicesButtonDiv">
                            <FrontPageService media={trollpicture} heading={"Hepatitis Clinic"} linkTarget={"/ViralHepatitisClinic"} />
                        </div>
                    </Fade>
                </div>
                </div>
                {/* <FrontPageButtonContainer /> */}
                {/* <Testimonials /> */}
                {/* I'm not sure whether I need this part or not. */}
                {/* {window.innerWidth > 500 ? */}

                 {/* : null } */}
                {/* {window.innerWidth < 500 ? */}
                <div className="blockBar">
                    <h1 className="blockHeader"> Why Las Vegas Endoscopy? </h1>
                </div>
                <div className="whyChooseLVESection"> 
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
                <div className="feeSectionThumbnailDiv">

                    <FeeSectionThumbnail media={ourwork} opacity={"0.2"}
                        heading={"New Patients"}
                    />
                    <FeeSectionThumbnail media={doctorlaptop} opacity={"0.2"}
                        heading={"Established Patients"}
                    />
                    <FeeSectionThumbnail media={medicine} opacity={"0.2"}
                        heading={"Preparing For Procedure?"}
                    />
                    <FeeSectionThumbnail media={microscope} opacity={"0.2"}
                        heading={"Laboratory"}
                    />
                </div>
                <div className="socialMedia">
                    <div className="socialMediaDiv">
                        <h2 className="socialMediaTitle"> Find us on Social Media! </h2>
                        <div className="linkThumbnailHolder">
                            <a href="https://www.facebook.com/lvgastro/" className="linkThumbnailDiv facebook">
                                <FontAwesomeIcon icon={['fab', 'facebook']} size={icons} className="linkThumbnail"/>
                            </a>
                            <a href="https://twitter.com/lvgastro?lang=en" className="linkThumbnailDiv twitter">
                                <FontAwesomeIcon icon={['fab', 'twitter']} size={icons} />
                            </a>
                            <a href="https://www.instagram.com/lvgastro/?hl=en" className="linkThumbnailDiv instagram">
                                <FontAwesomeIcon icon={['fab', 'instagram']} size={icons} />
                            </a>
                            <a href="https://www.youtube.com/channel/UC8UcyfVXDiZLm4NjXP3IRTg" className="linkThumbnailDiv youtube">
                                <FontAwesomeIcon icon={['fab', 'youtube']} size={icons} />
                            </a>
                        </div>
                    </div>
                </div>
                {/* : null } */}
                
            </div>
        )
    }
}

export default FrontPage;
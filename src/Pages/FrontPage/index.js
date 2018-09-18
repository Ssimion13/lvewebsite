import React, {Component} from "react";
import Footer from "./Footer.js";
// import Testimonials from "./Testimonials.js";
import WhyChooseLVEThumbnail from "./WhyChooseLVEThumbnail.js"
import WhyChooseLVECarousel from "./WhyChooseLVECarousel";
import drfajardo from "../../Images/drfajardo.png";
import FeeSectionThumbnail from "./FeeSectionThumbnail.js";
import microscope from "../../Images/microscope.jpg";
import doctorlaptop from "../../Images/doctorlaptop.jpg";
import ourwork from "../../Images/ourwork.jpg";
import medicine from "../../Images/drugggs.jpg"
import FrontPageButtonContainer from "./FrontPageButtonContainer";

class FrontPage extends Component {
    // constructor(){
    //     super();
    // }

    render(){
        return(
            <div className="frontPage">
                <div className="whyChooseLVECarousel">
                    <WhyChooseLVECarousel />
                </div>
                <div className="frontPageIntro">
                    <div className="frontPageIntroText">
                        <h2 className="frontPageHeading">
                            The best in Las Vegas 
                        </h2>
                        <p className="frontPageHeadingText">
                            Take a look at this doctor. Sure, the guy <br/> who edited the image didn't photoshop very well  (he radiates a <i> POWERFUL blue aura </i>),
                            but ignore that-- you can tell this doctor knows style. 
                        </p>
                    </div>
                    <img alt="DrFajardo" className="drFajardoFrontPicture" src={drfajardo} />
                </div>
                <div className="blockBar">
                    <h1 className="blockHeader"> Our Services </h1>
                </div>
                <FrontPageButtonContainer />
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
                {/* : null } */}
                <div className="blockBar">
                    <h1 className="blockHeader"> Our location </h1>
                </div>
                <Footer />
            </div>
        )
    }
}

export default FrontPage;
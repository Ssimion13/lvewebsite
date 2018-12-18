import React, {Component} from "react";
import WhyChooseLVECarousel from "./WhyChooseLVECarousel";
import FrontPageService from "./FrontPageService/"
import ORRoom from "../../Images/operatingroom.JPG";
import nursestation from "../../Images/nursestation.JPG";
import Fade from "react-reveal/Fade";
import FeeSection from "./FeeSection";
// import microscope from "../../Images/microscope.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'




class FrontPage extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render(){
        //this variable determines the size of icons based on window size.
        const icons = window.innerWidth > 600 ? "5x" : "2x";
        return(
            <div className="frontPage">
                <div className="frontPageVideo">
                    <iframe title="LVE Capsule Endoscopy" width="560" height="315" className="sidePageVideo" src="https://www.youtube.com/embed/R6Icr1I7KvI" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div className="frontPageIntroDiv">
                    <div className="centerAlignerText">
                        <h1 className='centeredIntroTitle'>  Welcome to Las Vegas Endoscopy! </h1>

                        <h4 className="frontPageHeadingText">
                            Here at Las Vegas Endoscopy, we take pride in our work and our commitment to the community. We use state-of-the-art GI techniques, the newest technology, and top-tier staff to ensure the best experience possible for our patients.
                        </h4>
                        <h4 className="frontPageHeadingText"> Call us today! (816) 232-2333 </h4>
                    </div>
                </div>

                <div className="blockBar">
                    <h1 className="blockHeader"> Our Services </h1>
                </div>
                <div className="frontPageServicesMain">
                <div className="frontPageServicesDiv">
                    <Fade bottom>
                        <div className="servicesButtonDiv">
                            <FrontPageService 
                                media={ORRoom} 
                                linkTarget={"/ColonoscopyCancerScreening"} 
                                heading={"Colonoscopy Screenings"} 
                                margin="40px"
                                info="With the newest colonoscopes in hand, our doctors ensure the health of your colon."
                                />
                        </div>
                    </Fade>
                    <Fade bottom>
                        <div className="servicesButtonDiv">
                            <FrontPageService 
                                media={nursestation} 
                                linkTarget={"/UpperEndoscopy"} 
                                heading={"Upper Endoscopies (EGD)"} 
                                margin="40px"
                                info="An endoscopy with us is convenient and easy."
                            />
                        </div>
                    </Fade>
                    {/* <Fade bottom>
                        {/* <div className="servicesButtonDiv">
                            <FrontPageService 
                                media={microscope} 
                                // linkTarget={"/Laboratory"} 
                                heading={"In House Laboratory"} 
                                margin="40px"
                                info="Our surgical center is supported by an in-house laboratory, allowing us to quickly analyze and get the results you need."
                            />
                        </div> 
                    </Fade> */}
                </div>
                </div>
                {window.innerWidth > 800 ? 
                <div className='whyChooseLVECarouselHolder'> 
                        <WhyChooseLVECarousel />
                </div>
                : null 
                }
                <div className="blockBar">
                    <h1 className="blockHeader"> Why Las Vegas Endoscopy? </h1>
                </div>
                <FeeSection />
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
            </div>
        )
    }
}

export default FrontPage;
import React from "react";
import {Link} from "react-router-dom";
import drfajardo from "../../Images/drfajardo.jpg";
import drcremonini from "../../Images/drcremonini.jpg";
import groupphoto from "../../Images/LVG/LVG 1.jpg"

class AboutUs extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render(){
        return (
            <div className="informativePage"> 
                <div className="blockBar">
                    <h1 className="blockHeader"> About Us </h1>
                </div>
                <img src={groupphoto} alt="groupimage" className="groupPhoto"/>
                
                <div className="aboutUs">
                <p className="sectionText"> At Las Vegas Endoscopy, our doctors and staff are committed to not only the health of our patients, but to the health and quality of life of all in Las Vegas. Our doctors also do much work in both 
                    scientific research and community involvement: read more below! </p>
                </div>
                <div className="aboutDoctorSection">
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
            </div>
        )
    }
}

export default AboutUs;
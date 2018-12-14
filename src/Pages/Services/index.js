import React from "react";
import {Button} from "reactstrap";
import {Link} from 'react-router-dom';
import e1m1 from "../../Images/e1m1.JPG"
import procedure from "../../Images/procedure.png"
import video from "../../Videos/compiledVideo.mp4"
import operatingroom from "../../Images/operatingroom.JPG";

function Services(){
    
    return(
        <div className="servicesBackground">
            <div className="servicesMain"> 
                <div className="blockBar">
                    <h1 className="blockHeader"> Services </h1>
                </div>
                <div className="serviceIndexTopVideo">
                <video className="background-video"  controls poster={operatingroom} >
                        <source src={video} type="video/mp4" />
                        Your browser does not support the video tag.
                </video>
                <p className="serviceDescriptionText slightPaddingTop"> 
                    At Las Vegas Endoscopy, we use the latest scopes and tools to make your procedure precise and easy. Our Fuse© Gastroscopes/Endoscopes are designed with three cameras and the ability to twist inside of the body and remove polyps / take samples easily.
                    Equipped with these scopes, our doctors can find things that other medical centers can't, ensuring that nothing is left unchecked.
                </p>
                </div>
                <div className="serviceIndexDiv">
                <div className="blockBar">
                    <h1 className="blockHeader"> Colonoscopy and Colon Cancer Screening Services </h1>
                </div>
                    <img src={procedure} alt="procedure" className="serviceDescriptionImage" />
                    <p className="serviceDescriptionText slightPaddingTop"> A colonoscopy is an exam of the entire colon and the rectum with a colonoscope,
                        a thin flexible tube with a small camera at the end. This painless procedure
                        can detect abnormalities within the colon such as ulcerations, inflammation,
                        strictures or narrowing, polyps and neoplasm or cancer.
                    </p>
                    <Link to="/ColonoscopyCancerScreening"> 
                        <Button> Click Here </Button>
                    </Link>
                </div>
                <div className="serviceIndexDiv">
                <div className="blockBar">
                    <h1 className="blockHeader"> Upper Endoscopy - EGD </h1>
                </div>
                    <img src={e1m1} alt="endoscopyprocedure" className="specialImage sideways" />
                    <p className="serviceDescriptionText slightPaddingTop">
                        An upper endoscopy, also referred to as an esophagogastroduodenoscopy, 
                        or EGD, is a painless examination of the esophagus, stomach and the 
                        first portion of the small intestine or the duodenum. This is done 
                        with an endoscope, a thin, flexible tube with a camera at the end. 
                        Tissue samples, referred to as biopsies, may be taken during the procedure 
                        to check for inflammation, changes in the lining of the esophagus, 
                        stomach and duodenum, and to determine the presence of the bacteria, 
                        Helicobacter pylori, which can cause gastric cancer.
                    </p>
                    <Link to="/UpperEndoscopy"> 
                        <Button> Click Here </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Services;
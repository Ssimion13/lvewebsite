import React from "react";
import {Button} from "reactstrap";
import {Link} from 'react-router-dom';
import e1m1 from "../../Images/e1m1.JPG"
import procedure from "../../Images/procedure.png"

function Services(){
    
    return(
        <div className="servicesBackground">
            <div className="servicesMain"> 
                <div className="blockBar">
                    <h1 className="blockHeader"> Services </h1>
                </div>
                <div className="serviceIndexDiv">
                    <h2 className="serviceDivHeading"> Colonoscopy and Colon Cancer Screening Services </h2>
                    <img src={procedure} alt="procedure" className="serviceDescriptionImage" />
                    <p className="serviceDescriptionText"> A colonoscopy is an exam of the entire colon and the rectum with a colonoscope,
                        a thin flexible tube with a small camera at the end. This painless procedure
                        can detect abnormalities within the colon such as ulcerations, inflammation,
                        strictures or narrowing, polyps and neoplasm or cancer.
                    </p>
                    <Link to="/ColonoscopyCancerScreening"> 
                        <Button> Click Here </Button>
                    </Link>
                </div>
                <div className="serviceIndexDiv">
                    <h2> Upper Endoscopy - EGD </h2>
                    <img src={e1m1} alt="endoscopyprocedure" className="specialImage sideways" />
                    <p className="serviceDescriptionText">
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
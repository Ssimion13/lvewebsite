import React from "react";
import {Link} from "react-router-dom";
import {Button} from "reactstrap";
import colonoscope from "../../Images/colonoscope.jpg";

function ColonoscopyCancerScreening() {
    return (
        <div className="sidePageDiv">
            <div className="sidePageContent">
                <div className="blockBar">
                    <h1 className="blockHeader"> Colonoscopy & Cancer Screening </h1>
                </div>
                <p className="sectionText"> 
                    A colonoscopy is an exam of the entire colon and the rectum with a colonoscope, 
                    a thin flexible tube with a small camera at the end. This painless procedure can
                    detect abnormalities within the colon such as ulcerations, inflammation, strictures
                    or narrowing, polyps and neoplasm or cancer. <br/> 
                </p>
                <img src={colonoscope} className="colonoscope" alt="colonoscope" />
                <p className="sectionText">
                    A colonoscopy may be indicated to help evaluate the cause of gastroinestinal (GI) 
                    symptoms such as lower GI bleeding, abdominal pain, changes in bowel habits, diarrhea
                    and constipation. It may also be done for screening for colon cancer, even if the 
                    patient does not complain of any GI symptoms. People at increased risk of developing 
                    colon cancer are those who are 50 or more years of age, those with a family history of colon
                    cancer or colon polyps, and those with a personal history of colon cancer or colon polyps.
                    The colonoscopy is considered the gold standard of colorectal cancer screening. <br/>

                    During the colonoscopy, tissue samples, referred to as biposies, may be taken for analysis. 
                    Biopsies may be taken to remove colon polyps to determine if the patient is at an increased 
                    risk of developing colon cancer. Biopsies may also be taken to check for inflammation and 
                    other abnormalities of the colon and rectum. <br/>

                    The colonoscopy is usually an outpatient procedure and does not require hospital stay. 
                    The patient is allowed to return home after the procedure but is not allowed to drive home
                    himself/herself. Risks of the procedure, although rare, include GI bleeding and perforation 
                    of the colon or rectum. <br/>

                    
                </p>
                Have more questions about this procedure? <br/>
                here are some links to help you:
                    <br/>
                    <ol>
                        
                    <li> <a href="http://www.gastro.org/practice/medical-position-statements" > Medical Guidelines for Colonoscopy Screening </a> </li>
                    <li> <a href="http://www.mayoclinic.org/tests-procedures/colonoscopy/basics/definition/prc-20013624"> Mayo Clinic Colonoscopy Definition </a> </li>
                    </ol>
                <Link className="backButton" to="/Services">
                    <Button> Back </Button>
                </Link>
            </div>
        
        </div>
    )
} 

export default ColonoscopyCancerScreening;

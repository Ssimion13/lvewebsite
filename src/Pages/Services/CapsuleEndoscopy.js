import React from "react";
import {Link} from "react-router-dom";
import {Button} from "reactstrap";

class CapsuleEndoscopy extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render(){
        return (
            <div className="sidePageDiv">
                <div className="blockBar">
                    <h1 className="blockHeader"> Capsule Endoscopy </h1>
                </div>
                <div className="sidePageVideoDiv">
                    <iframe title="LVE Capsule Endoscopy" width="560" height="315" className="sidePageVideo" src="https://www.youtube.com/embed/WA2xHfUR5LY" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>

                <p className="sectionText"> 
                    Capsule endoscopy is an outpatient procedure that involves visualization of the small 
                    intestine with the use of a wireless capsule equipped with a tiny camera that takes 
                    thousands of pictures for later evaluation by the gastroenterologist. The procedure, 
                    which typically takes approximately 8 hours, is able to detect abnormalities in the 
                    small bowel that the conventional endoscope and colonoscope is unable to reach.

                    This test is usually ordered for patients who have iron deficiency anemia, 
                    suspected or known Crohn’s disease, suspected or known Celiac disease, obscure 
                    gastrointestinal bleeding, ulcerations of the small intestine, and small bowel polyps.
                    During the procedure, the patient ingests a small capsule with the help of water, 
                    is made to wear a data receiver around the waist, and is then allowed to go home for 
                    the duration of the study. The patient then returns after 8 hours to return the data 
                    receiver which has wirelessly stored thousands of images taken from within the small 
                    bowel. The capsule is eventually passed in the stool. The findings are then given to 
                    the patient and recommendations are made. This procedure is painless and is simple to do.
                </p>
                <p>
                    Have more questions about this procedure here are some links to help you:
                    <ol>
                        <a href="www.google.com"> Visualizing the Entire Small Bowel​ </a> <br/>
                        <a href="www.google.com"> What to Expect from the PillCam SB Procedure </a> <br/>
                        <a href="www.google.com"> Small Bowel Resource Center </a>
                    </ol>
                </p>
                <Link className="backButton" to="/Services">
                    <Button> Back </Button>
                </Link>
            </div>
        )
    }
} 

export default CapsuleEndoscopy;
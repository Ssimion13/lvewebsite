import React from "react";
import {Link} from "react-router-dom";
import {Button} from "reactstrap";


function SmartPill() {
    return (
        <div className="sidePageDiv">
        <h2> Smartpill </h2>
        <p className="sectionText"> 
            Smartpill is a wireless motility capsule that measures the pH, temperature 
            and pressure throughout the digestive tract. It allows the gastroenterologist 
            to determine the time it takes to travel from the mouth to the stomach, the small 
            intestine and the colon. This test is generally safe, painless and radiation-free.

            The smartpill is able to determine the gastric emptying time, small bowel transit 
            time and the colonic transit time of the patient. It can help the phsysician 
            diagnose gastroparesis, a condition where the muscles of the stomach is not able 
            to function properly, delayed small bowel transit, and slow transit constipation.
            It may be indicated for patients who have symptoms of indigestion, 
            prolonged sensation of fullness, dyspepsia, nausea, vomiting, bloating and chronic constipation.
            The procedure involves swallowing a capsule with the help of water after 
            consuming a standardized granola bar. As the capsule travels throughout the 
            digestive tract, it wirelessly transmits data to the receiver which is worn on a 
            lanyard or a belt clip. The test can take up to five days long but usually lasts 
            only 1-3 days.

            Answers for Your Unexplained GI Symptoms​
            What to Expect with SmartPill
            SmartPill Patient Brochure
            SmartPill FAQ
        </p>
        <p> 
            Have more questions about this procedure? <br/> here are some links to help you:
            <ol>
                <a href="www.google.com"> Visualizing the Entire Small Bowel​ </a>
                <a href="www.google.com"> What to Expect from the PillCam SB Procedure </a>
                <a href="www.google.com"> Small Bowel Resource Center </a>
            </ol>
        </p>
        <Link className="backButton" to="/GIMotilityClinic">
            <Button> Back  </Button>
        </Link>
        </div>
    )
} 

export default SmartPill;
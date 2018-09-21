import React from "react";
import {Link} from "react-router-dom";
import {Button} from "reactstrap";


function HPyloriBreathTest() {
    return (
        <div className="sidePageDiv">
        <div className="blockBar">
            <h1 className="blockHeader"> H. pylori Breath Test </h1>
        </div>
        <p className="sectionText">
            The H. pylori breath test is a quick and simple office-based test that determines the 
            presence of active Helicobacter pylori infection. Helicobacter pylori (H. pylori) is a 
            bacteria that can cause ulcers in the stomach and the duodenum or the first part of the 
            small intestine. This test is typically ordered for patients who have 
            complaints of abdominal pain, dyspepsia, esophageal reflux and heartburn. It is also 
            indicated for patients who have been found to have the presence of ulcers in the stomach 
            and duodenum. It can also be used to determine the effectivity of antibiotic therapy for 
            patients who have recently been treated for known H. pylori infection.

            This test involves the patient blowing into a small bag that traps and stores the 
            patient’s breath. He/she then drinks a small solution containing urea. After ten to 
            fifteen minutes, the patient finally blows into another small bag. The two breath samples 
            are tested for differences in carbon dioxide content. If the patient is found to have a 
            positive test, he or she can be treated for the bacterial infection.
        </p>
        <p> 
            Have more questions about this procedure? <br/> here are some links to help you:
            <ol>
                <a href="https://www.breathtek.com/patients"> BreathTek </a>
            </ol>
        </p>
        <Link className="backButton" to="/GIMotilityClinic">
            <Button> Back  </Button>
        </Link>
        </div>
    )
} 

export default HPyloriBreathTest;
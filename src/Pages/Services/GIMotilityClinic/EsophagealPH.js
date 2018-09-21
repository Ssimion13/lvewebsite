import React from "react";
import {Link} from "react-router-dom";
import {Button} from "reactstrap";

function EsophagealPH() {
    return (
        <div className="sidePageDiv">
        <div className="blockBar">
            <h1 className="blockHeader"> Esophageal pH Monitoring </h1>
        </div>
        <p className="sectionText"> 
            Esophageal pH monitoring is a test that involves 24-hour measuring and recording of 
            the acid levels in the esophagus, also referred to as the food pipe. This test can 
            determine the frequency, duration and intensity of the acid within the esophagus. It 
            can also help determine if a patient has acidic reflux or non-acidic reflux. For 
            patients undergoing evaluation for anti-reflux surgery, the findings from the test 
            will help the gastroenterologist and surgeon determine if surgery will benefit the 
            patient. This test may also be ordered by the gastroenterologist measure the 
            effectiveness of acid suppression medications or anti-reflux surgery on a patient.

            Esophageal pH monitoring can be indicated by the gastroenterologist for the following 
            signs and symptoms: esophageal reflux, heartburn, non-cardiac chest pain, reflux 
            esophagitis, Barrett’s esophagus, voice changes and cough due to reflux.

            The test starts with the insertion of a very thin catheter with sensors through the 
            nose and into the esophagus. This catheter is connected to a data recorder on a strap. 
            For the comfort of the patient, a topical anesthetic (lidocaine jelly) is used before 
            the insertion of the catheter. It also helps the catheter pass more easily. Once in 
            place, recording of the acid levels in the esophagus begin. The patient is allowed to 
            go home for the duration of the study. He/she is also given a diary to list important 
            events such as eating, laying down and when symptoms such as heartburn, esophageal 
            reflux and regurgitation occur. The next day, the patient returns to the office to have 
            the catheter removed and the data on the recorder is analyzed.

            Starting the test only takes a few minutes, however, once the patient is made to return 
            home for the duration of the test, it will be important for the patient to list down all 
            relevant events that can help the gastroenterologist analyze the findings. The test is 
            minimally uncomfortable as few patients experience gagging and tearing up of the eyes 
            during insertion of the pH catheter.
        </p>
        <p> 
            Have more questions about this procedure? <br/> here are some links to help you:
            <ol>
                <a 
                    href="http://www.givenimaging.com/en-us/Innovative-Solutions/Reflux-Monitoring/Digitrapper/Pages/default.aspx"> 
                    Digitrapper® pH-Z Monitoring 
                </a>
                <br/>
                <a 
                    href="http://www.givenimaging.com/en-us/Innovative-Solutions/Reflux-Monitoring/Digitrapper/Indications-Risks/Pages/default.aspx">
                    Indications & Risks 
                </a>
            </ol>
        </p>
        <Link className="backButton" to="/GIMotilityClinic">
            <Button> Back  </Button>
        </Link>
        </div>
    )
} 

export default EsophagealPH;
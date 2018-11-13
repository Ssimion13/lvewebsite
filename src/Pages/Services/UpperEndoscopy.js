import React from "react";
import {Link} from "react-router-dom";
import {Button} from "reactstrap";

function UpperEndoscopy() {
    return (
        <div className="sidePageDiv">
            <div className="sidePageVideoDiv">
                <iframe title="LVE Endoscopy" width="560" height="315" className="sidePageVideo" src="https://www.youtube.com/embed/e95sNOOr_O8" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
            <div className="blockBar">
                <h1 className="blockHeader"> Upper Endoscopy (EGD) </h1>
            </div>
            <p className="sectionText"> 
                An upper endoscopy, also referred to as an esophagogastroduodenoscopy, or EGD, 
                is a painless examination of the esophagus, stomach and the first portion of the small
                intestine or the duodenum. This is done with an endoscope, a thin, flexible tube with 
                a camera at the end. Tissue samples, referred to as biopsies, may be taken during the 
                procedure to check for inflammation, changes in the lining of the esophagus, stomach 
                and duodenum, and to determine the presence of the bacteria, Helicobacter pylori, 
                which can cause gastric cancer. <br/> <br/> 
    
                An EGD may be done to diagnose certain conditions such as upper gastrointestinal (GI) 
                bleeding, ulcerations of the esophagus, stomach and duodenum, narrowing or strictures of 
                the esophagus, fungal infection of the esophagus, Barrett’s esophagus, varices of the 
                esophagus, hiatal hernia, Celiac disease and cancer of the upper GI tract.
                Symptoms that would indicate an EGD include abdominal pain, nausea, vomiting, passing dark 
                stools, difficulty swallowing, esophageal reflux, heartburn, non-cardiac chest pain, 
                unintentional weight loss and loss of appetite. An EGD should also be done when a patient 
                is anemic, has a known history of Barrett’s esophagus, has a history of upper GI cancer 
                and has known liver cirrhosis. <br/> <br/>

                An EGD is usually an outpatient procedure and the patient is allowed to return home after
                the procedure. However, the patient is not allowed to drive himself/herself home. 
                Complications of the procedure are rare. The complications include perforation, 
                bleeding and infection. <br/>
            </p>
            <Link className="backButton" to="/Services">
                <Button> Back </Button>
            </Link>
        </div>
    )
}

export default UpperEndoscopy
import React from "react";
import {Button} from "reactstrap";
import {Link} from 'react-router-dom';

function GIMotilityClinic() {
    return (
        <div className="sidePageDiv">
        <h2 className="centeredTitle"> GI Motility Clinic  </h2>
        <p className="sectionText"> 
        Dr. Fajardo and Dr. Cremonini have both undergone specialized training in GI Motility and 
        Neurogastroenterology Disorders.  Las Vegas Gastroenterology provides state-of-the-art technology
         that has the ability to perform certain specialized diagnostic procedures for gastrointestinal 
         motility disorders. These procedures help doctors obtain further understanding of your diagnosis
          so you can begin your appropriate treatment.

        Our clinic provides motility studies for patients with gastrointestinal disorders. Motility
         studies evaluate how the esophagus, stomach, small bowel and colon functions.  These procedures 
         are usually painless and provide important data about the digestive system.
        </p>

        <h2> Among the studies we offer include: </h2>
        <p className="serviceDiv">
            <h3> Smartpill </h3>
            Smartpill is a wireless motility capsule that measures the pH, 
            temperature and pressure throughout the digestive tract. 
            It allows the gastroenterologist to determine the time it takes to travel 
            from the mouth to the stomach, the small intestine and the colon. This test is generally safe,
             painless and radiation-free.
             <br/>
            <Link to="/SmartPill">
                <Button> Learn More </Button>
            </Link>
        </p>
        <p className="serviceDiv">
            <h2> Esophageal Manometry </h2>
            Esophageal manometry is a motility test that evaluates the movements,
             strength and coordination of the esophagus, also referred to as the food pipe.
            This test measures the progression of food and liquids down the esophagus. 
            It can also measure the strength of the patient’s lower esophageal sphincter (LES),
            the involuntary muscles that form a valve-like structure at the lower end of the
            esophagus where it meets the stomach. The LES prevents food, liquid and acid 
            produced in the stomach from backing up into the esophagus.
            <br/>
            <Link to="/EsophagealManometry">
                <Button> Learn More </Button>
            </Link>
        </p>
        <p className="serviceDiv">
            <h2> Esophageal pH Monitoring (24 hour) </h2>
                Esophageal pH monitoring is a test that involves 24-hour measuring and recording of the
                acid levels in the esophagus, also referred to as the food pipe. This test can
                determine the frequency, duration and intensity of the acid within the esophagus.
                It can also help determine if a patient has acidic reflux or non-acidic reflux.
                For patients undergoing evaluation for anti-reflux surgery, the findings from the
                test will help the gastroenterologist and surgeon determine if surgery will benefit
                the patient. This test may also be ordered by the gastroenterologist measure 
                the effectiveness of acid suppression medications or anti-reflux surgery on a patient.
                <br/>
                <Link to="/EsophagealPH">
                    <Button> Learn More </Button>
                </Link>
        </p>
        <p className="serviceDiv">
            <h2> Hydrogen Breath Test </h2>
            The hydrogen breath test is an office-based test that measures the hydrogen and methane 
            levels detected in the breath of a patient. This allows the gastroenterologist to help 
            determine the presence of small intestinal bacterial overgrowth (SIBO). The small bowel 
            normally does not have large amounts of bacteria, however, with some patients, bacteria 
            tend to colonize within the small bowel, causing symptoms such as bloating, flatulence, 
            abdominal pain/discomfort, diarrhea and abdominal distension.
            <br/>
            <Link to="/HydrogenBreathTest">
                <Button> Learn More </Button>
            </Link>
        </p>
        <p className="serviceDiv">
            <h2> H. Pylori Breath Test </h2>
                The H. pylori breath test is a quick and simple office-based test that determines the presence
                of active Helicobacter pylori infection. Helicobacter pylori (H. pylori) is a bacteria
                that can cause ulcers in the stomach and the duodenum or the first part of the small intestine.
                This test is typically ordered for patients who have complaints of abdominal pain, dyspepsia, 
                esophageal reflux and heartburn.
                <br/>
                <Link to="/HPyloriBreathTest">
                    <Button> Learn More </Button>
                </Link>
        </p>


        </div>
    )
} 

export default GIMotilityClinic;
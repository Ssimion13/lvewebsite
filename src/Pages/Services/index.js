import React from "react";
import {Button} from "reactstrap";
import {Link} from 'react-router-dom';

function Services(){
    
    return(
        <div className="servicesMain"> 
            <div className="blockBar">
                <h1 className="blockHeader"> Services </h1>
            </div>
            <div className="serviceIndexDiv">
                <h2> Colonoscopy and Colon Cancer Screening Services </h2>
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
            
            {/*
                does he want me to put these in on LVE too? I have no clue

            <div className="serviceDiv">
                <h2> Capsule Endoscopy </h2>
                <p className="serviceDescriptionText">
                    Capsule endoscopy is an outpatient procedure that involves visualization 
                    of the small intestine with the use of a wireless capsule equipped with a 
                    tiny camera that takes thousands of pictures for later evaluation by the 
                    gastroenterologist. The procedure, which typically takes approximately 8 hours,
                    is able to detect abnormalities in the small bowel that the conventional 
                    endoscope and colonoscope is unable to reach.
                </p>
                <Link to="/CapsuleEndoscopy"> 
                    <Button> Click Here </Button>
                </Link>
            </div>
            <div className="serviceDiv">
                <h2> GI Motility Clinic </h2>
                <p className="serviceDescriptionText">
                    Dr. Fajardo and Dr. Cremonini have both undergone specialized training in GI Motility
                    and Neurogastroenterology Disorders. Las Vegas Gastroenterology provides state-of-the-art 
                    technology that has the ability to perform certain specialized diagnostic procedures 
                    for gastrointestinal motility disorders. These procedures help doctors obtain further 
                    understanding of your diagnosis so you can begin your appropriate treatment.
                </p>
                <Link to="/GIMotilityClinic"> 
                    <Button> Click Here </Button>
                </Link>
            </div>
            <div className="serviceDiv">
                <h2> Viral Hepatitis Clinic </h2>
                <p className="serviceDescriptionText">
                    Las Vegas Gastroenterology provides care for patients infected with viral 
                    hepatitis B and C. With comprehensive, in-depth training and years of 
                    experience in the field of hepatology, our physicians are able to diagnose, 
                    treat and manage patients who have been infected with the potentially deadly
                    disease. Left untreated, viral hepatitis can lead to liver cirrhosis and liver 
                    cancer, as well as other complications that can seriously decrease a person’s
                    quality of life. so you can begin your appropriate treatment.
                </p>
                <Link to="/ViralHepatitisClinic"> 
                    <Button> Click Here </Button>
                </Link> 
            </div>
            */}
        </div>
    )
}

export default Services;
import React from "react";
import drfajardo from "../Images/drfajardo.jpg";
import drcremonini from "../Images/drcremonini.jpg";

function AboutUs(){
    return(
        <div className="informativePage"> 
            <div className="aboutUs">
            <h1> About Us </h1>
            <p> Read about our main doctors below: </p>
            </div>
            <div className="doctorSection">
                <h2 className="doctorTitle" > Dr. Noel Fajardo </h2>
                <img className="doctorPicture" alt="drFajardo" src={drfajardo} />
                <p className="doctorSectionText"> 
                    Dr. Noel R. Fajardo, MD is a graduate of University of the Philippines College of Medicine.
                    He finished residency and chief residency at Mount Sinai School of Medicine Affiliate,
                    New York, NY. <br/> <br/>
                    
                    After residency, Dr. Fajardo specialized in Gastroenterology and Hepatology
                    at Mayo Clinic College of Medicine, Rochester, MN, from where he also holds an advanced 
                    Fellowship Degree in Gastrointestinal Motility. He was a former Clinical Instructor at 
                    the Mayo Clinic College of Medicine, Rochester, MN. Dr. Fajardo is ABIM-Board Certified 
                    in GI and IM. <br/> <br/>

                    Dr. Fajardo’s research interest have included disorders of the bowel associated with 
                    spinal cord injury and experimental treatment of other neuropathic gastrointestinal disorders. 
                    The results of his research have been presented at National and International meetings.
                    <br/> <br/>

                    Dr. Fajardo has been a strong advocate for the diagnosis and treatment 
                    of Hepatitis B in the Asian Community nationwide in the US, through awareness campaigns national 
                    and international media. He has been promoter and organizer of large regional screening and 
                    benefit events. Dr Fajardo is also fluent in Tagalog and Spanish. 
                </p>
                <h5 className="whyChooseLVEUnderline"> </h5>
            </div>
            <div className="doctorSection">
                <img src={drcremonini} className="doctorPicture" alt="drCremonini" />
                <h2 className="doctorTitle"> Dr. Filippo Cremonini </h2>
                <p className="doctorSectionText">
                    Dr. Filippo Cremonini, MD, PhD, MSc is a graduate of the Catholic University of Rome, Italy,
                    where he also completed residency in Internal Medicine. He finished residency at Mayo Clinic
                    College of Medicine, Rochester, MN, where he obtained a Masters’ degree in Clinical Research,
                    and earned a PhD in Gastrointestinal Physiology. <br/> <br/> 
                    
                    After residency, Dr. Cremonini specialized
                    in Gastroenterology and Hepatology at BIDMC-Harvard Medical School, Boston MA. He has held
                    titles of Assistant Professor of Medicine at BIDMC-Harvard Medical School, Assistant Professor
                    of Medicine at the Mayo Clinic College of Medicine, Rochester, MN, Visiting Professor at
                    U.C.L.A., and holds a title of full Professor of Gastroenterology with the Italian Ministry
                    of University (MIUR). Dr. Cremonini is ABIM-Board Certified in GI and IM. <br/> <br/>
                    
                    He has authored more than 150 publications in the field of gastroenterology. 
                    He is a regular invited speaker and lecturer at the main meetings in the fields of Gastroenterology 
                    and Internal Medicine. He has received numerous awards for his research and activities in Europe 
                    and in the US. He is also fluent in Italian and Spanish.
                </p>
            </div>
        </div>
    )
}

export default AboutUs;
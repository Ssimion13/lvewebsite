import React from "react";
import CNNNRF from "../../Images/cnnNRF.jpg"

class DrFajardo extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render(){
        return(
            <div className="informativePage"> 
                <div className="blockBar">
                    <h1 className="blockHeader"> Dr. Noel Fajardo </h1>
                </div>
                <div className="doctorSection">
                <div className="sidePageVideoDiv">
                    <iframe title="LVE Capsule Endoscopy" width="560" height="315" className="sidePageVideo" src="https://www.youtube.com/embed/gzZopr91nYk" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
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
                    </p>
                    <img className="sidePageImage" alt="cnnfajardo" src={CNNNRF} />
                    <p className="doctorSectionText">
                        Dr. Fajardo has been a strong advocate for the diagnosis and treatment 
                        of Hepatitis B in the Asian Community nationwide in the US, through awareness campaigns national 
                        and international media. He has been promoter and organizer of large regional screening and 
                        benefit events. Dr Fajardo is also fluent in Tagalog and Spanish. 
                    </p>
                    <h5 className="whyChooseLVEUnderline"> </h5>
                </div>
            </div>
        )
    }
}

export default DrFajardo;
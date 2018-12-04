import React from "react";
import drcremonini from "../../../Images/drcremonini.jpg";

class DrCremonini extends React.Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render(){
        return(
            <div className="informativePage"> 
                <div className="blockBar">
                    <h1 className="blockHeader"> Dr. Filippo Cremonini </h1>
                </div>
                <div className="doctorSection">
                    <img src={drcremonini} className="doctorInfo" alt="drCremonini" />
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
}

export default DrCremonini;
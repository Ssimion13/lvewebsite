import React from "react";
import {Link} from "react-router-dom";
import {Button} from "reactstrap";

class ViralHepatitisClinic extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render(){
        return (
            <div className="sidePageDiv">
            <div className="blockBar">
                <h1 className="blockHeader"> Viral Hepatitis Clinic </h1>
            </div>
            <p className="sectionText"> 
                <h2> Viral Hepatitis Clinic </h2>
                <p> 
                    Las Vegas Gastroenterology provides care for patients infected with viral hepatitis B and C. 
                    With comprehensive, in-depth training and years of experience in the field of hepatology, our 
                    physicians are able to diagnose, treat and manage patients who have been infected with the potentially 
                    deadly disease. Left untreated, viral hepatitis can lead to liver cirrhosis and liver cancer, as well as 
                    other complications that can seriously decrease a person’s quality of life.
                    <br/>
                    There have been recent advancements with the antiviral medications for viral hepatitis B and C. 
                    In recent years, new medications have been developed to decrease its side effects and increase the 
                    chances of sustained response. Las Vegas Gastroenterology works closely with pharmacies and insurances 
                    to help get the treatment needed for those infected with the virus. Aside from regular assessments of 
                    liver function, we also provide counseling for individuals and their families.
                </p>
                <br/>
                <p> 
                    Las Vegas Gastroenterology is a proud collaborator of JuanBFree Hepatitis B Screening Campaign 
                    for Filipino communities in the United States.
                </p>
            </p>
            <Link className="backButton" to="/Services">
                <Button> Back </Button>
            </Link>
            </div>
        )
    }
} 

export default ViralHepatitisClinic;
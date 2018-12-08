import React from "react";
import {Link} from "react-router-dom";
import {Button} from "reactstrap";

class Laboratory extends React.Component {
    componentDidMount() {
        window.scrollTo(0, 0)
    }
    render(){
        return (
            <div className="sidePageDiv">
                <div className="blockBar">
                    <h1 className="blockHeader"> Laboratory </h1>
                </div>
                <p className="sectionText"> 
                    Las Vegas Endoscopy has an in-house laboratory
                </p>
                <Link className="backButton" to="/Services">
                    <Button> Back </Button>
                </Link>
            </div>
        )
    }
}

export default Laboratory
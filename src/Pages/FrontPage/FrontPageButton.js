import React from "react";

import {Link} from "react-router-dom";

function FrontPageButton(props){
    return (
        <Link to={props.link} className={`frontPageButton ${props.buttonnumber}`}>
        <span> <img className="frontPageButtonIcons" src={props.picture} alt={props.altname}/> </span> 
        <span className="frontPageButtonText"> {props.text} </span> 
        </Link>
    )
}

export default FrontPageButton;


import React from "react";

import {Link} from "react-router-dom";

function FrontPageButton(props){
    return (
        <Link to={props.link} className={`${props.buttonnumber}`}>
            <div className={`frontPageButton ${props.buttonnumber}div`}>
                <span> <img className="frontPageButtonIcons" src={props.picture} alt={props.altname}/> </span> 
                <span className="frontPageButtonText"> {props.text} </span> 
            </div>
        </Link>
    )
}

export default FrontPageButton;


import React from "react";
import conversation from "../../Images/conversation.png";

function WhyChooseLVEThumbnail(props){
    return (
        <div className="whyChooseLVEThumbnail">
            <div className="whyChooseLVEThumbnailTop">
                <img className="frontPageButtonIcons" src={conversation} alt="conversationicon"/> 
                <h5 className="paddedTitle"> <b> {props.title} </b> </h5>
            </div>
            <div className="whyChooseLVEThumbnailBottom">
                <p className="paddedText"> 
                {props.text}
                </p>  
            </div> 
        </div>
    )
}

export default WhyChooseLVEThumbnail;
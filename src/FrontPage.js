import React, {Component} from "react";


class FrontPage extends Component {

    render(){
        return(
            <div className="frontPage">
                <div className="imagePlaceholder"> Placeholder, Insert image Here </div>
                <div className="frontPageButtonsDiv">
                    <div className="frontPageButton button1"> Insert Link 1 Here </div> 
                    <div className="frontPageButton button2"> Insert Link 2 Here </div> 
                    <div className="frontPageButton button3"> Insert Link 3 Here </div> 
                    <div className="frontPageButton button4"> Insert Link 4 Here </div> 
                </div>
                <div className="whyChooseLVE"> 
                    <div className="whyChooseLVETitle"> </div>
                    <div className="whyChooseLVEThumbnailDiv">
                        <div className="whyChooseLVEThumbnail"> </div>
                        <div className="whyChooseLVEThumbnail"> </div>
                        <div className="whyChooseLVEThumbnail"> </div>
                        <div className="whyChooseLVEThumbnail"> </div>
                    </div>
                
                </div>
            </div>
        )
    }
}

export default FrontPage;
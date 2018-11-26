import React, {Component} from "react";
import {Link} from "react-router-dom";
import Fade from "react-reveal/Fade";
import FeeSectionThumbnail from "./FeeSectionThumbnail";
import ordoors from "../../../Images/ordoors.jpg"
import microscope from "../../../Images/microscope.jpg";
import procedure from "../../../Images/procedure.png";
import ourwork from "../../../Images/ourwork.jpg";
import friendlynurse from "../../../Images/friendlyNurse.png"


const items = [
    {
        heading: "Experienced Professionals",
        text: "Hello",
        img: ourwork
    },
    {
        heading: "Latest Technology",
        text: "What's up?",
        img: procedure
    },
    {
        heading: "Friendly Staff",
        text: "The bes",
        img: friendlynurse
    },
    {
        heading: "New Facility",
        text: "Swag",
        img: ordoors,
    },
    {
        heading: "In House Laboratory",
        text: "Swwaaag",
        img: microscope
    }
  ];


class FeeSection extends Component {
    constructor(props) {
          super(props);
          this.state = {
              currentSections: true,
              firstSection: 1,
              lastSection: 4
          }
        this.currentSectionCheck = this.currentSectionCheck.bind(this);
    }

    currentSectionCheck(symbol) {
        console.log( "hello");
        if(symbol === "+"){
            this.setState(prevState => ({
                firstSection: prevState.firstSection + 1,
                lastSection: prevState.lastSection + 1
            })
            )
        }
        if(symbol === "-"){
            this.setState(prevState => ({
                firstSection: prevState.firstSection - 1,
                lastSection: prevState.lastSection -1  
            })
            )
        }
    }


    render() {
        //this should grab the location of first rendered section to the last section
        const currentSections = items.slice(this.state.firstSection - 1, this.state.lastSection - 1);
        const renderedSections = currentSections.map(x => {
            return (  
                <FeeSectionThumbnail 
                    heading={x.heading}
                    text={x.text}
                    media={x.img}
                    key={x.heading}
                />
            )
        })
        return (
        
          <div className="feeSectionThumbnailDiv">
            {this.state.firstSection !== 1 ? 
            <Fade left >
                <button className="leftButton" onClick={()=>{this.currentSectionCheck("-")}}> &lt; </button>
            </Fade>
            : null }
            {this.state.lastSection !== 6 ?
            <Fade right> 
                <button  className="rightButton" onClick={()=>{this.currentSectionCheck("+")}}> &gt; </button> 
            </Fade>
            : null }
            {/* <FeeSectionThumbnail media={ourwork} opacity={"0.2"}
                heading={"Experienced Professionals"}
            />
            <FeeSectionThumbnail media={procedure} opacity={"0.2"}
                heading={"Latest Technology"}
            />
            <FeeSectionThumbnail media={friendlynurse} opacity={"0.2"}
                heading={"Friendly Staff"}
            />
            <FeeSectionThumbnail media={ordoors} rotate={true} opacity={"0.2"}
                heading={"New Facility"}
            />
            <FeeSectionThumbnail media={microscope}  opacity={"0.2"}
                heading={"In-House Laboratory"}
            /> */}
            {renderedSections}
          </div>
      );
    }
  }

  export default FeeSection
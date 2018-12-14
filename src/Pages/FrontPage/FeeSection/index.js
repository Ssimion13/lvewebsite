import React, {Component} from "react";
import Fade from "react-reveal/Fade";
import FeeSectionThumbnail from "./FeeSectionThumbnail";
import ordoors from "../../../Images/ordoors.jpg"
import procedure from "../../../Images/procedure.png";
import ourwork from "../../../Images/ourwork.jpg";
import friendlynurse from "../../../Images/friendlyNurse.png"


const items = [
    {
        number: 1,
        heading: "Experienced Professionals",
        text: "Our Doctors at Las Vegas Endoscopy are Mayo Clinic and Harvard Medical School trained, specialists in treating rare and complex gastrointestinal conditions. ",
        img: ourwork,
        link: "/error"
    },
    {
        number: 2,
        heading: "Latest Technology",
        text: "Our cutting edge scopes and tools ensure that nothing will be missed.",
        img: procedure,
        link: "/error"
    },
    {
        number: 3,
        heading: "Friendly Staff",
        text: "Our well trained nurses and assisting staff will ensure that you have a comfortable experience when you come for your procedure. ",
        img: friendlynurse,
        link: "/error"
    },
    {
        number: 4,
        heading: "New Facility",
        text: "Our new facility is clean, fresh, and ready to serve Las Vegas.",
        img: ordoors,
        link: "/error"
    },
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
                    key={x.number}
                    link={x.link}
                />
            )
        })
        return (
        
          <div className="feeSectionThumbnailDiv">

            {/* for non mobile */}
            
            {this.state.firstSection !== 1 && window.innerWidth > 800 ? 
            <Fade left >
                <button className="leftButton" onClick={()=>{this.currentSectionCheck("-")}}> ◀ </button>
            </Fade>
            : null }
            {this.state.lastSection !== 5 && window.innerWidth > 800   ?
            <Fade right> 
                <button  className="rightButton" onClick={()=>{this.currentSectionCheck("+")}}> ▶ </button> 
            </Fade>
            : null  }

            {/* for mobile */}
            {this.state.firstSection !== 1 && window.innerWidth < 800  ? 
            <Fade top >
                <button className="topButton" onClick={()=>{this.currentSectionCheck("-")}}> ▲  </button>
            </Fade>
            : null }

            {renderedSections}

            {this.state.lastSection !== 5 && window.innerWidth < 800   ?
            <Fade bottom> 
                <button  className="bottomButton" onClick={()=>{this.currentSectionCheck("+")}}> ▼ </button> 
            </Fade>
            : null  }



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
            
          </div>
      );
    }
  }

  export default FeeSection
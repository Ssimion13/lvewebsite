import React, {Component} from "react";
// import {Link} from "react-router-dom"



class FeeSectionThumbnail extends Component {
    constructor(props) {
          super(props);
          // 1. bind your functions in the constructor.
          this.mouseOver = this.mouseOver.bind(this);
          this.mouseOut = this.mouseOut.bind(this);
          this.state = {
              hover: false
          };
      }
  
      // 2. bind it with fat arrows.
      mouseOver = () => {
          this.setState({hover: true});
      }
      mouseOut() {
          this.setState({hover: false});
      }
  
    render() {
      const styles = {
      background: `URL(${this.props.media})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      opacity: `1`,
      color: `${this.props.color}` || "white",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }
      return (
          <button className="feeSectionButton"  style={styles} onMouseEnter={this.mouseOver.bind(this)} onMouseLeave={this.mouseOut.bind(this)}>
            {/* <img className="ImageGrid" src={this.props.media}/> */}
            {this.state.hover ? (
              <div className="feeSectionImageOverlay" > 
                <div className="feeSectionTextOverlay">
                  <p><b>{this.props.info}</b></p>
                  <p>${this.props.info2}</p>
                </div>
              </div>) : 
            <div className="feeSectionImageOverlay">
              <h5> Payment Options </h5>
              <p> Filler filler filler Filler filler filler Filler filler filler Filler filler filler </p>
            </div>}  
          </button>
      );
    }
  }

  export default FeeSectionThumbnail
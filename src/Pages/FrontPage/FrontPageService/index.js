import React, {Component} from "react";

class FrontPageService extends Component {
    constructor(props) {
          super(props);
          // 1. bind your functions in the constructor.
          this.mouseOver = this.mouseOver.bind(this);
          this.mouseOut = this.mouseOut.bind(this);
          this.state = {
              hover: false,
              check: true,
              styles: {
                background: `URL(${this.props.media})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                marginTop: this.props.margin || 0,
              }
          };
      }
  
      // 2. bind it with fat arrows.
      mouseOver = () => {
          this.setState({hover: true,
            styles: {
              backgroundColor: "darkblue"
            }});

          console.log("hello");
      }
      mouseOut() {
          this.setState({hover: false,
            styles: {
              background: `URL(${this.props.media})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }
          }
        );
      }
  
    render() {
      return (
        
          <button className="feeSectionButton"  style={this.state.styles} onMouseEnter={this.mouseOver.bind(this)} onMouseLeave={this.mouseOut.bind(this)}>
            {this.state.hover ? (
              <div className="feeSectionImageOverlay" > 
                <div className="feeSectionTextOverlay">
                  <h3><b> Hello {this.props.heading}, I am empty space, just waiting to know what I should exist for!</b></h3>
                  <h4> {this.props.info}</h4>
                </div>
              </div>) : 
            <div className="feeSectionImageOverlay overlay">
              <h3> <b> {this.props.heading} </b> </h3>
              <h4> {this.props.frontText} </h4>
            </div>}  
          </button>
      );
    }
  }

  export default FrontPageService
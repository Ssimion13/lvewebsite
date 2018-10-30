import React, {Component} from "react";
import {Link} from "react-router-dom";
import { Button } from 'reactstrap';

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
              backgroundColor: "darkblue",
              transitionDuration: "0.25s",
              transitionTimingFunction: "ease-out"
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
        
          <div className="servicesButton"  style={this.state.styles} onMouseEnter={this.mouseOver.bind(this)} onMouseLeave={this.mouseOut.bind(this)}>
            {this.state.hover ? (
              <div className="feeSectionImageOverlay" > 
                <div className="feeSectionTextOverlay">
                  <h3><b> Under Construction </b></h3>
                  <h4> {this.props.info}</h4>
                  <Link to={this.props.linkTarget || "hi"}> 
                  <Button> Learn More </Button>
                  </Link>
                </div>
              </div>) : 
            <div className="feeSectionImageOverlay overlay">
              <h3> <b> {this.props.heading} </b> </h3>
              <h4> {this.props.frontText} </h4>
              
            </div>}  
            
          </div>
      );
    }
  }

  export default FrontPageService
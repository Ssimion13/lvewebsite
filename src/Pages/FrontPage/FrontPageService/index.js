import React, {Component} from "react";
import {Link} from "react-router-dom";
import { Button } from 'reactstrap';
import Flip from 'react-reveal/Flip';

class FrontPageService extends Component {
    constructor(props) {
          super(props);
          // 1. bind your functions in the constructor.
          this.mouseOver = this.mouseOver.bind(this);
          this.mouseOut = this.mouseOut.bind(this);
          this.mouseClick = this.mouseClick.bind(this);
          this.state = {
              hover: false,
              check: true,
              styles: {
                background: `URL(${this.props.media})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                marginTop:  0,
                imageOrientation: "fromImage",
              }
          };
      }
  
      // 2. bind it with fat arrows.
      mouseOver = () => {
          this.setState({hover: true,
            styles: {
              backgroundImage: "linear-gradient(to top right, rgb(48,48,48), black)",
              transitionDuration: "0.25s",
              transitionTimingFunction: "ease-out"
            }});
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

      mouseClick(){
        window.scrollBy(0,1)
        if(!this.state.hover){
          this.setState({hover: true,
            styles: {
              backgroundImage: "linear-gradient(to top right, rgb(48,48,48), black)",
            }}
          );
        } else {
          this.setState({hover: false,
            styles: {
              background: `URL(${this.props.media})`,
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }
          });
        }
      }
  
    render() {
      return (
        
        <div className="servicesButton"  style={this.state.styles} onClick={this.mouseClick} >

              <div className={this.state.hover ? "feeSectionImageOverlay overlay " : "hide feeSectionImageOverlay overlay"} > 
                <Flip top>
                  <div className="feeSectionTextOverlay">
                    {window.innerWidth > 800 ?
                      <h3 className="feeSectionHeading"> <b> {this.props.heading} </b> </h3>
                      :
                      <h3 className="feeSectionHeading"> <b> {this.props.heading} </b></h3>
                    }
                    <h4 className="frontPageButtonInfo"> {this.props.info}</h4>
                    {this.props.linkTarget && this.state.hover ? 
                    <Link to={this.props.linkTarget}>  
                    <Button> Learn More </Button>
                    </Link>
                    : null 
                    }
                  </div>
                </Flip>
              </div>
              
            <div className={!this.state.hover ? "feeSectionImageOverlay overlay " : "hide feeSectionImageOverlay overlay"}>
            
            {window.innerWidth > 800 ?
              <Flip top>
                <h1 className="buttonHeading"> <b> {this.props.heading} </b> </h1>
              </Flip>
                :
              <Flip top>
                <h4 className="buttonHeading"> <b> {this.props.heading} </b></h4>
              </Flip>
            }
            
            {window.innerWidth > 800 ?
              <Flip top>
                <h4 className="buttonHeading"> {this.props.frontText} </h4>
              </Flip>
              :
              <Flip top>
                <h6 className="buttonHeading"> {this.props.frontText} </h6>
              </Flip>
            }
            </div>
            
          </div>
      );
    }
  }

  export default FrontPageService
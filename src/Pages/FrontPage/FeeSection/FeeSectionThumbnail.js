import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Button} from "reactstrap";
import Flip from 'react-reveal/Flip';


class FeeSectionThumbnail extends Component {
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
              }
          };
      }zzz
  
      // 2. bind it with fat arrows.
      mouseOver = () => {
          this.setState({hover: true,
            styles: {
              backgroundImage: "linear-gradient(to top right, rgb(48,48,48), black)",
              transitionDuration: "0.25s",
              transitionTimingFunction: "ease-out",
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
        window.scrollBy(0,1)
      }
  
    render() {
      return (
          <div className="feeSectionButton"  style={this.state.styles} onClick={this.mouseClick}>
            {this.state.hover ? (
                <div className="feeSectionImageOverlay" > 
                <div className="feeSectionTextOverlay">
                  {window.innerWidth > 800 ?
                  <Flip top>
                    <h3 className="feeSectionText unselectable"><b> {this.props.text} </b></h3>
                  </Flip>
                  : 
                  <p className="feeSectionText unselectable" ><b> {this.props.text} </b></p>
                  }
                  {window.innerWidth > 800 ?
                  <Flip top>
                    <h5> {this.props.info}</h5>
                  </Flip>
                  : 
                  <h5> {this.props.info} </h5>
                  }
                  {this.props.link !== "/error" ?
                    <Link to={this.props.link || "error"}> 
                    <Button> Learn More </Button>
                    </Link>
                    : null
                  }
                </div>
              </div>
            ) : 
            <div className="feeSectionImageOverlay overlay">
              <h3 className="buttonHeading unselectable"> <b> {this.props.heading} </b> </h3>
              <h4 className="unselectable"> {this.props.frontText} </h4>
            </div>}  
          </div>
      );
    }
  }

  export default FeeSectionThumbnail
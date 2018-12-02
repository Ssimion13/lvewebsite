import React, {Component} from "react";
import {Link} from "react-router-dom";
import {Button} from "reactstrap";



class FeeSectionThumbnail extends Component {
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
  
    render() {
      return (
        
          <button className="feeSectionButton fade"  style={this.state.styles} onMouseEnter={this.mouseOver.bind(this)} onMouseLeave={this.mouseOut.bind(this)}>
            {/* <img className="ImageGrid" src={this.props.media}/> */}
            {this.state.hover ? (
              <div className="feeSectionImageOverlay" > 
              <div className="feeSectionTextOverlay">
                {window.innerWidth > 800 ?
                <h3><b> {this.props.text} </b></h3>
                : 
                <p><b> {this.props.text} </b></p>
                }
                <h5> {this.props.info}</h5>
                {this.props.link !== "/error" ?
                  <Link to={this.props.linkTarget || "error"}> 
                  <Button> Learn More </Button>
                  </Link>
                  : null
                }
              </div>
            </div>) : 
            <div className="feeSectionImageOverlay overlay">
              <h3 className="feeSectionButtonHeadings"> <b> {this.props.heading} </b> </h3>
              <h4> {this.props.frontText} </h4>
            </div>}  
          </button>
      );
    }
  }

  export default FeeSectionThumbnail
import React from 'react';
import {Link} from "react-router-dom";


class Navbar extends React.Component {
    constructor() {
        super();
        this.toggle = this.toggle.bind(this);
        this.state = {
          dropdownOpen: false
        };
      }
    
      toggle() {
        this.setState(prevState => ({
          dropdownOpen: !prevState.dropdownOpen
        }));
      }
    render(){
        return (
            <div className="navbarMain">
                <Link className="navbarButton" to="/"> Home </Link>
                <Link className="navbarButton" to="/Services"> Services </Link>
                <Link className="navbarButton" to="/AboutUs"> About Us </Link>
                <Link className="navbarButton" to="/Awards"> Awards </Link>
                <Link className="navbarButton" to="/ContactUs"> Contact Us </Link>

            </div>
        )
    }
}

export default Navbar;
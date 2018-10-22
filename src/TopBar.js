import React from 'react';
import logo from "./Images/logo.png"
import {Link} from "react-router-dom"
import { Dropdown, DropdownToggle, NavLink, DropdownMenu, DropdownItem } from 'reactstrap';



class TopBar extends React.Component {
    constructor() {
        super();

        this.state = {
          dropdownOpen: false,
          transparency: true,
        };
        this.toggle = this.toggle.bind(this);
      }

    componentDidMount() {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 100;
            if (isTop !== this.state.transparency) {
                this.setState({ transparency: false })
            }
        });
    }

    toggle() {
    this.setState(prevState => ({
        dropdownOpen: !prevState.dropdownOpen
    }));
    }


    render(){
        const currentTransparency = this.state.transparency ? "topbarTransparent topbarMain" : "topbarColor topbarMain"
        return (
            <div className={currentTransparency}>
                {window.innerWidth > 500 ?
                <div className="topbarEmptyLeft">
                </div>
                : null }
                <Link to="/" className="logoHolder">    
                    <img className="logo" src={logo} alt="logo" />
                </Link>
                {window.innerWidth > 600 ?
                <div className="buttonHolder">
                    <Link className="topbarLinks" to="/AboutUs"> About Us </Link>
                    <Link className="topbarLinks" to="/Services"> Services </Link>
                    <Link className="topbarLinks" to="/Awards"> Awards </Link>
                    <Link className="topbarLinks" to="/ContactUs"> Contact Us </Link>
                </div>
                : null}
                {window.innerWidth < 600 ? 
                 <div className="buttonHolder">
                    <Dropdown  isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                        <DropdownToggle className="topbarButton">
                            ≡
                        </DropdownToggle>
                        <DropdownMenu>
                            <NavLink href="/"> Home </NavLink>
                            <DropdownItem divider />
                            <NavLink href="/AboutUs"> About Us </NavLink>
                            <NavLink href="/Services"> Services </NavLink>
                            <NavLink href="/Awards"> Awards </NavLink>
                            <NavLink href="/ContactUs"> Contact Us </NavLink>
                            <DropdownItem divider />
                        </DropdownMenu>
                    </Dropdown>
                </div> 
                : null }
                <div className="topbarEmptyRight">
                </div>
            </div>
        )
    }
}

export default TopBar;
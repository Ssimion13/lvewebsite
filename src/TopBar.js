import React from 'react';
import logo from "./Images/transparentlogo.png"
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
            const isTop = window.scrollY < 450;
            if (isTop) {
                this.setState({ transparency: true })
            } else {
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
        const navbarStatus = this.state.transparency && window.location.href.length === 22  ? "topbarTransparent topbarMain" : "topbarOpaque topbarMain"
        const linkStatus = this.state.transparency && window.location.href.length === 22 ? "topbarLinks" : "topbarLinksOpaque"
        return (
            <div className={navbarStatus}>
                <Link to="/" className="logoHolder">    
                    <img className="logo" src={logo} alt="logo" />
                </Link>
                {window.innerWidth > 500 ?
                <div className="buttonHolder">
                    <Link className={linkStatus} to="/AboutUs"> About Us </Link>
                    <Link className={linkStatus} to="/Services"> Services </Link>
                    <Link className={linkStatus} to="/Awards"> Awards </Link>
                    <Link className={linkStatus} to="/Location"> Location </Link>
                </div>
                : 
                 <div >
                    <Dropdown  isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                        <DropdownToggle className="hamburgerButton" >
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
                }
                <div className="topbarEmptyRight">
                </div>
            </div>
        )
    }
}

export default TopBar;
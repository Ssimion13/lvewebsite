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
            if(window.location.href !== "http://localhost:3000"){
                this.setState({transparency: false})
            } else {
                if (isTop !== this.state.transparency  ) {
                    this.setState({ transparency: false })
                }
                if (isTop !== this.state.transparency) {
                    this.setState({ transparency: true })
                }
            }
        });
    }

    toggle() {
    this.setState(prevState => ({
        dropdownOpen: !prevState.dropdownOpen
    }));
    }


    render(){
        const navbarStatus = this.state.transparency  ? "topbarTransparent topbarMain" : "topbarOpaque topbarMain"
        const linkStatus = this.state.transparency ? "topbarLinks" : "topbarLinksOpaque"
        return (
            <div className={navbarStatus}>
                <Link to="/" className="logoHolder">    
                    <img className="logo" src={logo} alt="logo" />
                </Link>
                {window.innerWidth > 800 ?
                <div className="buttonHolder">
                    <Link className={linkStatus} to="/AboutUs"> About Us </Link>
                    <Link className={linkStatus} to="/Services"> Services </Link>
                    <Link className={linkStatus} to="/Awards"> Awards </Link>
                    <Link className={linkStatus} to="/ContactUs"> Contact Us </Link>
                </div>
                : 
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
                }
                <div className="topbarEmptyRight">
                </div>
            </div>
        )
    }
}

export default TopBar;
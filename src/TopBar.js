import React from 'react';
import logo from "./Images/transparentlogo.png"
import {Link} from "react-router-dom"
import { Dropdown, DropdownToggle, NavLink, DropdownMenu, DropdownItem } from 'reactstrap';
import Fade from "react-reveal/Fade";



class TopBar extends React.Component {
    constructor() {
        super();

        this.state = {
          dropdownOpen1: false,
          dropdownOpen2: false,
          transparency: true,
          mobileMenuOpen: false,
        };
        this.toggle = this.toggle.bind(this);
        this.toggleMobile = this.toggleMobile.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
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
        dropdownOpen1: !prevState.dropdownOpen1
    }));
    }

    toggleMobile () {
        this.setState(prevState => ({
            mobileMenuOpen: !prevState.mobileMenuOpen
        }))
    }

    onMouseEnter(checker) {
        if(checker === "one"){
            this.setState({dropdownOpen1: true});
        }
        if(checker === "two"){
            this.setState({dropdownOpen2: true});
        }
      }
    
      onMouseLeave(checker) {
        if(checker === "one"){
            this.setState({dropdownOpen1: false});
        }
        if(checker === "two"){
            this.setState({dropdownOpen2: false});
        }
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
                    <Dropdown  onMouseOver={()=> this.onMouseEnter("one")} onMouseLeave={()=> this.onMouseLeave("one")} isOpen={this.state.dropdownOpen1} toggle={this.toggle}>
                        <DropdownToggle className={linkStatus}>
                            <div> About Us </div>
                        </DropdownToggle>
                        <DropdownMenu>
                                <NavLink href="/DrFajardo"> Dr. Fajardo </NavLink>  
                                <NavLink href="/DrCremonini"> Dr. Cremonini </NavLink> 
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown onMouseOver={()=> this.onMouseEnter("two")} onMouseLeave={()=> this.onMouseLeave("two")} isOpen={this.state.dropdownOpen2} toggle={this.toggle}>
                        <DropdownToggle  className={linkStatus}>
                            <div to="/Services"> Services </div>
                        </DropdownToggle>
                        <DropdownMenu>
                            <NavLink href="/ColonoscopyCancerScreening"> Colonoscopy </NavLink>
                            <NavLink href="/UpperEndoscopy"> Upper Endoscopy </NavLink>
                            <NavLink href="/GIMotilityClinic"> GI Motility Clinic </NavLink>
                            <NavLink href="/ViralHepatitisClinic"> Viral Hepatitis Clinic  </NavLink>
                            <NavLink href="/SmartPill"> Capsule Endoscopy </NavLink>
                        </DropdownMenu>
                    </Dropdown>
                    <Link className={linkStatus} to="/Awards"> Awards </Link>
                    <Link className={linkStatus} to="/Location"> Location </Link>   
                </div>
                : 
                 <div >
                    <Dropdown  isOpen={this.state.dropdownOpen} toggle={this.toggleMobile}>
                        <DropdownToggle className="hamburgerButton" >
                            ≡
                        </DropdownToggle>
                        {this.state.mobileMenuOpen ? 
                        <Fade bottom>
                            <div className="mobileMenu">
                                <div className="mobileMenu....Menu">
                                    <ol> 
                                        <ul>
                                            <li> fuck bitches </li>
                                        </ul>
                                    </ol>
                                </div>
                            </div>
                        </Fade>
                        : null 
                        }
                        {/* <DropdownMenu>
                            <NavLink href="/"> Home </NavLink>
                            <DropdownItem divider />
                            <NavLink href="/AboutUs"> About Us </NavLink>
                            <NavLink href="/Services"> Services </NavLink>
                            <NavLink href="/Awards"> Awards </NavLink>
                            <NavLink href="/ContactUs"> Contact Us </NavLink>
                            <DropdownItem divider />
                        </DropdownMenu> */}
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
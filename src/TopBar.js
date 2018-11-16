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
          one: false,
          two: false,
          three: false,
          four: false,
        };
        this.toggle = this.toggle.bind(this);
        this.toggleMobile = this.toggleMobile.bind(this);
        this.turnOffMobile = this.toggleMobile.bind(this);
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


    toggle(checker) {
        if(checker === "one"){
            this.setState({dropdownOpen1: true});
        }
        if(checker === "two"){
            this.setState({dropdownOpen2: true});
        }
    }

    toggleMobile () {
        if(this.state.transparency){
            this.setState(prevState => ({
                mobileMenuOpen: !prevState.mobileMenuOpen,
                transparency: false
            }))
        }
        if(!this.state.transparency){
            if(window.scrollY < 450){
                this.setState(prevState => ({
                    mobileMenuOpen: !prevState.mobileMenuOpen,
                    transparency: true
                }))
            } else {
                this.setState(prevState => ({
                    mobileMenuOpen: !prevState.mobileMenuOpen
                }))
            }
        }
    }
    turnOffMobile () {
        this.setState({
            mobileMenuOpen: false
        })
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
    
        const navbarStatus = this.state.transparency && window.location.pathname === "/" ? "topbarTransparent topbarMain" : "topbarOpaque topbarMain"
        const linkStatus = this.state.transparency && window.location.pathname === "/" ? "topbarLinks" : "topbarLinksOpaque"
        return (
            <div className={navbarStatus}>
                <Link to="/" className="logoHolder">    
                    <img className="logo" src={logo} alt="logo" />
                </Link>
                {window.innerWidth > 500 ?
                <div className="buttonHolder">
                    <Dropdown  onMouseOver={()=> this.onMouseEnter("one")} onMouseLeave={()=> this.onMouseLeave("one")} isOpen={this.state.dropdownOpen1} toggle={()=> this.toggle("one")}>
                        <DropdownToggle className={linkStatus}>
                            <Link className={linkStatus}  to="/AboutUs"> About Us </Link>
                        </DropdownToggle>
                        <DropdownMenu className="topBarDropdownMenu">
                                <NavLink className="topBarDropdownLink" href="/DrFajardo"> Dr. Fajardo </NavLink>  
                                <NavLink className="topBarDropdownLink" href="/DrCremonini"> Dr. Cremonini </NavLink> 
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown onMouseOver={()=> this.onMouseEnter("two")} onMouseLeave={()=> this.onMouseLeave("two")} isOpen={this.state.dropdownOpen2} toggle={()=> this.toggle("two")}>
                        <DropdownToggle  className={linkStatus}>
                            <Link className={linkStatus}  to="/Services"> Services </Link>
                        </DropdownToggle>
                        <DropdownMenu className="topBarDropdownMenu">
                            <NavLink className="topBarDropdownLink" href="/ColonoscopyCancerScreening"> Colonoscopy </NavLink>
                            <NavLink className="topBarDropdownLink" href="/UpperEndoscopy"> Upper Endoscopy </NavLink>
                            <NavLink className="topBarDropdownLink" href="/GIMotilityClinic"> GI Motility Clinic </NavLink>
                            <NavLink className="topBarDropdownLink" href="/ViralHepatitisClinic"> Viral Hepatitis Clinic  </NavLink>
                            <NavLink className="topBarDropdownLink" href="/CapsuleEndoscopy"> Capsule Endoscopy (SmartPill) </NavLink>
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
                                <div className="mobileMenuDiv">
                                <Link to="/"> Home </Link>
                                    <DropdownItem divider />
                                        {/* <div onClick={this.openDropdown('one')}> About Us </div>
                                        {this.state.one ?
                                        <div>
                                            <div> Dr. Fajardo </div>
                                            <div> Dr. Cremonini </div>
                                        </div>
                                        : null}
                                        <div onClick={this.openDropdown('two')}> Services </div>
                                        <div onClick={this.openDropdown('three')}> Awards  </div>
                                        <div onClick={this.openDropdown('four')}> Location </div> */}
                                        {/* <Link to="/AboutUs"> About Us </Link>
                                        <br/>
                                        <Link to="/Services"> Services </Link>
                                        <br/>
                                        <Link to="/Awards"> Awards </Link>
                                        <br/>
                                        <Link to="/Location"> Location </Link>
                                        <br/> */}
                                    <DropdownItem divider />
                                </div>
                            </div>
                        </Fade>
                        : null 
                        }
                        {/* <DropdownMenu>

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
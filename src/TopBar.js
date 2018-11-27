import React from 'react';
import logo from "./Images/transparentlogo.png"
import {Link} from "react-router-dom"
import { Dropdown, DropdownToggle, NavLink, DropdownMenu } from 'reactstrap';
import Fade from "react-reveal/Fade";




class TopBar extends React.Component {
    constructor() {
        super();

        this.state = {
          dropdownOpen1: false,
          dropdownOpen2: false,
          transparency: true,
          mobileMenuOpen: false,
          hamburgerDropdown1: false,
          hamburgerDropdown2: false,
          hamburgerDropdown3: false,
          hamburgerDropdown4: false,
        };
        this.toggle = this.toggle.bind(this);
        this.toggleMobile = this.toggleMobile.bind(this);
        this.turnOffMobile = this.toggleMobile.bind(this);
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
      }

    componentDidMount() {
        document.addEventListener('scroll', () => {
            const isTop = window.scrollY < 450 && !this.state.mobileMenuOpen;
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
        if(checker === "hamburgerDropdown1"){
            this.setState(prevState => ({
              hamburgerDropdown1: !prevState.hamburgerDropdown1
            })
        )}
        if(checker === "hamburgerDropdown2"){
            this.setState(prevState => ({
              hamburgerDropdown2: !prevState.hamburgerDropdown2
            })
        )}
    }

    toggleMobile () {
        window.scrollTo(0, 0)
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
                    transparency: false
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
                {/* check the window size to determine a top bar with uh, hover stuff for a mouse or to use a hamburger menu for mobile devices... */}
                {window.innerWidth > 800 ?
                <div className="buttonHolder">
                    <Dropdown className="dropdownButton"  onMouseOver={()=> this.onMouseEnter("one")} onMouseLeave={()=> this.onMouseLeave("one")} isOpen={this.state.dropdownOpen1} toggle={()=> this.toggle("one")}>
                        <DropdownToggle className={linkStatus}>
                            <Link className={linkStatus}  to="/AboutUs"> About Us </Link>
                        </DropdownToggle>
                        <DropdownMenu className="topBarDropdownMenu">
                                <NavLink className="topBarDropdownLink" href="/DrFajardo"> Dr. Fajardo </NavLink>  
                                <NavLink className="topBarDropdownLink" href="/DrCremonini"> Dr. Cremonini </NavLink> 
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown className="dropdownButton" onMouseOver={()=> this.onMouseEnter("two")} onMouseLeave={()=> this.onMouseLeave("two")} isOpen={this.state.dropdownOpen2} toggle={()=> this.toggle("two")}>
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
                                    <div className="hamburgerMenuDropdown">
                                        <Link className="hamburgerMenuLink" onClick={()=> this.toggleMobile()} to="/"> Home </Link>
                                    </div>

                                    {/*the dropdown menus, top part is what appears if not clicked */}
                                    {!this.state.hamburgerDropdown1 ?
                                        <div className="hamburgerMenuDropdown" onClick={()=> this.toggle("hamburgerDropdown1")}>
                                            <div className="hamburgerMenuInnerDiv"> 
                                                <Link className="hamburgerMenuLink" onClick={()=>this.toggleMobile()} to="/AboutUs"> Our Doctors </Link>
                                                <div className="hamburgerMenuTriangle"> ▼ </div>
                                            </div>
                                        </div> 
                                    : 

                                        <div className="hamburgerMenuDropdown" onClick={()=> this.toggle("hamburgerDropdown1")}>
                                            <div className="hamburgerMenuInnerDiv"> 
                                                <Link className="hamburgerMenuLink" onClick={()=>this.toggleMobile()} to="/AboutUs"> Our Doctors </Link>
                                                <div className="hamburgerMenuTriangle"> ▲ </div>
                                            </div>
                                            <Fade right>
                                                <div className="activeHamburgerMenu">
                                                    <Link className="hamburgerMenuLink" onClick={()=> this.toggleMobile()} to="/DrFajardo"> Dr. Fajardo </Link>
                                                    <br/>
                                                    <Link className="hamburgerMenuLink" onClick={()=> this.toggleMobile()} to="/DrCremonini">Dr. Cremonini </Link> 
                                                </div>
                                            </Fade>
                                        </div>
                                    }

                                    {!this.state.hamburgerDropdown2 ?
                                        <div className="hamburgerMenuDropdown" onClick={()=> this.toggle("hamburgerDropdown2")}> 
                                            <div className="hamburgerMenuInnerDiv"> 
                                                <Link className="hamburgerMenuLink" onClick={()=>this.toggleMobile()} to="/Services"> Services </Link>
                                                <div className="hamburgerMenuTriangle"> ▼  </div>
                                            </div>
                                            
                                        </div> 
                                    : 

                                        <div className="hamburgerMenuDropdown" onClick={()=> this.toggle("hamburgerDropdown2")}>
                                            <div className="hamburgerMenuInnerDiv"> 
                                                <Link className="hamburgerMenuLink" onClick={()=>this.toggleMobile()} to="/Services"> Services </Link>
                                                <div className="hamburgerMenuTriangle"> ▲   </div>
                                            </div>
                                            
                                            <Fade right>
                                                <div className="activeHamburgerMenu">
                                                    <Link className="hamburgerMenuLink" onClick={()=> this.toggleMobile()} to="/ColonoscopyCancerScreening"> Colonoscopy </Link>
                                                    <br/>
                                                    <Link className="hamburgerMenuLink" onClick={()=> this.toggleMobile()} to="/UpperEndoscopy">Upper Endoscopy </Link> 
                                                    <br/>
                                                    <Link className="hamburgerMenuLink" onClick={()=> this.toggleMobile()} to="/GIMotilityClinic">GI Motility Clinic </Link>
                                                    <br/>
                                                    <Link className="hamburgerMenuLink" onClick={()=> this.toggleMobile()} to="/ViralHepatitisClinic">Viral Hepatitis Clinic </Link> 
                                                    <br/>
                                                    <Link className="hamburgerMenuLink" onClick={()=> this.toggleMobile()} to="/CapsuleEndoscopy">Capsule Endoscopy </Link> 
                                                    <br/> 
                                                </div>
                                            </Fade>
                                        </div>

                                    }
                                    <Link className="hamburgerMenuLink" onClick={()=> this.toggleMobile()} to="/Awards"> Awards </Link>
                                    <br/>
                                    <Link className="hamburgerMenuLink" onClick={()=> this.toggleMobile()} to="/Location"> Location </Link>
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
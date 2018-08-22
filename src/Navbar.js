import React from 'react';
import logo from "./logo.png"
import { Dropdown, DropdownToggle, NavLink, DropdownMenu, DropdownItem } from 'reactstrap';
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
                <div className="logoHolder">
                    <img className="logo" src={logo} alt="logo" />
                </div>
                <Dropdown className="navbarButton" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle>
                        ≡
                    </DropdownToggle>
                    <DropdownMenu>
                        <NavLink href="/"> Home </NavLink>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Another Action</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
                <Dropdown className="navbarButton" isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle>
                        ≡
                    </DropdownToggle>
                    <DropdownMenu>
                        <NavLink href="/"> Home </NavLink>
                        <DropdownItem>Another Action</DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem>Another Action</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>
        )
    }
}

export default Navbar;
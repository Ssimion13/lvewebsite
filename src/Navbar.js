import React from 'react';
import logo from "./logo.png"
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
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
                <img src={logo} alt="logo" />
                <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                    <DropdownToggle>
                        ≡
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header>Header</DropdownItem>
                        <DropdownItem disabled>Action</DropdownItem>
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
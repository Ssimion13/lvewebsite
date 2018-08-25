import React from 'react';
import logo from "./Images/logo.png"
import { Dropdown, DropdownToggle, NavLink, DropdownMenu, DropdownItem } from 'reactstrap';



class TopBar extends React.Component {
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
            <div className="topbarMain">
                <div className="logoHolder">
                    <img className="logo" src={logo} alt="logo" />
                </div>
                <div className="buttonHolder">
                    <Dropdown  isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                        <DropdownToggle className="topbarButton">
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
            </div>
        )
    }
}

export default TopBar;
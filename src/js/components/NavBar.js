import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import { NavLink as ReactNavLink } from 'react-router-dom';

const NavBar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  }

  return (
    <div>
      <Navbar light expand="md" style={{marginBottom: '30px'}}>
        <NavbarBrand href="/">Byron Ng</NavbarBrand>
        <NavbarToggler onClick={setCollapsed} />
        <Collapse isOpen={collapsed} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink tag={ReactNavLink} exact to="/" activeClassName="active">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactNavLink} exact to="/about" activeClassName="active">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactNavLink} exact to="/contact" activeClassName="active">Contact</NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink tag={ReactNavLink} exact to="/services" activeClassName="active">Services</NavLink>
            </NavItem> */}
          </Nav>
        </Collapse>
      </Navbar>
    </div>

  )
}

export default NavBar;

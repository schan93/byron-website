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
import { FaFacebookF, FaInstagram } from 'react-icons/fa'
import NavBarHeader from '../../assets/images/train-with-byron-header.jpg';

const NavBar = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  }

  return (
      <Navbar light fixed="top" expand="sm" style={{borderBottom: '.1px solid #e8e4e4', backgroundColor: 'white'}}>
        <NavbarBrand href="/">
          <img src={NavBarHeader} />
        </NavbarBrand>
          <Nav className="nav mr-auto" navbar>
            <NavItem>
              <NavLink tag={ReactNavLink} exact to="/" activeClassName="active">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactNavLink} exact to="/about" activeClassName="active">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactNavLink} exact to="/contact" activeClassName="active">Contact</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={ReactNavLink} exact to="/testimonials" activeClassName="active">Testimonials</NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink tag={ReactNavLink} exact to="/services" activeClassName="active">Services</NavLink>
            </NavItem> */}
          </Nav>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="https://www.facebook.com/byron.ng.188">
                <FaFacebookF size={20} />
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://www.instagram.com/ng_byron">
              <FaInstagram size={20} />
              </NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink tag={ReactNavLink} exact to="/services" activeClassName="active">Services</NavLink>
            </NavItem> */}
          </Nav>
      </Navbar>

  )
}

export default NavBar;

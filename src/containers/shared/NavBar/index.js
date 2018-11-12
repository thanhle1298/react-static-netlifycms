import React, { Component } from "react";
import {
  Navbar,
  Nav,
  NavItem,
  Image,
} from "react-bootstrap";
import { Link } from 'react-static'

import "./styles.css";

class NavBar extends Component {
  render() {
    return (
      <Navbar fluid>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/">
              <Image
                className="logo-menu"
                alt="900x500"
                src={require("../../assets/images/logo.png")}
              />
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem>
              <Link to="/" activeClassName="active">Home</Link>
            </NavItem>
            <NavItem>
              <Link to="/about" activeClassName="active">About</Link>
            </NavItem>
            <NavItem>
              <Link to="/blog" activeClassName="active">Blog</Link>         
            </NavItem>

            {/* <NavItem eventKey={1} href="/aboutus">
              ABOUT US
            </NavItem>
            <NavItem eventKey={2} href="/capabilities">
            CAPABILITIES
            </NavItem>
            <NavItem eventKey={3} href="/portfolio">
              PORTFOLIO
            </NavItem>
            <NavItem eventKey={4} href="/services">
              SERVICES
            </NavItem>
            <NavItem eventKey={5} href="/workwithus">
              WORK WITH US
            </NavItem>
            <NavItem eventKey={6} href="/contactus">
              CONTACT US
            </NavItem> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;

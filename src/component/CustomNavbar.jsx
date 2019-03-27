import React, { Component } from "react";
import { Navbar, Nav, NavItem, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../sheets/CustomNavbar.css";

class CustomNavbar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" activeKey="/home">
        <NavDropdown title="Menu" id="collasible-nav-dropdown">
          <NavDropdown.Item href="./News">News</NavDropdown.Item>
          <NavDropdown.Item href="./About">About</NavDropdown.Item>
        </NavDropdown>

        <Navbar.Brand>
          <Link to="/"> | Home | </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />

        <Nav>
          <NavItem>
            <Link to="/Contact">Contact</Link>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default CustomNavbar;

/*
  <Navbar collapseOnSelect  bg="dark">      
        <Navbar.Brand>
          <Link to="/"> Home </Link>
        </Navbar.Brand>
        <Navbar.Toggle />        
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem >
                 <Nav.Link href="/News">News</Nav.Link>              
            </NavItem>
            <NavItem>
                <Nav.Link href="/About">About</Nav.Link>              
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

*/

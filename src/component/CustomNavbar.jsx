import React, { Component } from "react";
import { Navbar, Nav, NavItem, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../sheets/CustomNavbar.css";

class CustomNavbar extends Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" activeKey="/home">
        <NavDropdown title="Menu" id="collasible-nav-dropdown">
          <NavDropdown.Item>
            <Link to="/News">Blog</Link>
          </NavDropdown.Item>
          <NavDropdown.Item>
            <Link to="/About">About</Link>
          </NavDropdown.Item>
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

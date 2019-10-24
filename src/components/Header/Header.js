import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../Header/header.scss";
import Logo from "../../images/nomix-logo-02.png";
import Container from "react-bootstrap/Container";

export default class Header extends Component {
  render() {
    return (
      <Navbar collapseOnSelect bg="light" expand="lg" fixed="top">
          <Navbar.Brand href="#home">
            <img className="logo-image" alt="logo" src={Logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <Nav.Link className="main-nav-link" eventKey={2} href="#">
                About us
              </Nav.Link>
              <Nav.Link className="main-nav-link" href="#">
                Sign-in
              </Nav.Link>
              <Nav.Link className="nav-order-button" href="#">
                Order Kit
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    );
  }
}

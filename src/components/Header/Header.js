import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../Header/header.css";

export default class Header extends Component {
  render() {
    return (
      <Navbar collapseOnSelect bg="light" expand="lg" fixed="top">
        <Navbar.Brand href="#home">Nomix</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link className="nav-order-button" href="#">
              Order Kit
            </Nav.Link>
            <Nav.Link eventKey={2} href="#">
              Sign-in
            </Nav.Link>
            <Nav.Link href="#">FAQ</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

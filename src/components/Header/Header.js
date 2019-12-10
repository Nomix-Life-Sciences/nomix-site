import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "../Header/header.scss";
import Logo from "../../images/nomix-logo-02.png";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Product from "../../Product";

import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Header = () => {
  return (
    <Navbar collapseOnSelect bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="/">
          <img className="logo-image" alt="logo" src={Logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link className="main-nav-link hovernav" href="/about">
              <span>ABOUT US</span>
            </Nav.Link>
            <Nav.Link
              className="main-nav-link hovernav"
              href="https://match.nomixls.com/login"
            >
              <span>SIGN-IN</span>
            </Nav.Link>
            <Nav.Link className="main-nav-link hovernav"></Nav.Link>
            <Nav.Link className="nav-order-button hover-button" href="/order">
              <span>ORDER KIT</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;

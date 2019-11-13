import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "../Header/header.scss";
import Logo from "../../images/nomix-logo-02.png";

import { useState, useEffect } from "react";
import PropTypes from "prop-types";

const Header = () => {
  const [initialized, setInitialized] = useState(false);
  // TODO: this is setting all of them every time it loads. It would be smart to
  // set it to just adjust this one.
  useEffect(() => {
    if (!initialized) {
      const x = document.getElementsByClassName("hover-button");
      let i;
      for (i = 0; i < x.length; i++) {
        x[i].onmousemove = e => {
          const x = e.pageX - e.target.offsetLeft;
          const y = e.pageY - e.target.offsetTop;

          e.target.style.setProperty("--x", `${x}px`);
          e.target.style.setProperty("--y", `${y}px`);
        };
      }
      setInitialized(true);
    }
  });
  return (
    <Navbar collapseOnSelect bg="light" expand="lg" fixed="top">
      <Navbar.Brand href="/">
        <img className="logo-image" alt="logo" src={Logo} />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto"></Nav>
        <Nav>
          <Nav.Link
            className="main-nav-link hovernav"
            href="https://match.nomixls.com/login"
          >
            <span>Sign-in</span>
          </Nav.Link>
          <Nav.Link className="main-nav-link hovernav"></Nav.Link>
          <Nav.Link className="nav-order-button hover-button" href="#">
            <span>Order Kit</span>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;

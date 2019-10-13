import React from "react";
import logo from "./logo.svg";
import Button from "react-bootstrap/Button";
import { Flex, Box } from "@rebass/grid/emotion";
import WhoWeAre from "./components/SectionComponents/WhoWeAre";
import HowItWorks from "./components/SectionComponents/HowItWorks";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import Header from "./components/Header/Header";

import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Flex className="hero" justifyContent="center" alignItems="center">
        <Box>
          <h1>Find the clinical trial that works for you</h1>
          <Button>Learn More</Button>
        </Box>
      </Flex>

      <div className="container sectionHeight">
        <h1 className="sectionHeader">Who we are</h1>
        <WhoWeAre />
      </div>

      <div className="container sectionHeight">
        <h1 className="sectionHeader">How it works</h1>
        <HowItWorks />
      </div>

      <div className="orderKit">
        <Button className="orderKit">Order Kit</Button>
      </div>
      <Footer />
    </>
  );
}

export default App;

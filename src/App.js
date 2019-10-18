import React from "react";
import Button from "react-bootstrap/Button";
import { Flex, Box } from "@rebass/grid/emotion";
import WhoWeAre from "./components/SectionComponents/WhoWeAre";
import HowItWorks from "./components/SectionComponents/HowItWorks";

import Header from "./components/Header/Header";

import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Flex className="hero" justifyContent="center" alignItems="center">
        <Box>
          <h1>Find the clinical trial that works for you</h1>
          <Button className="heroCTA">Learn More</Button>
        </Box>
      </Flex>

      <Flex
        className="container homeSection"
        justifyContent="center"
        alignItems="center"
      >
        <Box>
          <h1 className="sectionHeader">Who we are</h1>
          <WhoWeAre />
        </Box>
      </Flex>

      <Flex
        className="container homeSection"
        justifyContent="center"
        alignItems="center"
      >
        <Box>
          <h1 className="sectionHeader">How it works</h1>
          <HowItWorks />
        </Box>
      </Flex>

      <div className="orderKit">
        <Button className="orderKit">Order Kit</Button>
      </div>
      <Footer />
    </>
  );
}

export default App;

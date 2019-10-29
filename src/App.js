import React from "react";
import Button from "react-bootstrap/Button";
import { Flex, Box } from "@rebass/grid/emotion";
import WhoWeAre from "./components/SectionComponents/WhoWeAre";
import HowItWorks from "./components/SectionComponents/HowItWorks";

import Partners from "./components/Partners/Partners";

import Header from "./components/Header/Header";

import Footer from "./components/Footer/Footer";

import gql from "graphql-tag";
import { Query } from "react-apollo";

const howItWorksQuery = gql`
  {
    getHowItWorks {
      repeater {
        image {
          _id
          path
        }
        title
      }
    }
  }
`;

const wwaQuery = gql`
  {
    getWhoWeAre {
      repeater {
        image {
          _id
          path
        }
        description
        title
      }
    }
  }
`;

function App() {
  return (
    <>
      <Header />
      <Flex className="hero" justifyContent="center" alignItems="center">
        <Box>
          <h1>Find the clinical trial that works for you</h1>
          <div className="mainCTA">
            <Button className="heroCTA">Learn More</Button>
          </div>
        </Box>
      </Flex>
      <Flex
        className="container homeSection"
        justifyContent="center"
        alignItems="center"
      >
        <Box>
          <h1 className="sectionHeader">
            <span>How it works</span>
          </h1>
          <Query query={howItWorksQuery}>
            {({ loading, error, data }) => {
              if (loading) return "";
              if (error) return `Error! ${error.message}`;
              return <HowItWorks items={data.getHowItWorks.repeater} />;
            }}
          </Query>
        </Box>
      </Flex>
      <div className="wwa-background">
        <Flex
          className="container homeSection"
          justifyContent="center"
          alignItems="center"
        >
          <Box>
          <Query query={wwaQuery}>
            {({ loading, error, data }) => {
              if (loading) return "";
              if (error) return `Error! ${error.message}`;
              return <WhoWeAre items={data.getWhoWeAre.repeater} />;
            }}
          </Query>          </Box>
        </Flex>
      </div>
      <div className="orderKit">
        <Flex className="container" justifyContent="center" alignItems="center">
          <Box>
            <p className="orderText">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna
            </p>
            <Button className="orderKit">Order Kit</Button>
          </Box>
        </Flex>
      </div>
      <Partners />
      <Footer />
    </>
  );
}

export default App;

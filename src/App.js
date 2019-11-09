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

const partners = gql`
  {
    getPartnerLogos {
      _id
      repeater {
        logo {
          _id
          caption
          credit
          description
          filename
          mimeType
          path
          sourceUrl
          title
          uploadStatus
        }
      }
    }
  }
`;

function App() {
  return (
    <>
      <Header />
      <Flex className="hero" justifyContent="center" alignItems="center">
        <Box className="hero-text">
          <h1 className="main-header-text">Find the clinical trial that works for you</h1>
          <br />
          <br />
          <h3>
          Were here to help you and doctor find the right clinical trial. Take our kit and answer a few short questions and we’ll search the global network for the right trial for you.
          </h3>
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
            </Query>{" "}
          </Box>
        </Flex>
      </div>
      <div className="orderKit">
        <Flex className="container" justifyContent="center" alignItems="center">
          <Box>
            <p className="orderText">
              Nomix makes finding the right trial easy. Start by ordering our
              at-home collection kit <br /> and answering a few short questions.
            </p>

            <br />
            <br />
            <Button className="orderKit">Order Kit</Button>
          </Box>
        </Flex>
      </div>
      <Query query={partners}>
        {({ loading, error, data }) => {
          if (loading) return "";
          if (error) return `Error! ${error.message}`;
          return <Partners items={data.getPartnerLogos.repeater} />;
        }}
      </Query>{" "}
      <Footer />
    </>
  );
}

export default App;

import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { Flex, Box } from "@rebass/grid/emotion";
import WhoWeAre from "./components/SectionComponents/WhoWeAre";
import HowItWorks from "./components/SectionComponents/HowItWorks";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Product from "./Product";
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
        description
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
      <div className="network-image">
        <Flex className="hero" justifyContent="center" alignItems="center">
          <Box className="hero-text">
            <Container>
              <h1 className="main-header-text">
                Find the clinical trial that <br /> works for you
              </h1>

              <h3>
                You are unique so your treatment should be unique too. Nomix
                looks at your biomarkers and health history to match you to a
                clinical trial.
              </h3>
            </Container>
          </Box>
        </Flex>
      </div>
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

            <Button href="/order" className="order-kit-cta-large">
                <span>Order Kit</span>
            </Button>
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

import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { Flex, Box } from "@rebass/grid/emotion";
import ApolloClient from "apollo-boost";
import { getImageUrl } from "takeshape-routing";

import "./index.scss";

import gql from "graphql-tag";
import { Query } from "react-apollo";

const howItWorksQuery = gql`
  {
    getHowItWorks {
      repeater {
        image {
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
        title
      }
    }
  }
`;

const HowItWorks = ({ items }) => {
  return (
    <Flex
      className="homeSection howitworks"
      alignItems="center"
      flexWrap="wrap"
      frameBorder
    >
      {items.map(step => (
        <Box width={[1, 1 / 2]} px={2}>
          <div className="hiw-card card">
            <div class="card-body">
              <img
                alt=""
                className="howImage"
                src={getImageUrl(step.image.path)}
              />
              <h3 class="step-title">{step.title}</h3>
            </div>
          </div>
        </Box>
      ))}
    </Flex>
  );
};

export default HowItWorks;

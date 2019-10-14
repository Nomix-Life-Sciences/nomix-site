import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { Flex, Box } from "@rebass/grid/emotion";

import "./index.css";

export default class HowItWorks extends Component {
  render() {
    return (
      <Flex
        className="homeSection howitworks"
        alignItems="center"
        flexWrap="wrap"
      >
        <Box width={[1, 1 / 2]} px={2}>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">asdfklajhsdf</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </Box>
        <Box width={[1, 1 / 2]} px={2}>
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">alsdjfasdf</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </Box>
      </Flex>
    );
  }
}

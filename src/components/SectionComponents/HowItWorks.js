import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import { Flex, Box } from "@rebass/grid/emotion";

import "./index.scss";

export default class HowItWorks extends Component {
  render() {
    return (
      <Flex
        className="homeSection howitworks"
        alignItems="center"
        flexWrap="wrap"
      >
        <Box width={[1, 1 / 4]} px={2}>
          <div className="hiw-card card">
            <div class="card-body">
              <img
                alt=""
                className="howImage"
                src="https://www.axiapayments.com/wp-content/uploads/2014/09/placeholder-square.jpg"
              />
              <h5 class="step-title">Step 1</h5>
            </div>
          </div>
        </Box>
        <Box width={[1, 1 / 4]} px={2}>
          <div className="hiw-card card">
            <div class="card-body">
              <img
                alt=""
                className="howImage"
                src="https://www.axiapayments.com/wp-content/uploads/2014/09/placeholder-square.jpg"
              />
              <h5 class="step-title">Step 2</h5>
            </div>
          </div>
        </Box>
        <Box width={[1, 1 / 4]} px={2}>
          <div className="hiw-card card">
            <div class="card-body">
              <img
                alt=""
                className="howImage"
                src="https://www.axiapayments.com/wp-content/uploads/2014/09/placeholder-square.jpg"
              />
              <h5 class="step-title">Step 3</h5>
            </div>
          </div>
        </Box>
        <Box width={[1, 1 / 4]} px={2}>
          <div className="hiw-card card">
            <div class="card-body">
              <img
                alt=""
                className="howImage"
                src="https://www.axiapayments.com/wp-content/uploads/2014/09/placeholder-square.jpg"
              />
              <h5 class="step-title">Step 4</h5>
            </div>
          </div>
        </Box>
      </Flex>
    );
  }
}

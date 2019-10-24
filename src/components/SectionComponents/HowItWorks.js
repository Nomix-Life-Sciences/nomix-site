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
        <Box width={[1, 1 / 2]} px={2}>
          <div className="hiw-card card">
            <div class="card-body">
              <img
                alt=""
                className="howImage"
                src="https://www.axiapayments.com/wp-content/uploads/2014/09/placeholder-square.jpg"
              />
              <h3 class="step-title">You order the kit.</h3>
            </div>
          </div>
        </Box>
        <Box width={[1, 1 / 2]} px={2}>
          <div className="hiw-card card">
            <div class="card-body">
              <img
                alt=""
                className="howImage"
                src="https://www.axiapayments.com/wp-content/uploads/2014/09/placeholder-square.jpg"
              />
              <h3 class="step-title">You collect your sample.</h3>
            </div>
          </div>
        </Box>
        <Box width={[1, 1 / 2]} px={2}>
          <div className="hiw-card card">
            <div class="card-body">
              <img
                alt=""
                className="howImage"
                src="https://www.axiapayments.com/wp-content/uploads/2014/09/placeholder-square.jpg"
              />
              <h3 class="step-title">We analyze it and match you.</h3>
            </div>
          </div>
        </Box>
        <Box width={[1, 1 / 2]} px={2}>
          <div className="hiw-card card">
            <div class="card-body">
              <img
                alt=""
                className="howImage"
                src="https://www.axiapayments.com/wp-content/uploads/2014/09/placeholder-square.jpg"
              />
              <h3 class="step-title">You enroll.</h3>
            </div>
          </div>
        </Box>
      </Flex>
    );
  }
}

import React, { Component } from "react";
import { Flex, Box } from "@rebass/grid/emotion";

export default class WhoWeAre extends Component {
  render() {
    return (
      <Flex
        className="homeSection whoweare"
        alignItems="center"
        flexWrap="wrap"
      >
        <Box width={[1, 1 / 3]} px={2}>
          <div class="wwa-card card">
            <div class="card-body">
              <img
                alt=""
                className="placeholderImg"
                src="https://www.axiapayments.com/wp-content/uploads/2014/09/placeholder-square.jpg"
              />
              <h5 class="card-title wwa-header">Our Mission</h5>
              <p class="wwa-text ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          </div>
        </Box>
        <Box width={[1, 1 / 3]} px={2}>
          <div class="wwa-card card">
            <div class="card-body">
              <img
                alt=""
                className="placeholderImg"
                src="https://www.axiapayments.com/wp-content/uploads/2014/09/placeholder-square.jpg"
              />

              <h5 class="card-title wwa-header">Our Story</h5>
              <p class="wwa-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          </div>
        </Box>
        <Box width={[1, 1 / 3]} px={2}>
          <div class="wwa-card card">
            <div class="card-body">
              <img
                alt=""
                className="placeholderImg"
                src="https://www.axiapayments.com/wp-content/uploads/2014/09/placeholder-square.jpg"
              />

              <h5 class="card-title wwa-header">Our Technology</h5>
              <p class="wwa-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam.
              </p>
            </div>
          </div>
        </Box>
      </Flex>
    );
  }
}

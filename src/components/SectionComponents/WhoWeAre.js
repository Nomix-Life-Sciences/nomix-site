import React, { Component } from "react";
import Button from "react-bootstrap/Button";
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
          <div class="card">
            <div class="card-body">
              <img
                className="placeholderImg"
                src="https://www.axiapayments.com/wp-content/uploads/2014/09/placeholder-square.jpg"
              />
              <h5 class="card-title">Our Mission</h5>
              <p class="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </Box>
        <Box width={[1, 1 / 3]} px={2}>
          <div class="card">
            <div class="card-body">
              <img
                className="placeholderImg"
                src="https://www.axiapayments.com/wp-content/uploads/2014/09/placeholder-square.jpg"
              />

              <h5 class="card-title">Our Story</h5>
              <p class="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </Box>
        <Box width={[1, 1 / 3]} px={2}>
          <div class="card">
            <div class="card-body">
              <img
                className="placeholderImg"
                src="https://www.axiapayments.com/wp-content/uploads/2014/09/placeholder-square.jpg"
              />

              <h5 class="card-title">Our Technology</h5>
              <p class="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
          </div>
        </Box>
      </Flex>
    );
  }
}

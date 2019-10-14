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
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
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
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
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

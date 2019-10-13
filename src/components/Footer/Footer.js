import React, { Component } from "react";
import { Flex, Box } from "@rebass/grid/emotion";
import "../Footer/footer.css";

export default class Footer extends Component {
  render() {
    return (
      <div className="container footer">
        <hr></hr>
        <Flex>
          <Box width={1 / 2}>
            <h3>Nomix</h3>
            <h3>Life Sciences</h3>
          </Box>
          <Box width={1 / 2}>
            <ul>
              <li>Text</li>
              <li>Text</li>
              <li>Text</li>
              <li>Text</li>
            </ul>
          </Box>
        </Flex>
      </div>
    );
  }
}

import React, { Component } from "react";
import { Flex, Box } from "@rebass/grid/emotion";
import "../Footer/footer.scss";

export default class Footer extends Component {
  render() {
    return (
      <>
        <hr></hr>

        <footer className="container footer">
          <Flex>
            <Box width={1 / 2}>
              <h4>Nomix Life Sciences</h4>
              <h4>Copyright 2019</h4>
            </Box>
            <Box width={1 / 2}></Box>
          </Flex>
        </footer>
      </>
    );
  }
}

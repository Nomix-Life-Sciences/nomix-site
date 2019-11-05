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
              <h5>Nomix Life Sciences</h5>
              <h5>Copyright 2019</h5>
            </Box>
            <Box width={1 / 2}></Box>
          </Flex>
        </footer>
      </>
    );
  }
}

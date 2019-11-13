import React, { Component } from "react";
import { Flex, Box } from "@rebass/grid/emotion";
import "../Footer/footer.scss";

export default class Footer extends Component {
  render() {
    return (
      <>
        <div className="footer">
          <footer className="container">
            <Flex>
              <Box width={1 / 2}>
                <span>Nomix Life Sciences</span>
                <br />
                <span>Copyright 2019</span>
              </Box>
              <Box width={1 / 2}></Box>
            </Flex>
          </footer>
        </div>
      </>
    );
  }
}

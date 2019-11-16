import React from "react";
import { Flex, Box } from "@rebass/grid/emotion";
import { getImageUrl } from "takeshape-routing";

import "./index.scss";

const HowItWorks = ({ items }) => {
  return (
    <Flex
      className="howitworks"
      alignItems="center"
      flexWrap="wrap"
      frameBorder
    >
      {items.map(step => (
        <Box width={[1, 1 / 2]} px={2}>
          <div className="hiw-card card">
            <div class="card-body">
              <img
                alt=""
                className="howImage"
                src={getImageUrl(step.image.path)}
              />
              <h3 class="step-title">{step.title}</h3>
            </div>
          </div>
        </Box>
      ))}
    </Flex>
  );
};

export default HowItWorks;

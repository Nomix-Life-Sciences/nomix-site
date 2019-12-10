import React from "react";
import { Flex, Box } from "@rebass/grid/emotion";
import { getImageUrl } from "takeshape-routing";

import "./index.scss";

const HowItWorks = ({ items }) => {
  return (
    <>
      <Flex
        className="howitworks"
        alignItems="center"
        flexWrap="wrap"
        frameBorder
      >
        <Box width={[1, 1 / 12]} px={2}>
          <h1 className="step-number">1</h1>
        </Box>
        <Box width={[1, 1 / 3]} px={2}>
          <div className="hiw-card card">
            <div class="card-body">
              <img
                alt=""
                className="howImage"
                src={getImageUrl(items[0].image.path)}
              />
            </div>
          </div>
        </Box>
        <Box width={[1, 1 / 2]}>
          <div className="hiw-card card">
            <div class="card-body">
              <h3 class="step-title">{items[0].title}</h3>
              <p className="step-desc">{items[0].description}</p>
            </div>
          </div>
        </Box>
      </Flex>

      <Flex
        className="howitworks"
        alignItems="center"
        flexWrap="wrap-reverse"
        frameBorder
      >
        <Box width={[1, 1 / 12]} px={2}>
          <h1 className="step-number">2</h1>
        </Box>
        <Box width={[1, 1 / 2]} px={2}>
          <div className="hiw-card card">
            <div class="card-body">
              <h3 class="step-title">{items[1].title}</h3>
              <p className="step-desc">{items[1].description}</p>
            </div>
          </div>
        </Box>
        <Box width={[1, 1 / 3]}>
          <div className="hiw-card card">
            <div class="card-body">
              <img
                alt=""
                className="howImage"
                src={getImageUrl(items[1].image.path)}
              />
            </div>
          </div>
        </Box>
      </Flex>
      <Flex
        className="howitworks"
        alignItems="center"
        flexWrap="wrap"
        frameBorder
      >
        <Box width={[1, 1 / 12]} px={2}>
          <h1 className="step-number">3</h1>
        </Box>
        <Box width={[1, 1 / 3]} px={2}>
          <div className="hiw-card card">
            <div class="card-body">
              <img
                alt=""
                className="howImage"
                src={getImageUrl(items[2].image.path)}
              />
            </div>
          </div>
        </Box>
        <Box width={[1, 1 / 2]}>
          <div className="hiw-card card">
            <div class="card-body">
              <h3 class="step-title">{items[2].title}</h3>
              <p className="step-desc">{items[2].description}</p>
            </div>
          </div>
        </Box>
      </Flex>
      <Flex
        className="howitworks"
        alignItems="center"
        flexWrap="wrap-reverse"
        frameBorder
      >
        <Box width={[1, 1 / 12]} px={2}>
          <h1 className="step-number">4</h1>
        </Box>
        <Box width={[1, 1 / 2]} px={2}>
          <div className="hiw-card card">
            <div class="card-body">
              <h3 class="step-title">{items[3].title}</h3>
              <p className="step-desc">{items[3].description}</p>
            </div>
          </div>
        </Box>
        <Box width={[1, 1 / 3]}>
          <div className="hiw-card card">
            <div class="card-body">
              <img
                alt=""
                className="howImage"
                src={getImageUrl(items[3].image.path)}
              />
            </div>
          </div>
        </Box>
      </Flex>
    </>
  );
};

export default HowItWorks;

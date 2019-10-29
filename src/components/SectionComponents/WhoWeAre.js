import React from "react";
import { Flex, Box } from "@rebass/grid/emotion";
import { getImageUrl } from "takeshape-routing";

const WhoWeAre = ({ items }) => {
  return (
    <Flex className="homeSection whoweare" alignItems="center" flexWrap="wrap">
      {items.map(wwa => (
        <Box width={[1, 1 / 3]} px={2}>
          <div class="wwa-card card">
            <div class="card-body">
              <img
                alt=""
                className="placeholderImg"
                src={getImageUrl(wwa.image.path)}
              />
              <h5 class="card-title wwa-header">{wwa.title}</h5>
              <p class="wwa-text ">{wwa.description}</p>
            </div>
          </div>
        </Box>
      ))}
    </Flex>
  );
};

export default WhoWeAre;

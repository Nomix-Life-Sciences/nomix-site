import React from "react";
import { Flex, Box } from "@rebass/grid/emotion";
import { getImageUrl } from "takeshape-routing";

const Partners = ({ items }) => {
  return (
    <Flex
      className="homeSection howitworks"
      alignItems="center"
      flexWrap="wrap"
    >
      {items.map(step => (
        <Box width={[1, 1 / 2, 1 / 4]} px={2}>
          <img
            alt=""
            className="partnerImage"
            src={getImageUrl(step.logo.path)}
          />
        </Box>
      ))}
    </Flex>
  );
};

export default Partners;

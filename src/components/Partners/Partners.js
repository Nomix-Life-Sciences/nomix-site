import React from "react";
import { Flex, Box } from "@rebass/grid/emotion";
import { getImageUrl } from "takeshape-routing";
import Container from "react-bootstrap/Container";

const Partners = ({ items }) => {
  return (
    <Container>
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
    </Container>
  );
};

export default Partners;

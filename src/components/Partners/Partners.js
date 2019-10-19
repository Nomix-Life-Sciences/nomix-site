import React from "react";
import { Flex, Box } from "@rebass/grid/emotion";

const Partners = () => {
  return (
    <Flex
      className="homeSection howitworks"
      alignItems="center"
      flexWrap="wrap"
    >
      <Box width={[1, 1 / 4]} px={2}>
        <img
          alt=""
          className="partnerImage"
          src="https://www.axiapayments.com/wp-content/uploads/2014/09/placeholder-square.jpg"
        />
      </Box>
      <Box width={[1, 1 / 4]} px={2}>
        <img
          alt=""
          className="partnerImage"
          src="https://www.axiapayments.com/wp-content/uploads/2014/09/placeholder-square.jpg"
        />
      </Box>
      <Box width={[1, 1 / 4]} px={2}>
        <img
          alt=""
          className="partnerImage"
          src="https://www.axiapayments.com/wp-content/uploads/2014/09/placeholder-square.jpg"
        />
      </Box>
      <Box width={[1, 1 / 4]} px={2}>
        <img
          alt=""
          className="partnerImage"
          src="https://www.axiapayments.com/wp-content/uploads/2014/09/placeholder-square.jpg"
        />
      </Box>
    </Flex>
  );
};

export default Partners;

import React, { Component } from "react";
import { Flex, Box } from "@rebass/grid/emotion";
import { getImageUrl } from "takeshape-routing";

import gql from "graphql-tag";
import { Query } from "react-apollo";

const wwaQuery = gql`
  {
    getWhoWeAre {
      repeater {
        image {
          _id
          caption
          credit
          description
          filename
          mimeType
          path
          sourceUrl
          title
          uploadStatus
        }
        description
        title
      }
    }
  }
`;

export default class WhoWeAre extends Component {
  render() {
    return (
      <Query query={wwaQuery}>
      {({ loading, error, data }) => {
        if (loading) return "";
        if (error) return `Error! ${error.message}`;
        return (
          <Flex
          className="homeSection whoweare"
          alignItems="center"
          flexWrap="wrap"
        >
          {data.getWhoWeAre.repeater.map(wwa => (
          <Box width={[1, 1 / 3]} px={2}>
            <div class="wwa-card card">
              <div class="card-body">
                <img
                  alt=""
                  className="placeholderImg"
                  src={getImageUrl(wwa.image.path)}
                />
                <h5 class="card-title wwa-header">{wwa.title}</h5>
                <p class="wwa-text ">
                  {wwa.description}

                </p>
              </div>
            </div>
          </Box>
                        ))}

        </Flex>
          );
        }}      
      </Query>
    );
  }
}

import React, { Component } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Flex, Box } from "@rebass/grid/emotion";
import "../pages/about.scss";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { getImageUrl } from "takeshape-routing";

const aboutQuery = gql`
  {
    getAboutPage {
      _id
      about {
        aboutDescription
        aboutTitle
      }
      aboutImage {
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
      faq {
        faq
        faqDescription
      }
    }
  }
`;

export default class About extends Component {
  render() {
    return (
      <Query query={aboutQuery}>
        {({ loading, error, data }) => {
          if (loading) return "";
          if (error) return `Error! ${error.message}`;
          return (
            <>
              <Header />
              <div className="about-content container">
                <h1 className="sectionHeader">
                  <span>About Us</span>
                </h1>

                <Flex
                  alignItems="center"
                  flexWrap="wrap"
                  justifyContent="center"
                  frameBorder
                >
                  <Box width={[1, 1 / 2]}>
                    {data.getAboutPage.about.map(about => (
                      <div className="about-sub">
                        <h3>{about.aboutTitle}</h3>
                        <p>{about.aboutDescription}</p>
                      </div>
                    ))}
                  </Box>
                  <Box width={[1, 1 / 2]}>
                      <img className="about-image" src={getImageUrl(data.getAboutPage.aboutImage.path)} />
                  </Box>
                </Flex>

                <h1 className="sectionHeader">
                  <span>FAQ</span>
                </h1>

                <Flex
                  alignItems="center"
                  flexWrap="wrap"
                  justifyContent="center"
                  frameBorder
                >
                  {data.getAboutPage.faq.map(faq => (
                    <Box width={[1, 1 / 2]}>
                      {" "}
                      <div className="faq-sub">
                        <h3>{faq.faq}</h3>
                        <p>{faq.faqDescription}</p>
                      </div>
                    </Box>
                  ))}
                </Flex>
              </div>
              <Footer />
            </>
          );
        }}
      </Query>
    );
  }
}

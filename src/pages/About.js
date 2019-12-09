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
      <Query query={aboutQuery} className="about-page">
        {({ loading, error, data }) => {
          if (loading) return "";
          if (error) return `Error! ${error.message}`;
          return (
            <>
              <Header />
              <div className="about-content container">
                <div className="header-name">
                <h1 className="about-header sectionHeader">
                  <span >About Us</span>
                </h1>
                </div>

                <Flex
                  alignItems="center"
                  flexWrap="wrap"
                  justifyContent="center"
                  frameBorder
                >
                  <Box width={[1, 1 / 2]}>
                    {data.getAboutPage.about.map(about => (
                      <div className="about-sub">
                        <h3 className="about-header">{about.aboutTitle}</h3>
                        <div className="aboutDescription">
                        <p>{about.aboutDescription}</p>
                        </div>
                      </div>
                    ))}
                  </Box>
                  <Box width={[1, 1 / 2]}>
                    <img
                      className="about-image"
                      src={getImageUrl(data.getAboutPage.aboutImage.path)}
                    />
                  </Box>
                </Flex>

                <div className="FAQ-title">
                  <h1 className="sectionHeader about-header">
                    <span>FAQ</span>
                  </h1>
                </div>

                <Flex
                  alignItems="flex-start"
                  flexWrap="wrap"
                  justifyContent="center"
                  frameBorder
                >
                  {data.getAboutPage.faq.map(faq => (
                    <Box my={0} width={[1, 1 / 2]}>
                      {" "}
                      <div className="faq-sub">
                        <h2 className="about-header">{faq.faq}</h2>
                        <div className="faqText">
                        <Flex className="description" justifyContent="top" alignItems="flex-start">
                        <p>{faq.faqDescription}</p>
                        </Flex>
                      </div>
                      </div>
                    </Box>
                  ))}
                </Flex>
                <div className="contact-number">
                <p><mark class="blue">Still have more questions?</mark>
                <mark class="gray">Contact support at</mark> 
                <mark class="blue">1234567890</mark></p>
                </div>
                </div>
              <Footer />
            </>
          );
        }}
      </Query>
    );
  }
}

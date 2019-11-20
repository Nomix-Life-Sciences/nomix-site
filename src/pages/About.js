import React, { Component } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import { Flex, Box } from "@rebass/grid/emotion";
import "../pages/about.scss";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const aboutQuery = gql`
  {
    getAboutPage {
      _id
      about {
        aboutDescription
        aboutTitle
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
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAMFBMVEXd3d21tbWysrLX19fAwMDc3Ny8vLzOzs7Kysq3t7fg4ODV1dXBwcHZ2dnFxcW6urqvWIoeAAAD1UlEQVR4nO2da5uqIBRGVS4mRv3/f3sEm4kSqzNuYEPvmm/TM46r/XLRJLoOAAAAAAAAAAAAAAAAAAAAAPAlqONHsASnkQ5BoCgFwYmkQkiKo0hhjr9PaaAR7DptDc2BqLFEgmyDSlVBB0tFugo6lrZIebjjKGM17RG5VdFQRnQdVZkp0gqucFIkrqBDLT+Sz+xGyDTdgutuWIz9KSK6wiSoVqZ5n91RNQfFdBV0MKhiSkE/aBTubgztTGaLMpriiuzPGKFTT65U0aAmGAdj6HJBpZ6L7lAuqHkq6CgU1HyCRRRVroiu/6zE9WLOCjqyj4u5BbNP4HILsrjCAAAAAAAAAAAAAAC7GBpKa+wznuVZHucyM3W009DTMGS/N/oRaiLyc4pnjlU8UVXQK5b/NH2Dkf7MKHDHGfkV0Wh3YrMVR7EuDMOptM+W1ZDgdr8ZWzfsYFgKGH5OM4a78882DI24aH0eo6+1YXj2E6BhmiOvNWGof2Z4Q0SxAUNzCaaw279owNAGghGVBgzH8Cpk2vSo9Rs+hLQfYMgGpDTgoae5bF5uwPA23q+G2ycAazOMOv/etBoiE7faDLvYY5r2eqviGFliXJuh6LctbWGU03S9RB9SrczQLr/UsewuXWgTV09iDWPkmWm1+5RqVYbit0P5j9ufNRnaYNj7RNH4dlmRoejvDNf3Q6U5ade11mMYCjrefWam5CArMlRBRD9qjGZepgE1GW4qGJ+D3vEfXdVkGBF0I+PeOhS13rmpyDAquDBFG6NPaF2Ge4LxxmhcQqeqDPcFNyOj8n3oz4u1GG560afG+DAymjl4rRbDl4KOoDGah4//KzFUbw3vjTFIaFOGP43xIaFtGU7D1T4ntC1Dx9wtCX16yqgtw2e7Bg0jwLAoMIQhDMsDQxjCsDwwhGFVhtOf8V9pyd/w6LfXVGB4EBiW4lvWW8yHl8wIe+qZGpKte+rdLRyOhoRr1yaWa9fo1h8ux+G5/rD9NaQLJ4pVwIzXAX/BUm4AAAAAAAAAAAAAhsS+0aKl/9eJRHuf7aEyb/xi5vwbamRVzLSx1APr/ouZgmNEvl17QrTNZFiignn3Qk29e90LZJYqCl1sm26VZYeiIhG9k34rrYIR7XxjTL1zX6ptaj/HpO1uCkd0JWVQC42DIX5H22RBZVHBLmFQuQj6vVBTBLVsL/pEiqCW70XvqBRBZRNRxzpHJX3Hy0y2X0OryE+QOKj8BD10VWTVi4ZQKTKtoIMmqIwFaRTZRvQ2aBAM/bx3xj1+drz9uJ8eAAAAAAAAAAAAAAAAAAAAAHXxD+30LgghGYFcAAAAAElFTkSuQmCC" />
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

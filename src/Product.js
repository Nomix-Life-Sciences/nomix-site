import React, { Component } from "react";
import shop from "./ShopifyClient";
import { ApolloProvider } from "react-apollo";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./Product.scss";

const productQuery = gql`
  {
    shop {
      name
      products(first: 1) {
        edges {
          node {
            id
            title
            options {
              id
              name
              values
            }
            variants(first: 250) {
              pageInfo {
                hasNextPage
                hasPreviousPage
              }
              edges {
                node {
                  id
                  title
                  selectedOptions {
                    name
                    value
                  }
                  image {
                    src
                  }
                  price
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default class Product extends Component {
  render() {
    return (
      <>
        <Header />
        <Query client={shop} query={productQuery}>
          {({ loading, error, data }) => {
            if (loading) return "";
            if (error) return `Error! ${error.message}`;
            return (
              <div className="container shop">
                <div className="card">
                  {/* <h1>{data.shop.products.edges[0].node.title}</h1>
                  <img alt="" src={data.shop.products.edges[0].image.src} /> */}
                </div>
              </div>
            );
          }}
        </Query>
        <Footer />
      </>
    );
  }
}

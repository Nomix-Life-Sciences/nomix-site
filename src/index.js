import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { HttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";

const cache = new InMemoryCache();



const TAKESHAPE_BASE_URL =
  "https://api.takeshape.io/project/1571a551-c3a7-4818-83f2-777769cf4339/graphql";
const httpLink = new HttpLink({
  uri: TAKESHAPE_BASE_URL,
  headers: {
    authorization: `Bearer 833c58badcfa45b9a5deaf7066be1a41`
  }
});

const client = new ApolloClient({
  link: httpLink,
  cache
});

ReactDOM.render(
  <ApolloProvider client={client}>

    {
      
    }
    <App />
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

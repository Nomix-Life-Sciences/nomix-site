import React from "react";
import ReactDOM from "react-dom";
import Shop from "./Shop";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";

import * as serviceWorker from "./serviceWorker";

import dotenv from "dotenv";
import "bootstrap/dist/css/bootstrap.min.css";

import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import App from "./App";
import "./index.scss";

import About from "../src/pages/About";

import { ApolloProvider } from "react-apollo";

dotenv.config();

const httpLink = createHttpLink({
  uri: "https://nomixlifesciences.myshopify.com/api/graphql"
});

const middlewareLink = setContext(() => ({
  headers: {
    "X-Shopify-Storefront-Access-Token":
      process.env.REACT_APP_SHOPIFY_STOREFRONT
  }
}));

const cache = new InMemoryCache();

const TAKESHAPE_BASE_URL =
  "https://api.takeshape.io/project/1571a551-c3a7-4818-83f2-777769cf4339/graphql";

const link1 = new HttpLink({
  uri: TAKESHAPE_BASE_URL,
  headers: {
    authorization: `Bearer ${process.env.REACT_APP_TAKESHAPE_API}`
  }
});

const link2 = new HttpLink({
  uri: "https://nomixlifesciences.myshopify.com/api/graphql",
  headers: {
    "X-Shopify-Storefront-Access-Token":
      process.env.REACT_APP_SHOPIFY_STOREFRONT
  }
});

const client2 = new ApolloClient({
  link: link1,
  cache
});

const client = new ApolloClient({
  link: middlewareLink.concat(httpLink),
  cache: new InMemoryCache()
});

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/">
        <ApolloProvider client={client2}>
          <App />
        </ApolloProvider>{" "}
      </Route>
      <Route exact path="/order">
        <ApolloProvider client={client}>
          <Shop />
        </ApolloProvider>
      </Route>

      <Route exact path="/about">
        <ApolloProvider client={client2}>
          <About />
        </ApolloProvider>
      </Route>
    </Switch>
  </Router>,
  document.getElementById("root")
);

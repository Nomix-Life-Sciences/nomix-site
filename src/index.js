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
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Product from "../src/Product";

const cache = new InMemoryCache();

const TAKESHAPE_BASE_URL =
  "https://api.takeshape.io/project/1571a551-c3a7-4818-83f2-777769cf4339/graphql";

const link1 = new HttpLink({
  uri: TAKESHAPE_BASE_URL,
  headers: {
    authorization: `Bearer 833c58badcfa45b9a5deaf7066be1a41`
  }
});

const link2 = new HttpLink({
  uri: "https://nomix-development.myshopify.com/api/graphql",
  headers: {
    "X-Shopify-Storefront-Access-Token": "11611c8d5302c5bb5bdca8bba5a8551d"
  }
});

const client = new ApolloClient({
  link: link1,
  cache
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Router>
      <Switch>
        <Route exact path="/">
          <App />
        </Route>
        <Route exact path="/order">
          <Product />
        </Route>
      </Switch>
    </Router>
  </ApolloProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

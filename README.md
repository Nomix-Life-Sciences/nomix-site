# nomix-site

<img src="https://i.imgur.com/Yc9KvK0.png" alt="Nomix Life Sciences Logo" width="400"/>

Marketing site for Nomix Life Sciences. Made with ❤️ by Scout.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Running site locally

In order to run the site locally, clone the repository. In the project directory, run `npm install` followed by `npm start`. This will start up the project on localhost:3000.

When you make changes, the site will live-update.

## Editing content

Most of the site's content is stored in the [Takeshape headless CMS](http://takeshape.io) with e-commerce information stored in Shopify. Data is being queried using the [Shopify Storefront API](https://help.shopify.com/en/api/storefront-api). Both the Shopify and Takeshape data is being queried using the [Apollo GraphQL Router](https://www.apollographql.com/).

## Environment variables

There are two environment varibles, `REACT_APP_SHOPIFY_STOREFRONT` and `REACT_APP_TAKESHAPE_API`. To run the app, you must have a `.env` file in the root directory of the app containing the values of these variables.

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const HASURA_SECRET =
  "w39uMeRGp6YDm5AOUZk02c9iIULiH5BUEeru6SfI4Q2y6q86ZUb3uyHZX3RwTUHC";

const client = new ApolloClient({
  uri: "https://graphql-heroku-api.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret": HASURA_SECRET,
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

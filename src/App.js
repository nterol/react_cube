import React, { Component } from "react";
import styled from "styled-components";
import { Scene } from "./components/Scene";
import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import { onError } from "apollo-link-error";
import { ApolloLink } from "apollo-link";
import { ApolloProvider } from "react-apollo";

import { BubblyContainer, BubblyTitle } from "./components/Styles";

const client = new ApolloClient({
  link: ApolloLink.from([
    onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors)
        graphQLErrors.map(({ message, locations, path }) =>
          console.log(
            `[GraphQL error: Message : ${message}, Location: ${locations}, Path: ${path}`
          )
        );
      if (networkError) console.log(`[Network error]: ${networkError}`);
    }),
    new HttpLink({
      uri: "https://bubbly-server.herokuapp.com/",
      credentials: "same-origin"
    })
  ]),
  cache: new InMemoryCache()
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <BubblyContainer>
          <BubblyTitle>Bubbly for slack</BubblyTitle>
        </BubblyContainer>
        <Scene label="test" />
      </ApolloProvider>
    );
  }
}

export default App;

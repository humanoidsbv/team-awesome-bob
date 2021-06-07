/* eslint-disable react/jsx-props-no-spreading */
import React from "react";

import { ApolloProvider } from "@apollo/client";
import type { AppProps } from "next/app";
import client from "../apollo-client";

import GlobalStyle from "../src/styling/global";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ApolloProvider>
  );
};
export default App;

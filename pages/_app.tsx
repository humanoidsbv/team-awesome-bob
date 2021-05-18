/* eslint-disable react/jsx-props-no-spreading */
import React from "react";

import type { AppProps } from "next/app";
import { StoreProvider } from "../src/stores/ContextLoader";
import GlobalStyle from "../src/styling/global";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <StoreProvider>
      <GlobalStyle />
      <Component {...pageProps} />
    </StoreProvider>
  );
};
export default App;

/* eslint-disable react/jsx-props-no-spreading */
import React from "react";

import type { AppProps } from "next/app";
import { StoreProvider } from "../src/stores/ContextLoader";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <StoreProvider>
      <Component {...pageProps} />
    </StoreProvider>
  );
};
export default App;

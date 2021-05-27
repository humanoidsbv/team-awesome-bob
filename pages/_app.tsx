/* eslint-disable react/jsx-props-no-spreading */
import React from "react";

import type { AppProps } from "next/app";
import GlobalStyle from "../src/styling/global";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
};
export default App;

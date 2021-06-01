import React from "react";

import { ThemeProvider } from "styled-components";
import { theme } from "../src/styling/theme";
import GlobalStyle from "../src/styling/global";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <>
      <GlobalStyle></GlobalStyle>
      <ThemeProvider theme={theme}>{Story()}</ThemeProvider>
    </>
  ),
];

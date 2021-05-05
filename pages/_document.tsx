/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-filename-extension */
import React from "react";
import Document from "next/document";
import { ThemeProvider, ServerStyleSheet } from "styled-components";
import GlobalStyle from "../src/styling/global";
import { theme } from "../src/styling/theme";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(
              <>
                <GlobalStyle />
                <ThemeProvider theme={theme}>
                  <App {...props} />
                </ThemeProvider>
              </>,
            ),
        });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}

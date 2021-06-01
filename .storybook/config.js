import { addDecorator } from "@storybook/react";

addDecorator((s) => (
  <>
    <GlobalStyle />
    {s()}
  </>
));

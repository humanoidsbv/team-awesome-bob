/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";

import * as Styled from "./NewEntryInput.styled";

function NewEntryInput({ children }: any) {
  return <Styled.NewEntryInput>{children}</Styled.NewEntryInput>;
}

export default NewEntryInput;

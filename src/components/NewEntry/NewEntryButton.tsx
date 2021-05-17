/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";

import * as Styled from "./NewEntryButton.styled";

interface NewEntryButtonProps {
  children;
  isValid: boolean;
}
function NewEntryButton({ children, isValid }: NewEntryButtonProps) {
  return <Styled.NewEntryButton disabled={!isValid}>{children}</Styled.NewEntryButton>;
}

export default NewEntryButton;

/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";

import * as Styled from "./NewEntryButton.styled";

interface NewEntryButtonProps {
  children: any;
}
function NewEntryButton({ children }: NewEntryButtonProps) {
  return <Styled.NewEntryButton>{children}</Styled.NewEntryButton>;
}

export default NewEntryButton;

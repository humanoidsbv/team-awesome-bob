/* eslint-disable jsx-a11y/label-has-associated-control */
import React from "react";

import * as Styled from "./NewEntryButton.styled";

interface NewEntryButtonProps {
  children: React.ReactNode;
}
function NewEntryButton({ children }: NewEntryButtonProps) {
  return <Styled.NewEntryButton>{children}</Styled.NewEntryButton>;
}

export default NewEntryButton;

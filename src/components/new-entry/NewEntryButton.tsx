import React from "react";

import * as Styled from "./NewEntryButton.styled";

interface NewEntryButtonProps {
  children;
  isValid: boolean;
  isVisible: boolean;
}
function NewEntryButton({ children, isValid, isVisible }: NewEntryButtonProps) {
  return (
    <Styled.NewEntryButton isVisible={isVisible} disabled={!isValid}>
      {children}
    </Styled.NewEntryButton>
  );
}

export default NewEntryButton;

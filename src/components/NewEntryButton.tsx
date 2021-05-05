import React from "react";

import * as Styled from "./NewEntryButton.styled";

function NewEntryButton() {
  return (
    <Styled.NewEntryButton>
      <img src="assets/plus-icon.svg" alt="" />
      New Time Entry
    </Styled.NewEntryButton>
  );
}

export default NewEntryButton;

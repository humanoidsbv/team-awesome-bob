import React from "react";
import { NewEntry } from "./NewEntry.styled";

import * as Styled from "./NewEntryButton.styled";

function NewEntryButton() {
  return (
    <>
      <Styled.NewEntryButton>
        <img src="assets/plus-icon.svg" alt="" />
        New Time Entry
      </Styled.NewEntryButton>
      <NewEntry>
        <input type="text" />
        <input type="text" />
        <input type="text" />
      </NewEntry>
    </>
  );
}

export default NewEntryButton;

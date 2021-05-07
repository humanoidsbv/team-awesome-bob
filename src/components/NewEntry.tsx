/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";

import * as Styled from "./NewEntry.styled";

interface NewEntryProps {
  children: any;
}

function NewEntry({ children }: NewEntryProps) {
  <Styled.NewEntry> {children} </Styled.NewEntry>;
}

export default NewEntry;

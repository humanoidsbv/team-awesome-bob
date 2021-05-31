import React from "react";

import * as Styled from "./EntryButton.styled";

interface EntryButtonProps {
  label: string;
  type?: "Add" | "Cancel";
  width?: number;
}
function EntryButton({ label, type = "Add", width = 300 }: EntryButtonProps) {
  return (
    <>
      {type === "Add" ? (
        <Styled.Add width={width}>{label}</Styled.Add>
      ) : (
        <Styled.Cancel width={width}>{label}</Styled.Cancel>
      )}
    </>
  );
}

export default EntryButton;

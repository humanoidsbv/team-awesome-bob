import React from "react";

import * as Styled from "./EntryButton.styled";

interface EntryButtonProps {
  label: string;
  type?: "AddButton" | "CancelButton";
  width?: number;
}
function EntryButton({ label, type = "AddButton", width = 300 }: EntryButtonProps) {
  return (
    <>
      {type === "AddButton" ? (
        <Styled.AddButton width={width}>{label}</Styled.AddButton>
      ) : (
        <Styled.CancelButton width={width}>{label}</Styled.CancelButton>
      )}
    </>
  );
}

export default EntryButton;

import React from "react";

import * as Styled from "./EntryButton.styled";

interface EntryButtonProps {
  handleClick: Function;
  isVisible?: boolean;
  label: string;
  type?: "AddButton" | "CancelButton";
  width?: number;
}
function EntryButton({
  handleClick,
  isVisible = true,
  label,
  type = "AddButton",
  width = 300,
}: EntryButtonProps) {
  return (
    <>
      {type === "AddButton" ? (
        <Styled.AddButton onClick={handleClick} isVisible={isVisible} width={width}>
          {label}
        </Styled.AddButton>
      ) : (
        <Styled.CancelButton onClick={handleClick} isVisible={isVisible} width={width}>
          {label}
        </Styled.CancelButton>
      )}
    </>
  );
}

export default EntryButton;

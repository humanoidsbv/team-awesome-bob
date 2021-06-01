import React from "react";

import * as Styled from "./EntryButton.styled";

interface EntryButtonProps {
  label: string;
  type?: "Primary" | "Secondary";
}
function EntryButton({ label, type = "Primary" }: EntryButtonProps) {
  return (
    <>
      {type === "Primary" ? (
        <Styled.Primary>{label}</Styled.Primary>
      ) : (
        <Styled.Secondary>{label}</Styled.Secondary>
      )}
    </>
  );
}

export default EntryButton;

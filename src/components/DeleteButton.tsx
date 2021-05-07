import React from "react";
import * as Styled from "./DeleteButton.styled";

interface DeleteButtonProps {
  deleteTimeEntry: Function;
  id: number;
}

function DeleteButton({ id, deleteTimeEntry }: DeleteButtonProps) {
  return (
    <Styled.DeleteButton onClick={() => deleteTimeEntry(id)} id={id}>
      delete
    </Styled.DeleteButton>
  );
}

export default DeleteButton;

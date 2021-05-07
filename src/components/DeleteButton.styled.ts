import styled from "styled-components";

export const DeleteButton = styled.button`
  align-self: flex-start;
  background-color: transparent;
  border-color: brown;
  border-radius: 5px;
  border-style: solid;
  border-width: 1px;
  color: brown;
  font-size: 10px;
  margin-left: 10px;
  margin: 0;

  :hover {
    background-color: rgba(255, 0, 0, 0.2);
  }

  :focus {
    background-color: transparent;
    border-color: black;
    border-radius: 5px;
    border-width: 1px;
    color: black;
    outline: 0;
  }
`;

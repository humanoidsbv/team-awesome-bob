import styled from "styled-components";

export const DeleteButton = styled.button`
  font-size: 10px;
  color: brown;
  margin-left: 10px;
  border-color: brown;
  border-width: 1px;
  border-radius: 5px;
  border-style: solid;
  background-color: transparent;
  align-self: flex-start;
  margin: 0;

  :hover {
    background-color: rgba(255, 0, 0, 0.2);
  }
  :focus {
    background-color: transparent;
    outline: 0;
    border-width: 1px;
    border-radius: 5px;
    border-color: black;
    color: black;
  }
`;

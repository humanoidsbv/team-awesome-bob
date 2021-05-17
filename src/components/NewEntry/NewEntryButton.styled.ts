import styled from "styled-components";

export const NewEntryButton = styled.button`
  background-color: #39b54a;
  border: solid 1px #249533;
  outline: 0;
  border-radius: 4px;
  color: white;
  font-family: Proxima Nova;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  height: 36px;
  margin-left: 5%;
  margin-right: auto;
  margin-top: 5px;
  text-align: center;
  width: 90%;

  > img {
    opacity: 0.8;
    margin-right: 10px;
    margin-left: -10px;
  }

  :focus {
    border: solid 1px rgba(0, 0, 0, 0.5);
  }
  :disabled {
    background-color: grey;
    border: solid 1px grey;
  }
`;

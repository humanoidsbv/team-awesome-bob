import styled from "styled-components";

export const NewEntryButton = styled.button`
  background-image: linear-gradient(to bottom, #39b54a, #34aa44 98%);
  border-radius: 4px;
  border: solid 1px #249533;
  color: white;
  font-family: Proxima Nova;
  text-align: center;
  font-size: 14px;
  font-weight: 500;
  height: 36px;
  margin-left: 5vw;
  margin-right: auto;
  margin-top: 5px;
  text-align: center;
  width: 90%;

  > img {
    opacity: 0.8;
    margin-right: 10px;
    margin-left: -10px;
  }

  :first-of-type {
    margin-top: 75px;
  }
  :last-of-type {
    margin-bottom: 20px;
  }

  :focus {
    opacity: 0.8;
  }
`;

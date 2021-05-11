import styled from "styled-components";

export const NewEntryInput = styled.div`
  width: 100%;
  margin-left: 5%;

  label {
    display: inline-block;
    font-size: 12px;
    font-variant-caps: all-small-caps;
    text-align: left;
    width: 100%;
    margin-top: 10px;

    input {
      display: block;
      background-color: rgba(255, 255, 255, 0.6);
      border: 0;
      font-family: Proxima Nova;
      color: gray;
      height: 30px;
      margin: 10px 0;
      padding: 0 10px;
      width: 90%;
    }
  }
`;

import styled from "styled-components";

export const InputField = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 0.9rem;
  text-align: left;
  text-transform: uppercase;
  margin: 0;
  margin-left: 15px;

  input {
    background-image: linear-gradient(to bottom, white, #f2f4f7);
    border-color: rgb(200, 200, 200);
    border-radius: 4px;
    border: solid 1px rgba(200, 200, 200, 1);
    color: black;
    display: block;
    font-family: Proxima Nova;
    font-size: 14px;
    height: 100%;
    min-height: 36px;
    opacity: 1;
    outline: none;
    text-align: left;
    width: 200px;
    margin-left: 15px;
  }

  > div {
    display: flex;
    justify-content: center;
  }

  img {
    height: 36px;
    width: 36px;
    border-radius: 4px 0px 0px 4px;
    border-right: 0;
    margin-top: 10px;
  }

  input {
    height: 36px;
    padding-left: 10px;
    border: solid 1px rgba(200, 200, 200, 1);
  }

  input:focus {
    border-radius: 4px;
    border: solid 1px;
    outline: none;
    border-color: rgba(0, 0, 0, 0.5);
  }

  @media screen and (min-width: ${({ theme }) => theme.desktopBreakpoint}) {
    text-transform: none;
    input {
      background-image: none;
      background-color: transparent;
    }
  }
`;

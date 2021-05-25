import styled from "styled-components";

export const InputField = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 12px;
  text-align: left;
  text-transform: uppercase;

  input {
    background-image: linear-gradient(to bottom, white, #f2f4f7);
    border-color: rgb(200, 200, 200);
    border-radius: 4px;
    border: solid 1px ${(props) => (props.isValid ? `rgba(200, 200, 200, 1)` : `red`)};
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

    ${(props) => !props.hasLabel && "margin-top: 0;"};
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
    ${(props) => !props.hasLabel && "margin-top: 0;"};
  }

  input {
    height: 36px;
    padding-left: 10px;
    border: solid 1px ${(props) => (props.isValid ? `rgb(200, 200, 200)` : `red`)};
    ${(props) => props.socialIcon && "border-left: 0; border-radius: 0 4px 4px 0;"};
  }

  input:focus {
    border-radius: 4px;
    border: solid 1px;
    ${(props) => props.socialIcon && "border-left: 0; border-radius: 0 4px 4px 0;"};
    outline: none;
    border-color: ${(props) => (props.isValid ? `rgba(0, 0, 0, 0.5)` : `red`)};
  }

  @media screen and (min-width: ${({ theme }) => theme.desktopBreakpoint}) {
    text-transform: none;
    input {
      background-image: none;
      background-color: transparent;
    }
  }
`;

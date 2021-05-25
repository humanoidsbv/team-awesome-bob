import styled from "styled-components";

export const Header = styled.header`
  align-content: center;
  background-color: #4f88ef;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
  display: flex;
  height: 50px;
  justify-content: center;
  left: 0;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 2;

  > h1 {
    @media screen and (min-width: ${({ theme }) => theme.desktopBreakpoint}) {
      display: none;
    }
    color: white;
    font-family: Bello Script, sans-serif;
    font-size: 26px;
    font-weight: 400;
    line-height: 20px;
  }

  > button {
    @media screen and (min-width: ${({ theme }) => theme.desktopBreakpoint}) {
      display: none;
    }
    align-items: center;
    background: 0;
    outline: 0;
    border: 0;
    display: flex;
    height: inherit;
    position: absolute;
    right: 5%;
    top: 0;
    img {
      height: 40%;
      transform: rotate(${(props) => (props.isOpen ? "45deg" : "0")});
      transition: transform 0.2s ${(props) => (props.isOpen ? "ease-in" : "ease-out")};
    }
  }
`;

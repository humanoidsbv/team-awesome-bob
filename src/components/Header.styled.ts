import styled from "styled-components";

export const Header = styled.header`
  align-content: center;
  background-color: #4f88ef;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);
  display: flex;
  height: 50px;
  justify-content: center;
  left: 0;
  margin-bottom: 20px;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 2;

  > h1 {
    font-family: Bello Script, sans-serif;
    font-weight: 400;
    font-size: 26px;
    line-height: 20px;
    color: white;
  }

  > div {
    position: absolute;
    right: 5%;
    top: 0;
    height: inherit;
    align-items: center;
    display: flex;
  }

  img {
    transform: rotate(${(props) => (props.isOpen ? "45deg" : "0")});
    height: 40%;
    transition: transform 0.2s ${(props) => (props.isOpen ? "ease-in" : "ease-out")};
  }
`;

import styled from "styled-components";

export const Header = styled.header`
  position: fixed;
  top:0;
  left:0;
  background-color: #4f88ef;
  display: flex;
  justify-content: center;
  align-content: center;
  height: 50px;
  width: 100vw;
  margin-bottom: 20px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.05);

  > h1 {
    font-family: Bello-Script, sans-serif;
    font-weight: 400;
    font-size: 26px;
    line-height: 20px;
    color: white;
  }

  > img { 
    margin-top: 10px;
    margin-bottom: 10px;
    transform: rotate(45deg);
    height: auto;
  }

`;

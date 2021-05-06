import styled from "styled-components";

export const MenuNavigation = styled.nav`
  align-items: center;
  background-image: linear-gradient(
    to bottom,
    ${(props) => props.theme.teamAwesomeBlue},
    white 300%
  );
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: flex-start;
  margin: auto;
  position: fixed;
  transform: ${(props) => (props.isOpen ? "translateY(0%)" : "translateY(-100%)")};
  transition: transform ${(props) => (props.isOpen ? "0.2s ease-out" : "0.1s ease-in")};
  width: 100vw;
  z-index: 1;

  > p {
    color: white;
    font-size: 24px;
    margin: 15px;
    padding: 5px;
    text-align: center;
    width: 50vw;
    :first-child {
      margin-top: 100px;
    }
    :hover {
      background-color: rgba(15, 100, 200, 0.4);
      border-radius: 4px;
    }
  }
`;

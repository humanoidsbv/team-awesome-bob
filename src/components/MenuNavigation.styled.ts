import styled from "styled-components";

export const MenuNavigation = styled.nav`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: flex-start;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 1;

  @media screen and (max-width: 800px) {
    background-image: linear-gradient(
      to bottom,
      ${(props) => props.theme.teamAwesomeBlue},
      white 300%
    );
    transform: ${(props) => (props.isOpen ? "translateY(0%)" : "translateY(-100%)")};
    transition: transform ${(props) => (props.isOpen ? "0.2s ease-out" : "0.1s ease-in")};
  }

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

  @media screen and (min-width: 800px) {
    background-image: 0;
    flex-direction: row;
    height: 50px;
    justify-content: flex-start;
    width: auto;
    z-index: 10;

    > p {
      font-size: 0.8rem;
      margin: 15px !important;
      min-width: 100px;
      width: 100%;

      :first-child {
        margin: 0;
      }
    }
  }
`;

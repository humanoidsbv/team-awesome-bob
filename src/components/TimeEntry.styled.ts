import styled from "styled-components";

export const TimeEntry = styled.div`
  align-items: center;
  background-color: white;
  border-color: ${({ theme }) => theme.borderGrey};
  border-left-color: #4f88ef;
  border-style: solid;
  border-width: 1px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding: 10px 20px;
  transition: background-color 0.2s ease-in;

  border-left-width: 4px;
  border-bottom-width: 0;

  max-width: 90%;

  @media screen and (min-width: 480px) {
    width: clamp(450px, 90%, ${({ theme }) => theme.desktopBreakpoint});
  }

  margin-bottom: ${(props) => (props.lastChild ? "15px" : "")};

  border-bottom-left-radius: ${(props) => (props.lastChild ? "5px" : "0")};
  border-bottom-right-radius: ${(props) => (props.lastChild ? "5px" : "0")};
  border-top-left-radius: ${(props) => (props.firstChild ? "5px" : "0")};
  border-top-right-radius: ${(props) => (props.firstChild ? "5px" : "0")};

  border-bottom-width: ${(props) => (props.lastChild ? "1px" : "")};

  > p {
    background-color: rgba(100, 100, 100, 0.2);
  }

  div {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;

    p {
      margin: 10% 0;

      :last-child {
        font-size: 14px;
        opacity: 0.6;
        text-align: right;
      }
    }
  }

  :hover {
    background-color: #4f88ef10;
  }
`;

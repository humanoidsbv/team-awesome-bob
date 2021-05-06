import styled from "styled-components";

export const TimeEntry = styled.div`
  align-items: center;
  background-color: white;
  border-color: rgba(222, 222, 222, 0.3);
  border-left-color: #4f88ef;
  border-style: solid;
  border-width: 1px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  max-width: 90%;
  padding: 10px 4%;
  transition: background-color 0.2s ease-in;
  border-left-width: 4px;
  border-bottom-width: 0;

  margin-bottom: ${(props) => (props.lastChild ? "15px" : "")};

  border-top-left-radius: ${(props) => (props.firstChild ? "5px" : "")};
  border-top-right-radius: ${(props) => (props.firstChild ? "5px" : "")};
  border-bottom-left-radius: ${(props) => (props.lastChild ? "5px" : "")};
  border-bottom-right-radius: ${(props) => (props.lastChild ? "5px" : "")};

  border-bottom-width: ${(props) => (props.lastChild ? "1px" : "")};

  > p {
    ${(props) => (props.client === "Team Awesome" ? "color: red;" : "color: black;")};
  }

  div {
    display: flex;
    flex-flow: column wrap;
    justify-content: center;

    p {
      margin: 10% 0;
      text-align: right;

      :last-child {
        font-size: 14px;
        opacity: 0.6;
      }
    }
  }

  :hover {
    background-color: #4f88ef10;
  }
`;

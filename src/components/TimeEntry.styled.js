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
  border-left-width: 4px;
  transition: background-color 0.2s ease-in;
  border-bottom-width: 0;

  :hover {
    background-color: #4f88ef20;
  }

  ${(props) =>
    props.firstChild
      ? "border-top-left-radius: 5px; border-top-right-radius: 5px;"
      : ""};
  ${(props) =>
    props.lastChild
      ? "margin-bottom: 30px; border-bottom-left-radius: 5px; border-bottom-right-radius: 5px; border-bottom-width: 1px;"
      : ""};
`;
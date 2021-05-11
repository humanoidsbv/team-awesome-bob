import styled from "styled-components";

export const NewEntryForm = styled.form`
  align-items: flex-start;
  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 5px;
  display: ${(props) => (props.isActive ? "flex" : "none")};
  flex-flow: column wrap;
  justify-content: center;
  margin: 0 auto;
  min-height: 100px;
  padding: 20px 0;
  width: 90%;

  > div:last-of-type {
    display: flex;
    justify-content: space-between;
    margin-left: 5%;
    width: 90%;

    > * {
      margin: 0;
      width: 48%;
      input {
        width: 100%;
      }
    }
  }

  button:first-of-type {
    margin-top: 15px;
  }
  button:last-of-type {
    margin-bottom: 0;
  }
`;

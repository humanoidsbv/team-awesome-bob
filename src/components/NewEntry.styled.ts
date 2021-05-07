import styled from "styled-components";

export const NewEntry = styled.form`
  margin: 0 auto;
  width: 90%;
  min-height: 100px;
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  align-items: center;

  background-color: rgba(0, 0, 0, 0.05);
  border-radius: 5px;

  > input {
    width: 20%;
    min-width: 150px;
    margin: 5px;
    :first-of-type {
      padding: 5%;
      background-color: rgba(255, 255, 255, 0.6);
      border: 0;
    }
  }
`;

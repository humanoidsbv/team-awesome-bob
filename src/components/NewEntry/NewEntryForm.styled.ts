import styled from "styled-components";

export const NewEntryForm = styled.form`
  align-items: flex-start;
  background-color: #f5f8fa;
  border-radius: 5px;
  border: solid 2px #f2f4f7;
  display: ${(props) => (props.isActive ? "flex" : "none")};
  margin: 0 auto;
  min-height: 80px;

  > div:last-of-type {
    display: flex;
    justify-content: space-between;
    width: 90%;
    @media screen and (min-width: 1024px) {
      width: 250px;
    }
    margin: 0 auto;
    > * {
      margin: 0;
      width: 48%;
      label {
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 1024px) {
    flex-flow: column wrap;
    margin: 20px auto;
    padding: 20px 0;
    width: 90%;

    * {
      width: 90%;
      margin: 20px auto;
    }
  }

  @media screen and (min-width: 1024px) {
    align-items: center;
    flex-flow: row wrap;
    justify-content: flex-start;
    padding: 10px 20px;
    width: clamp(450px, 90%, 1200px);

    > * {
      margin: 5px;
    }

    > button {
      display: block;
      margin-left: auto;
      margin: 5px;
      padding: 0;
      width: 100px;
    }
  }
`;

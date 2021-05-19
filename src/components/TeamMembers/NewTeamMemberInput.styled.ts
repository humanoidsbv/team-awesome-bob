import styled from "styled-components";

export const NewTeamMemberInput = styled.div`
  width: 100%;
  padding: 10px;
  label {
    color: grey;
    font-size: 12px;
    opacity: 0.8;
    text-align: left;
    text-transform: uppercase;
    width: 90%;

    textarea {
      opacity: 1;
      color: black;
      display: block;
      font-size: 14px;
      text-align: left;

      max-height: 150px;
      resize: none;
      border-color: rgb(200, 200, 200);
      background-image: linear-gradient(to bottom, white, #f2f4f7);
      border-radius: 4px;

      font-family: Proxima Nova;
      width: 100%;

      :focus {
        border-color: grey;
        outline: 0;
      }
    }

    input {
      background-image: linear-gradient(to bottom, white, #f2f4f7);
      border-radius: 4px;
      border: solid 1px ${(props) => (props.isValid ? `rgba(200, 200, 200, 1)` : `red`)};
      display: block;
      font-family: Proxima Nova;
      font-size: 14px;
      height: 36px;
      opacity: 1;
      outline: none;
      width: 100%;
    }

    input:focus {
      border-radius: 4px;
      border: solid 1px ${(props) => (props.isValid ? `rgba(0, 0, 0, 0.5)` : `red`)};
      outline: none;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.desktopBreakPoint}) {
    input {
      margin-top: 10px;
      background-image: 0;
      background-color: transparent;
    }
    textarea {
      margin-top: 10px;
    }
  }
`;

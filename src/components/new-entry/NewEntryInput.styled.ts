import styled from "styled-components";

export const NewEntryInput = styled.div`
  width: 100%;
  margin: 0 auto;

  label {
    color: grey;
    display: block;
    font-size: 12px;
    margin: 0 auto;
    opacity: 0.8;
    text-align: left;
    text-transform: uppercase;
    width: 90%;

    input {
      background-image: linear-gradient(to bottom, white, #f2f4f7);
      border-radius: 4px;
      border: solid 1px ${(props) => (props.isValid ? `rgba(200, 200, 200, 1)` : `red`)};
      display: block;
      font-family: Proxima Nova;
      font-size: 14px;
      height: 36px;
      margin: 15px 0 15px 0;
      opacity: 1;
      outline: none;
      padding: 0 15px;
      width: 100%;

      @media screen and (min-width: ${({ theme }) => theme.desktopBreakpoint}) {
        input[type="date"] {
          width: 120px;
        }
        input[type="text"] {
          width: 200px;
        }
        input[type="time"] {
          width: 80px;
        }
      }
    }
    input:focus {
      border-radius: 4px;
      border: solid 1px ${(props) => (props.isValid ? `rgba(0, 0, 0, 0.5)` : `red`)};
      outline: none;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.desktopBreakpoint}) {
    width: initial;
  }
`;

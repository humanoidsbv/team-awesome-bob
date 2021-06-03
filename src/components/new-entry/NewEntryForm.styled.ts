import styled from "styled-components";

export const NewEntryForm = styled.form`
  background-color: ${({ theme }) => theme.formGrey};
  border-radius: 5px;
  border: solid 2px #f2f4f7;
  display: ${(props) => (props.isActive ? "flex" : "none")};
  margin: 0 auto;
  min-height: 80px;

  flex-flow: column wrap;
  margin: 20px auto;
  padding: 20px 10px;
  width: 90%;

  > button {
    width: 80%;
    margin: 15px auto 5px auto;
  }

  @media screen and (min-width: ${({ theme }) => theme.desktopBreakpoint}) {
    display: flex;
    align-items: center;
    flex-flow: row;
    justify-content: space-around;
    padding: 10px 20px;
    width: clamp(450px, 90%, ${({ theme }) => theme.desktopBreakpoint});
    > * {
      margin-right: 16px;
    }
  }
`;

export const DoubleInput = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  > * {
    width: calc(50% - 8px) !important;
  }
`;

import styled from "styled-components";

export const NewTeamMemberForm = styled.form`
  align-items: flex-start;
  background-color: ${({ theme }) => theme.formGrey};
  border-radius: 5px;
  border: solid 2px #f2f4f7;
  display: ${(props) => (props.isActive ? "flex" : "none")};
  margin: 0 auto;
  min-height: 80px;

  flex-flow: column wrap;
  margin: 20px auto;
  padding: 20px 0;
  width: 90%;

  > button {
    margin: 15px auto;
  }

  @media screen and (min-width: ${({ theme }) => theme.desktopBreakPoint}) {
    display: flex;
    align-items: center;
    flex-flow: row wrap;
    justify-content: flex-start;
    padding: 10px 20px;
    width: clamp(450px, 90%, ${({ theme }) => theme.desktopBreakPoint});

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

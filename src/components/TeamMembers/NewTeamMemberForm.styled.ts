import styled from "styled-components";

export const NewTeamMembersDesktopForm = styled.form`
  width: 100%;
`;

export const NewTeamMemberForm = styled.form`
  background-color: ${({ theme }) => theme.formGrey};
  border-radius: 5px;
  border: solid 2px #f2f4f7;
  display: ${(props) => (props.isActive ? "flex" : "none")};
  margin: 0 auto;
  flex-flow: row wrap;
  margin: 20px auto;

  width: 90%;

  > button {
    margin: 15px auto;
  }

  @media screen and (min-width: ${({ theme }) => theme.desktopBreakPoint}) {
    background-color: transparent;
    display: flex;
    justify-content: flex-start;
    flex-flow: row;
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

export const NewTeamMemberAvatarColumn = styled.div`
  display: none;
  width: 20%;

  @media screen and (min-width: ${({ theme }) => theme.desktopBreakPoint}) {
    display: flex;
  }
`;
export const NewTeamMemberSocialColumn = styled.div`
  width: 100%;
`;
export const NewTeamMemberPersonaliaColumn = styled.div`
  width: 100%;
  textarea {
    align-self: flex-end;
  }
`;
export const NewTeamMemberDoubleFields = styled.div`
  display: flex;
  flex-flow: row;
  width: 100%;
  > div {
    width: 100%;
  }
`;

export const NewTeamMembersDivider = styled.div`
  width: 1px;
  background-color: ${({ theme }) => theme.borderGrey};
  height: inherit;
`;

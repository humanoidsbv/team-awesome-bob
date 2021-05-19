import styled from "styled-components";

export const NewTeamMembersDesktopForm = styled.form`
  display: ${(props) => (props.isActive ? "block" : "none")};
  width: clamp(450px, 90%, ${({ theme }) => theme.desktopBreakpoint});
  margin: 20px auto;
  > button {
    margin: 20px;
  }
`;

export const NewTeamMemberForm = styled.div`
  background-color: ${({ theme }) => theme.formGrey};
  border-radius: 5px;
  border: solid 2px #f2f4f7;
  margin: 0 auto;
  flex-flow: row;
  border-left: solid 4px ${({ theme }) => theme.teamAwesomeBlue};
  width: 100%;

  padding: 10px;

  > button {
    margin: 15px auto;
  }

  @media screen and (min-width: ${({ theme }) => theme.desktopBreakpoint}) {
    background-color: transparent;
    display: flex;
    justify-content: flex-start;
    padding: 10px;
    border-top-left-radius: 0;

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
  flex-direction: column;
  align-items: center;

  padding: 15px;

  button {
    display: inline-block;
    width: 100%;
    margin: 10px;
    background: ${({ theme }) => theme.formGrey};
    padding: 5px;
    border: solid 1px transparent;
    border-radius: 4px;

    :hover {
      border-color: rgba(200, 200, 200);
    }
    :focus {
      border-color: grey;
    }
    :active {
      transform: translateY(1px);
    }
  }

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 100%;
  }

  @media screen and (min-width: ${({ theme }) => theme.desktopBreakpoint}) {
    display: flex;
  }
`;
export const NewTeamMemberPersonaliaColumn = styled.div`
  display: flex;
  flex-flow: column;
  width: 100%;
  > :last-child {
    margin-top: auto;
  }
`;
export const NewTeamMemberDoubleFields = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: row;
  width: 100%;

  > label {
    width: 100%;
  }
`;

export const NewTeamMembersDivider = styled.div`
  width: 1px;
  background-color: ${({ theme }) => theme.borderGrey};
  height: inherit;
`;

export const SocialMedia = styled.div``;

export const Tab = styled.div`
  display: none;
  margin: 0 auto;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  > p {
    background: white;
    border: solid 2px ${({ theme }) => theme.borderGrey};
    border-bottom: 0px;
    border-radius: 4px;
    padding: 10px 30px;
    position: relative;

    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
    margin-bottom: -2px;
    border-left: solid 4px ${({ theme }) => theme.teamAwesomeBlue};
    :last-of-type {
      margin-right: auto;
    }
    :not(:first-of-type) {
      background: ${({ theme }) => theme.borderGrey};
      color: grey;
      border-left: solid 2px ${({ theme }) => theme.borderGrey};
    }
    margin-right: 5px;
  }
  @media screen and (min-width: ${({ theme }) => theme.desktopBreakpoint}) {
    display: flex;
  }
`;

import styled from "styled-components";

export const TeamMember = styled.div`
  align-items: center;
  background-color: white;
  border-color: ${({ theme }) => theme.borderGrey};
  border-left-color: #4f88ef;
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  width: 100%;
  margin: 10px auto;
  border-left-width: 4px;
  min-height: 80px;

  > * {
    width: 100%;
    padding-left: 10px;
  }
`;

export const TeamMemberInformation = styled.div`
  min-height: 82px;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  img {
    object-fit: cover;
    width: 50px;
    height: 50px;
    border-radius: 100vh;
    order: -1;
    align-self: center;
    margin: 0 15px 0 10px;
  }

  button {
    display: block;
    background: 0;
    border: 0;
    height: 10px;
    margin-left: auto;
    outline: 0;
    padding: 0;
    margin-right: 10px;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    ${(props) =>
      props.isCollapsed ? `border-bottom: 6.6px solid grey;` : `border-top: 6.6px solid grey;`}
  }
  div {
    p {
      margin: 5px;
      width: 100%;
    }

    p:last-of-type {
      margin: 5px;
      color: grey;
      font-size: 14px;
    }
  }
`;

export const TeamMemberDetails = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin-top: 10px;
  padding: 10px;
  padding-left: 20px;

  p {
    padding: 3px;
    margin: 0;

    :nth-child(even) {
      font-size: 14px;
      margin-bottom: 10px;
      color: grey;
    }
  }
`;

export const TeamMemberMidHeader = styled.div`
  background-color: ${({ theme }) => theme.formGrey};
  border: solid 1px ${({ theme }) => theme.borderGrey};
  border-left: 0;
  border-right: 0;

  p {
    font-family: Proxima Nova;
    font-size: 0.8rem;
    color: grey;
    padding: 10px;
    padding-left: 20px;
    margin: 0;
  }
`;

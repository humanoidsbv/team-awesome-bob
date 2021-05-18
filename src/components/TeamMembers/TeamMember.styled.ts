import styled from "styled-components";

export const TeamMemberInformation = styled.div`
  width: 100%;
  min-height: 60px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;

  button {
    align-self: flex-end;
    background: 0;
    border: 0;
    height: 10px;
    margin-left: auto;
    outline: 0;
    padding: 0;
    position: absolute;

    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    ${(props) =>
      props.isCollapsed ? `border-bottom: 6.6px solid grey;` : `border-top: 6.6px solid grey;`}
  }

  p {
    margin: 5px;
    width: 100%;
  }

  p:last-of-type {
    margin: 5px;
    color: grey;
    font-size: 0.8rem;
  }
`;

export const TeamMemberDetails = styled.div`
  width: 100%;
  min-height: 60px;
  display: flex;
  flex-flow: column nowrap;
  background-color: pink;
`;

export const TeamMember = styled.div`
  align-items: center;
  background-color: white;
  border-color: rgba(222, 222, 222, 0.3);
  border-left-color: #4f88ef;
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  /* justify-content: space-between; */
  margin: 10px 0;
  padding: 10px;
  width: 100%;

  border-left-width: 4px;
  min-height: 80px;

  > * {
    width: 100%;
  }
`;

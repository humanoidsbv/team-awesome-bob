import styled from "styled-components";

export const TeamMemberList = styled.div`
  display: flex;
  flex-flow: column wrap;
  margin: 0 auto;
  width: clamp(0px, 90%, ${({ theme }) => theme.desktopBreakpoint});
`;

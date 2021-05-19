import styled from "styled-components";

export const DateRegistry = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: clamp(0px, 90%, ${({ theme }) => theme.desktopBreakPoint});
  > p {
    font-size: 14px;
    margin: 10px 0;
    opacity: 0.5;
    padding-top: 20px;
  }
`;

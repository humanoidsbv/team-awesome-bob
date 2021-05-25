import styled from "styled-components";

export const FilterBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-bottom: solid 1px #f2f4f7;
  margin-top: -25px;
  min-height: 75px;
`;

export const FilterBarContent = styled.div`
  /* background-color: pink; */
  display: flex;
  align-items: center;
  width: clamp(0px, 90%, 1200px);
  margin: 0 auto;
`;

export const PageTitle = styled.p``;

export const FilterField = styled.input`
  display: inline-block;
  min-height: 36px;
  margin: 10px;
  width: auto;
`;

export const TeamMemberCount = styled.p`
  font-size: 0.8rem;
  margin-right: auto;
`;

export const FilterDivider = styled.div`
  width: 1px;
  background-color: ${({ theme }) => theme.borderGrey};
  height: 1rem;
  margin: auto 10px;
`;

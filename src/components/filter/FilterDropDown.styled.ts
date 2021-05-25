import styled from "styled-components";

export const FilterDropDown = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: flex-end;
  align-items: center;
  min-width: 300px;
`;

export const Label = styled.label`
  font-size: 0.9rem;
  text-align: right;
  width: 100%;
  min-width: 100px;
`;

export const Select = styled.select`
  width: 100%;
  height: 35px;
  background: white;
  color: gray;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-left: 15px;
`;

export const Option = styled.option`
  color: black;
  background: white !important;
  display: flex;
  white-space: pre;
  min-height: 20px;
  padding: 0px 2px 1px;
`;

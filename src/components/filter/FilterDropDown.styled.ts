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
  padding: 0 5px;
  font-size: 14px;
  border: none;
  margin: 0;
  margin-left: 15px;
  border: solid 1px rgba(200, 200, 200, 1);
  border-radius: 4px;
  :focus {
    border-radius: 4px;
    border: solid 1px;
    outline: none;
    border-color: rgba(0, 0, 0, 0.5);
  }
`;

export const Option = styled.option`
  color: black;
  background: white !important;
  display: flex;
  white-space: pre;
  min-height: 20px;
  padding: 0px 2px 1px;
`;

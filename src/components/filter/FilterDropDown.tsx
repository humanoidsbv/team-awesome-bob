import React from "react";

import * as Type from "../../types/types";
import * as Styled from "./FilterDropDown.styled";

interface FilterDropDownProps {
  id: string;
  inputValue: string;
  labelValue: string;
  teamMembers: Type.TeamMember[];
  handleChange: Function;
}

function FilterDropDown({ id, labelValue, teamMembers, handleChange }: FilterDropDownProps) {
  const localities = new Set<string>();
  teamMembers?.map((teamMember) => localities.add(teamMember.locality));

  const localitiesArray = Array.from(localities);

  return (
    <Styled.FilterDropDown>
      <Styled.Label htmlFor={id}>{labelValue}</Styled.Label>
      <Styled.Select id={id} onChange={handleChange} onBlur={handleChange}>
        <Styled.Option value={""}>...</Styled.Option>
        {localitiesArray.map((locality, index) => (
          <Styled.Option key={index} id={id} value={locality}>
            {locality}
          </Styled.Option>
        ))}
      </Styled.Select>
    </Styled.FilterDropDown>
  );
}

export default FilterDropDown;

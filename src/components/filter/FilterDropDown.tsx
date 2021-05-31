import React from "react";

import * as Styled from "./FilterDropDown.styled";

interface FilterDropDownProps {
  id: string;
  labelValue: string;
  content: any;
  handleChange: Function;
}

function FilterDropDown({ id, labelValue, content, handleChange }: FilterDropDownProps) {
  const options = new Set<string>();

  content?.map((item) => options.add(item[id]));
  const optionsArray = Array.from(options);
  // console.log(optionsArray);

  return (
    <Styled.FilterDropDown>
      <Styled.Label htmlFor={id}>{labelValue}</Styled.Label>
      <Styled.Select id={id} onChange={handleChange}>
        <Styled.Option value="">...</Styled.Option>
        {optionsArray.map((option) => (
          <Styled.Option key={option} id={option} value={option}>
            {option}
          </Styled.Option>
        ))}
      </Styled.Select>
    </Styled.FilterDropDown>
  );
}

export default FilterDropDown;

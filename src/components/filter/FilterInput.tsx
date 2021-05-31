/* eslint-disable react/require-default-props */
import React from "react";

import * as Styled from "./FilterInput.styled";

interface FilterInputProps {
  id: string;
  type: string;
  labelValue: string;
  onChange: any;
  hasLabel?: boolean;
}

function FilterInput({ id, type, labelValue, onChange, hasLabel = true }: FilterInputProps) {
  return (
    <Styled.InputField hasLabel={hasLabel} type={type} htmlFor={id}>
      {hasLabel && `${labelValue}`}
      <input
        autoComplete="off"
        placeholder="Search for Name or Role"
        id={id}
        onChange={onChange}
        type={type}
      />
    </Styled.InputField>
  );
}

export default FilterInput;

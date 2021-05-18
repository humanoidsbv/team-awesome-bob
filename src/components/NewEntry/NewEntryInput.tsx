/* eslint-disable react/require-default-props */
import React, { useState } from "react";

import * as Styled from "./NewEntryInput.styled";

import * as Types from "../../types/types";

interface NewEntryFormProps {
  id: string;
  type: string;
  labelValue: string;
  inputValue: string;
  updateTimeEntry: (event: Types.ValidityEvent) => void;
  isRequired?: boolean;
}

function NewEntryInput({
  id,
  type,
  labelValue,
  inputValue,
  updateTimeEntry,
  isRequired,
}: NewEntryFormProps) {
  const [isValid, setIsValid] = useState(true);

  const handleValidity = (event) => {
    updateTimeEntry(event);
    setIsValid(event.target.checkValidity());
  };

  return (
    <Styled.NewEntryInput isValid={isValid} type={type}>
      <label htmlFor={id}>
        {labelValue}
        <input
          autoComplete="off"
          required={isRequired}
          id={id}
          onChange={handleValidity}
          onBlur={handleValidity}
          type={type}
          value={inputValue}
        />
      </label>
    </Styled.NewEntryInput>
  );
}

export default NewEntryInput;

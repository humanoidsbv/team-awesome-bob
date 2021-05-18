/* eslint-disable react/require-default-props */
import React, { useState } from "react";

import * as Styled from "./NewTeamMemberInput.styled";

import * as Types from "../../types/types";

interface NewTeamMemberInputProps {
  id: string;
  type: string;
  labelValue: string;
  inputValue: string;
  updateTeamMember?: (event: Types.ValidityEvent) => void;
  isRequired?: boolean;
}

function NewTeamMemberInput({
  id,
  type,
  labelValue,
  inputValue,
  updateTeamMember,
  isRequired,
}: NewTeamMemberInputProps) {
  const [isValid, setIsValid] = useState(true);

  const handleValidity = (event) => {
    updateTeamMember(event);
    setIsValid(event.target.checkValidity());
  };

  return (
    <Styled.NewTeamMemberInput isValid={isValid} type={type}>
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
    </Styled.NewTeamMemberInput>
  );
}

export default NewTeamMemberInput;

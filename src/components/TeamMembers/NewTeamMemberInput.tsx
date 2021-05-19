/* eslint-disable react/require-default-props */
import React, { useState } from "react";

import * as Styled from "./NewTeamMemberInput.styled";

import * as Types from "../../types/types";

interface NewTeamMemberInputProps {
  id: string;
  type: string;
  labelValue: string;
  inputValue: string;
  inputSize?: string;
  updateTeamMember?: (event: Types.ValidityEvent) => void;
  isRequired?: boolean;
}

function NewTeamMemberInput({
  id,
  type,
  labelValue,
  inputValue,
  inputSize,
  updateTeamMember,
  isRequired,
}: NewTeamMemberInputProps) {
  const [isValid, setIsValid] = useState(true);

  return (
    <Styled.NewTeamMemberInput isValid={isValid} type={type} inputSize={inputSize}>
      <label htmlFor={id}>
        {labelValue}
        {type === "textarea" ? (
          <textarea
            id={id}
            value={inputValue}
            required={isRequired}
            minLength={100}
            onBlur={(event) => setIsValid(event.target.checkValidity())}
            onChange={updateTeamMember}
          />
        ) : (
          <input
            autoComplete="off"
            required={isRequired}
            id={id}
            minLength={2}
            onBlur={(event) => setIsValid(event.target.checkValidity())}
            onChange={updateTeamMember}
            type={type}
            value={inputValue}
          />
        )}
      </label>
    </Styled.NewTeamMemberInput>
  );
}

export default NewTeamMemberInput;

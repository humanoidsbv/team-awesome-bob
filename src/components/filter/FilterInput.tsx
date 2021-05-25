/* eslint-disable react/require-default-props */
import React, { useState } from "react";

import * as Styled from "./FilterInput.styled";

interface FilterInputProps {
  id: string;
  type: string;
  labelValue: string;
  inputValue: string;
  inputSize?: string;
  isRequired?: boolean;
  onChange: any;
  hasLabel?: boolean;
  socialIcon?: string;
}

function FilterInput({
  id,
  type,
  labelValue,
  inputValue,
  inputSize,
  onChange,
  isRequired,
  socialIcon,
  hasLabel = true,
}: FilterInputProps) {
  const [isValid, setIsValid] = useState(true);

  return (
    <Styled.InputField
      socialIcon={socialIcon}
      hasLabel={hasLabel}
      isValid={isValid}
      type={type}
      inputSize={inputSize}
      htmlFor={id}
    >
      {hasLabel && `${labelValue}`}

      {type === "textarea" ? (
        <textarea
          id={id}
          value={inputValue}
          required={isRequired}
          minLength={100}
          onBlur={(event) => setIsValid(event.target.checkValidity())}
          onChange={onChange}
        />
      ) : (
        <div className="social">
          {socialIcon && <img src={socialIcon} alt="" />}
          <input
            autoComplete="off"
            required={isRequired}
            id={id}
            minLength={2}
            onBlur={(event) => setIsValid(event.target.checkValidity())}
            onChange={onChange}
            type={type}
            value={inputValue}
          />
        </div>
      )}
    </Styled.InputField>
  );
}

export default FilterInput;

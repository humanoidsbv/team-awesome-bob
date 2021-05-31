/* eslint-disable react/require-default-props */
import React, { useState } from "react";

import * as Styled from "./InputField.styled";

interface InputFieldProps {
  hasLabel?: boolean;
  id: string;
  inputSize?: string;
  inputValue: string;
  isRequired?: boolean;
  labelValue: string;
  onChange: any;
  socialIcon?: string;
  type: string;
}

function InputField({
  hasLabel = true,
  id,
  inputSize,
  inputValue,
  isRequired,
  labelValue,
  onChange,
  socialIcon,
  type,
}: InputFieldProps) {
  const [isValid, setIsValid] = useState(true);

  return (
    <Styled.InputField htmlFor={id} {...{ hasLabel, inputSize, isValid, socialIcon, type }}>
      {hasLabel && `${labelValue}`}

      {type === "textarea" ? (
        <textarea
          id={id}
          minLength={100}
          onBlur={(event) => setIsValid(event.target.checkValidity())}
          onChange={onChange}
          required={isRequired}
          value={inputValue}
        />
      ) : (
        <div>
          {socialIcon && <img src={socialIcon} alt="" />}
          <input
            autoComplete="off"
            id={id}
            minLength={2}
            onBlur={(event) => setIsValid(event.target.checkValidity())}
            onChange={onChange}
            required={isRequired}
            type={type}
            value={inputValue}
          />
        </div>
      )}
    </Styled.InputField>
  );
}

export default InputField;

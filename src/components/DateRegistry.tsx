/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";

import * as Styled from "./DateRegistry.styled";

interface DateRegistryProps {
  children: any;
}

function DateRegistry({ children }: DateRegistryProps) {
  return <Styled.DateRegistry>{children}</Styled.DateRegistry>;
}

export default DateRegistry;

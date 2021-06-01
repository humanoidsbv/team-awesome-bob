import React from "react";

import * as Styled from "./DateRegistry.styled";

interface DateRegistryProps {
  date: string;
  duration: string;
}

function DateRegistry({ date, duration }: DateRegistryProps) {
  return (
    <Styled.DateRegistry>
      <p>{date}</p>
      <p>{duration}</p>
    </Styled.DateRegistry>
  );
}

export default DateRegistry;

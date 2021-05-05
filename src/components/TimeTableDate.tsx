/* eslint-disable react/require-default-props */
import React from "react";

import * as Styled from "./TimeTableDate.styled";

interface TimeTableDateProps {
  isToday?: boolean;
  children: React.ReactElement | React.ReactElement[];
}

function TimeTableDate({ isToday, children }: TimeTableDateProps) {
  return <Styled.TimeTableDate isToday={isToday}>{children}</Styled.TimeTableDate>;
}

export default TimeTableDate;

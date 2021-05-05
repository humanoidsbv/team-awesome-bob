/* eslint-disable react/require-default-props */
import React from "react";

import * as Styled from "./TimeEntry.styled";

interface TimeEntryProps {
  firstChild?: boolean;
  lastChild?: boolean;
  isToday?: boolean;
  children: React.ReactElement | React.ReactElement[];
}

function TimeEntry({
  firstChild,
  lastChild,
  isToday,
  children,
}: TimeEntryProps): React.ReactElement {
  return (
    <Styled.TimeEntry firstChild={firstChild} lastChild={lastChild} isToday={isToday}>
      {children}
    </Styled.TimeEntry>
  );
}

export default TimeEntry;

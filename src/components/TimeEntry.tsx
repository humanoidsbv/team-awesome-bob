/* eslint-disable react/require-default-props */
import React from "react";

import * as Styled from "./TimeEntry.styled";

interface TimeEntryProps {
  client?: string;
  firstChild?: boolean;
  lastChild?: boolean;
  isToday?: boolean;
  timeRegistration: string;
  duration: string;
  children?: React.ReactElement | React.ReactElement[];
}

function TimeEntry({
  client,
  firstChild,
  lastChild,
  isToday,
  timeRegistration,
  duration,
  children,
}: TimeEntryProps): React.ReactElement {
  return (
    <Styled.TimeEntry
      client={client}
      firstChild={firstChild}
      lastChild={lastChild}
      isToday={isToday}
    >
      <p>{client}</p>
      <div>
        <p>{timeRegistration}</p>
        <p>{duration}</p>
      </div>
      {children}
    </Styled.TimeEntry>
  );
}

export default TimeEntry;

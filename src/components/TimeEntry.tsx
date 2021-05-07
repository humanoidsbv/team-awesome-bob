/* eslint-disable react/require-default-props */
import React from "react";

import * as Styled from "./TimeEntry.styled";

import DeleteButton from "./DeleteButton";

interface TimeEntryProps {
  client?: string;
  firstChild?: boolean;
  lastChild?: boolean;
  isToday?: boolean;
  timeRegistration: string;
  duration: string;
  children?: React.ReactElement | React.ReactElement[];
  id: number;
  deleteTimeEntry: any;
}

function TimeEntry({
  client,
  firstChild,
  lastChild,
  isToday,
  timeRegistration,
  duration,
  children,
  id,
  deleteTimeEntry,
}: TimeEntryProps): React.ReactElement {
  return (
    <Styled.TimeEntry
      client={client}
      firstChild={firstChild}
      lastChild={lastChild}
      isToday={isToday}
    >
      <div>
        <p>{client}</p>
        <DeleteButton deleteTimeEntry={deleteTimeEntry} id={id} />
      </div>
      <div>
        <p>{timeRegistration}</p>
        <p>{duration}</p>
      </div>
      {children}
    </Styled.TimeEntry>
  );
}

export default TimeEntry;

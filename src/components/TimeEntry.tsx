import React from "react";

import * as Type from "../types/types";
import * as Styled from "./TimeEntry.styled";

import DeleteButton from "./DeleteButton";

interface TimeEntryProps {
  timeEntry: Type.TimeEntry;
  firstChild: boolean;
  lastChild: boolean;
  deleteTimeEntry: any;
}

function TimeEntry({ timeEntry, deleteTimeEntry, firstChild, lastChild }: TimeEntryProps) {
  return (
    <Styled.TimeEntry client={timeEntry.client} firstChild={firstChild} lastChild={lastChild}>
      <div>
        <p>{timeEntry.client}</p>
        <DeleteButton deleteTimeEntry={deleteTimeEntry} id={timeEntry.id} />
      </div>
      <div>
        <p>{timeEntry.timeRegistration}</p>
        <p>{timeEntry.duration}</p>
      </div>
    </Styled.TimeEntry>
  );
}

export default TimeEntry;

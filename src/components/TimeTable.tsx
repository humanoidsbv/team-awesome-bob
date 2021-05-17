/* eslint-disable react/jsx-one-expression-per-line */

import React, { useContext } from "react";

import { deleteTimeEntries } from "../services/deleteTimeEntries";

import * as Styled from "./TimeTable.styled";

import DateRegistry from "./DateRegistry";
import TimeEntry from "./TimeEntry";

import { StoreContext } from "../stores/ContextLoader";

function TimeTable() {
  const store = useContext(StoreContext);
  const [timeEntries, setTimeEntries] = store.timeEntriesUseState;

  const dateDisplay = { day: "numeric", month: "long", year: "numeric" };

  async function deleteTimeEntry(_id: number) {
    const newTimeEntries = timeEntries.filter((entry) => entry.id !== _id);
    setTimeEntries(newTimeEntries);
    await deleteTimeEntries(_id);
  }

  let previousDate = null;

  const allEntries = timeEntries?.map((timeEntry, index) => {
    const startDateTime = new Date(timeEntry.startTime);
    const endDateTime = new Date(timeEntry.endTime);

    const startTime = startDateTime.toLocaleTimeString("nl-NL", {
      hour: "2-digit",
      minute: "2-digit",
    });
    const endTime = endDateTime.toLocaleTimeString("nl-NL", {
      hour: "2-digit",
      minute: "2-digit",
    });

    let prevStartDateTime = null;
    prevStartDateTime = new Date(timeEntries[index - 1]?.startTime).toDateString();
    const nextStartDateTime = new Date(timeEntries[index + 1]?.startTime).toDateString();

    const isFirstChild = !(prevStartDateTime === startDateTime.toDateString());
    const isLastChild = !(nextStartDateTime === startDateTime.toDateString());

    const timeRegistration = `${startTime} - ${endTime}`;
    const durationAsNumber = endDateTime.getTime() - startDateTime.getTime();
    const duration = new Date(durationAsNumber).toISOString().substr(11, 5);
    const { client } = timeEntry;

    const soloTimeEntry =
      startDateTime.toDateString() === previousDate?.toDateString() && previousDate !== null;

    const showDate = startDateTime.toLocaleDateString("nl-NL", dateDisplay);
    previousDate = startDateTime;

    const entriesOnDate = timeEntries.filter(
      (entry) => new Date(entry.startTime).toDateString() === startDateTime.toDateString(),
    );

    const totalTime = entriesOnDate.reduce((acc, cur) => {
      return acc + (new Date(cur.endTime).getTime() - new Date(cur.startTime).getTime());
    }, 0);

    const totalHours = new Date(totalTime).toISOString().substr(11, 5);

    return (
      <div key={timeEntry.id}>
        {!soloTimeEntry && (
          <DateRegistry>
            <p> {showDate} </p>
            <p> {totalHours} </p>
          </DateRegistry>
        )}
        <TimeEntry
          deleteTimeEntry={deleteTimeEntry}
          id={timeEntry.id}
          firstChild={isFirstChild}
          lastChild={isLastChild}
          client={client}
          timeRegistration={timeRegistration}
          duration={duration}
        />
      </div>
    );
  });

  return <Styled.TimeTable>{allEntries}</Styled.TimeTable>;
}

export default TimeTable;

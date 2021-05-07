/* eslint-disable react/jsx-one-expression-per-line */
import React, { useEffect, useState } from "react";

import { getTimeEntries } from "../services/getTimeEntries";
import { deleteTimeEntries } from "../services/deleteTimeEntries";

import TimeEntry from "./TimeEntry";
import DateRegistry from "./DateRegistry";

import * as Styled from "./TimeTable.styled";

function TimeTable() {
  const [timeEntries, setTimeEntries] = useState([]);
  const dateDisplay = { day: "numeric", month: "long", year: "numeric" };

  async function fetchTimeEntries() {
    setTimeEntries(await getTimeEntries());
  }

  useEffect(() => {
    fetchTimeEntries();
  }, []);

  async function deleteTimeEntry(_id: number) {
    await deleteTimeEntries(_id);
    fetchTimeEntries();
  }

  let previousDate = new Date();

  const allEntries = timeEntries.map((timeEntry, index) => {
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

    if (timeEntry.client === 1) {
      timeEntry.client = "Humanoids";
    } else {
      timeEntry.client = "Port of Rotterdam";
    }

    const prevStartDateTime = new Date(timeEntries[index - 1]?.startTime).toDateString();
    const nextStartDateTime = new Date(timeEntries[index + 1]?.startTime).toDateString();

    const isFirstChild = !(prevStartDateTime === startDateTime.toDateString());
    const isLastChild = !(nextStartDateTime === startDateTime.toDateString());

    const timeRegistration = `${startTime} - ${endTime}`;
    const durationAsNumber = endDateTime.getTime() - startDateTime.getTime();
    const duration = new Date(durationAsNumber).toISOString().substr(11, 5);
    const { client } = timeEntry;

    if (startDateTime.toDateString() === previousDate.toDateString()) {
      return (
        <TimeEntry
          deleteTimeEntry={deleteTimeEntry}
          id={timeEntry.id}
          firstChild={isFirstChild}
          lastChild={isLastChild}
          client={client}
          timeRegistration={timeRegistration}
          duration={duration}
        />
      );
    }

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
      <>
        <DateRegistry>
          <p> {showDate} </p>
          <p> {totalHours} </p>
        </DateRegistry>
        <TimeEntry
          deleteTimeEntry={deleteTimeEntry}
          id={timeEntry.id}
          firstChild={isFirstChild}
          lastChild={isLastChild}
          client={client}
          timeRegistration={timeRegistration}
          duration={duration}
        />
      </>
    );
  });

  return <Styled.TimeTable>{allEntries}</Styled.TimeTable>;
}

export default TimeTable;

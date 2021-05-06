/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";

import { mockData } from "../mockData";

import TimeEntry from "./TimeEntry";
import DateRegistry from "./DateRegistry";

import * as Styled from "./TimeTable.styled";

function TimeTable() {
  const dateDisplay = { day: "numeric", month: "long", year: "numeric" };

  let previousDate = new Date();

  const allEntries = mockData.timeEntries.map((timeEntry, index) => {
    const startDateTime = new Date(timeEntry.startTimestamp);
    const endDateTime = new Date(timeEntry.stopTimestamp);

    const startTime = startDateTime.toLocaleTimeString("nl-NL", {
      hour: "2-digit",
      minute: "2-digit",
    });
    const endTime = endDateTime.toLocaleTimeString("nl-NL", {
      hour: "2-digit",
      minute: "2-digit",
    });

    const prevStartDateTime = new Date(
      mockData.timeEntries[index - 1]?.startTimestamp,
    ).toDateString();
    const nextStartDateTime = new Date(
      mockData.timeEntries[index + 1]?.startTimestamp,
    ).toDateString();

    const isFirstChild = !(prevStartDateTime === startDateTime.toDateString());
    const isLastChild = !(nextStartDateTime === startDateTime.toDateString());

    const timeRegistration = `${startTime} - ${endTime}`;
    const durationAsNumber = endDateTime.getTime() - startDateTime.getTime();
    const duration = new Date(durationAsNumber).toISOString().substr(11, 5);
    const { client } = timeEntry;

    if (startDateTime.toDateString() === previousDate.toDateString()) {
      return (
        <TimeEntry
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

    const entriesOnDate = mockData.timeEntries.filter(
      (entry) => new Date(entry.startTimestamp).toDateString() === startDateTime.toDateString(),
    );

    const totalTime = entriesOnDate.reduce((acc, cur) => {
      return acc + (new Date(cur.stopTimestamp).getTime() - new Date(cur.startTimestamp).getTime());
    }, 0);

    const totalHours = new Date(totalTime).toISOString().substr(11, 5);

    return (
      <>
        <DateRegistry>
          <p> {showDate} </p>
          <p> {totalHours} </p>
        </DateRegistry>
        <TimeEntry
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

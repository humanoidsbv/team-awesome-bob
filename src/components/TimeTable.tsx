/* eslint-disable react/jsx-one-expression-per-line */
import React from "react";

import { mockData } from "../mockData";

import TimeEntry from "./TimeEntry";
import DateRegistry from "./DateRegistry";

import * as Styled from "./TimeTable.styled";

function TimeTable() {
  const dateDisplay = { day: "numeric", month: "long", year: "numeric" };

  let previousDate = new Date();

  const allEntries = mockData.timeentries.map((timeEntry) => {
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

    const timeRegistration = `${startTime} - ${endTime}`;
    const durationAsNumber = endDateTime.getTime() - startDateTime.getTime();
    const duration = new Date(durationAsNumber).toISOString().substr(11, 5);
    const { client } = timeEntry;

    if (
      startDateTime.getFullYear() === previousDate.getFullYear() &&
      startDateTime.getMonth() === previousDate.getMonth() &&
      startDateTime.getDay() === previousDate.getDay()
    ) {
      return <TimeEntry client={client} timeRegistration={timeRegistration} duration={duration} />;
    }

    const showDate = startDateTime.toLocaleDateString("nl-NL", dateDisplay);
    previousDate = startDateTime;

    const entriesOnDate = mockData.timeentries.filter(
      (entry) =>
        new Date(entry.startTimestamp).getFullYear() === startDateTime.getFullYear() &&
        new Date(entry.startTimestamp).getMonth() === startDateTime.getMonth() &&
        new Date(entry.startTimestamp).getDay() === startDateTime.getDay(),
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
        <TimeEntry client={client} timeRegistration={timeRegistration} duration={duration} />
      </>
    );
  });

  return <Styled.TimeTable>{allEntries}</Styled.TimeTable>;
}

export default TimeTable;

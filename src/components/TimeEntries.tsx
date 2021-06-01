import React, { useEffect, useState } from "react";

import { deleteTimeEntries } from "../services/time-entries/deleteTimeEntries";

import * as Styled from "./TimeEntries.styled";

import * as Type from "../types/types";

import { useStore } from "../stores/ZustandStore";
import TimeEntry from "./TimeEntry";
import DateRegistry from "./DateRegistry";

const convertDates = (timeEntry: Type.TimeEntry) => {
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
  return { timeRegistration: `${startTime} - ${endTime}`, startDateTime, endDateTime };
};

const calculateDuration = (timeEntry: Type.TimeEntry) => {
  const startDateTime = new Date(timeEntry.startTime);
  const endDateTime = new Date(timeEntry.endTime);
  const durationAsNumber = endDateTime.getTime() - startDateTime.getTime();
  return { durationAsNumber, duration: new Date(durationAsNumber).toISOString().substr(11, 5) };
};

function TimeEntries() {
  const rawTimeEntries = useStore((state) => state.rawTimeEntries);
  const setRawTimeEntries = useStore((state) => state.setRawTimeEntries);
  const [timeEntries, setTimeEntries] = useState<Type.TimeEntry[]>([]);

  async function deleteTimeEntry(_id: number) {
    const newTimeEntries = rawTimeEntries.filter((entry) => entry.id !== _id);
    setRawTimeEntries(newTimeEntries);
    await deleteTimeEntries(_id);
  }

  useEffect(() => {
    const newTimeEntries = [];
    rawTimeEntries.forEach((timeEntry) =>
      newTimeEntries.push({
        id: timeEntry.id,
        client: timeEntry.client,
        activity: timeEntry.activity,
        timeRegistration: convertDates(timeEntry).timeRegistration,
        startDateTime: convertDates(timeEntry).startDateTime,
        endDateTime: convertDates(timeEntry).startDateTime,
        duration: calculateDuration(timeEntry).duration,
        durationAsNumber: calculateDuration(timeEntry).durationAsNumber,
      }),
    );
    setTimeEntries(newTimeEntries);
  }, [rawTimeEntries]);

  const dateDisplay: {
    day?: "numeric" | "2-digit";
    month?: "numeric" | "2-digit" | "long" | "short" | "narrow";
    year?: "numeric" | "2-digit";
  } = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  const timeEntryFilter = useStore((state) => state.timeEntryFilter);

  const fields = Object.keys(timeEntryFilter || {});

  const dates = new Set<string>();

  timeEntries
    .filter((timeEntry) => fields.every((field) => timeEntryFilter[field] === timeEntry[field]))
    .map((timeEntry) =>
      dates.add(timeEntry.startDateTime.toLocaleDateString("nl-NL", dateDisplay)),
    );

  const dateArray = Array.from(dates);

  const dateContainer = dateArray.map((date) => {
    const filteredTimeEntries = timeEntries.filter(
      (timeEntry) => timeEntry.startDateTime.toLocaleDateString("nl-NL", dateDisplay) === date,
    );
    return {
      dateInfo: {
        date,
        duration: `${
          filteredTimeEntries.reduce((acc, timeEntry) => acc + timeEntry.durationAsNumber, 0) /
          3600000
        } hours`,
      },
      timeEntryList: filteredTimeEntries,
    };
  });

  return (
    <Styled.TimeEntries>
      {dateContainer.map((item) => (
        <>
          <DateRegistry date={item.dateInfo.date} duration={item.dateInfo.duration} />
          {item.timeEntryList.map((timeEntry, index) => (
            <TimeEntry
              key={timeEntry.id}
              deleteTimeEntry={deleteTimeEntry}
              firstChild={index === 0}
              lastChild={index === item.timeEntryList.length - 1}
              timeEntry={timeEntry}
            />
          ))}
        </>
      ))}
    </Styled.TimeEntries>
  );
}

export default TimeEntries;

//  {
//    timeEntries
//      .filter((timeEntry) => fields.every((field) => timeEntryFilter[field] === timeEntry[field]))
//      .map((timeEntry, index) => {
//        let firstChild = true;
//        let lastChild = true;
//        const prev = index !== 0 && timeEntries[index - 1];
//        const next = index !== timeEntries.length - 1 && timeEntries[index + 1];
//        const date = timeEntry.startDateTime.toLocaleDateString("nl-NL", dateDisplay);

//        if (
//          prev &&
//          prev.startDateTime.toLocaleDateString() === timeEntry.startDateTime.toLocaleDateString()
//        ) {
//          firstChild = false;
//        }

//        if (
//          next &&
//          next.startDateTime.toLocaleDateString() === timeEntry.startDateTime.toLocaleDateString()
//        ) {
//          lastChild = false;
//        }

//        return (
//          <>
//            <DateRegistry show={firstChild} date={date} duration="test" />
//            <TimeEntry
//              key={timeEntry.id}
//              deleteTimeEntry={deleteTimeEntry}
//              firstChild={firstChild}
//              lastChild={lastChild}
//              timeEntry={timeEntry}
//            />
//          </>
//        );
//      });
//  }

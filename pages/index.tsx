import React, { useState, useEffect } from "react";

import { ThemeProvider } from "styled-components";

import { getTimeEntries } from "../src/services/time-entries/getTimeEntries";

import { NewEntryButton } from "../src/components/new-entry/NewEntryButton.styled";

import Header from "../src/components/Header";
import NewEntryForm from "../src/components/new-entry/NewEntryForm";
import TimeEntries from "../src/components/TimeEntries";
import FilterBar from "../src/components/filter/FilterBar";

import { theme } from "../src/styling/theme";
import { useStore } from "../src/stores/ZustandStore";

const calculateDuration = (timeEntry: Type.TimeEntry) => {
  const startDateTime = new Date(timeEntry.startTime);
  const endDateTime = new Date(timeEntry.endTime);
  const durationAsNumber = endDateTime.getTime() - startDateTime.getTime();
  return { durationAsNumber, duration: new Date(durationAsNumber).toISOString().substr(11, 5) };
};

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

function HomePage() {
  const [isActive, setIsActive] = useState<boolean>(false);
  const handleActive = (): void => setIsActive(!isActive);

  const timeEntries = useStore((state) => state.timeEntries);
  const setTimeEntries = useStore((state) => state.setTimeEntries);

  const timeEntryFilter = useStore((state) => state.timeEntryFilter);
  const setTimeEntryFilter = useStore((state) => state.setTimeEntryFilter);

  async function fetchTimeEntries() {
    setTimeEntries(await getTimeEntries());
  }

  useEffect(() => {
    fetchTimeEntries();
  }, []);

  const handleChange = (event) => {
    const newTimeEntryFilter = { ...timeEntryFilter };
    if (event.target.value === "") {
      delete newTimeEntryFilter[event.target.id];
      setTimeEntryFilter(newTimeEntryFilter);
    } else {
      setTimeEntryFilter({ ...newTimeEntryFilter, [event.target.id]: event.target.value });
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Header activePage="timesheets" />
      {!isActive && (
        <NewEntryButton isVisible={!isActive} onClick={handleActive}>
          <img src="assets/plus-icon.svg" alt="" />
          New Time Entry
        </NewEntryButton>
      )}
      <FilterBar
        handleChange={handleChange}
        filterFields={["client", "activity"]}
        content={timeEntries}
        activePage="Timesheets"
      />
      <NewEntryForm isActive={isActive} handleActive={handleActive} />
      <TimeEntries />
    </ThemeProvider>
  );
}

export default HomePage;

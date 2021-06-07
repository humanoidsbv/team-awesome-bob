import React, { useState, useEffect } from "react";

import { ThemeProvider } from "styled-components";

import { gql, useQuery } from "@apollo/client";
import { getTimeEntries } from "../src/services/time-entries/getTimeEntries";

import { NewEntryButton } from "../src/components/new-entry/NewEntryButton.styled";

import Header from "../src/components/Header";
import NewEntryForm from "../src/components/new-entry/NewEntryForm";
import TimeEntries from "../src/components/TimeEntries";
import FilterBar from "../src/components/filter/FilterBar";

import { theme } from "../src/styling/theme";
import { useStore } from "../src/stores/ZustandStore";

function HomePage() {
  const [isActive, setIsActive] = useState<boolean>(false);
  const handleActive = (): void => setIsActive(!isActive);

  const timeEntries = useStore((state) => state.timeEntries);
  const setTimeEntries = useStore((state) => state.setTimeEntries);

  const { loading } = useQuery(
    gql`
      query GetTimeEntries {
        allTimeEntries {
          id
          activity
          client
          endTime
          startTime
        }
      }
    `,
    {
      onCompleted: (data) => setTimeEntries(data.allTimeEntries),
      skip: timeEntries.length > 0,
    },
  );

  const timeEntryFilter = useStore((state) => state.timeEntryFilter);
  const setTimeEntryFilter = useStore((state) => state.setTimeEntryFilter);

  // async function fetchTimeEntries() {
  // setTimeEntries(await getTimeEntries());

  // }

  // useEffect(() => {
  //   fetchTimeEntries();
  // }, []);

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
      {loading && <p>loading...</p>}
      <TimeEntries />
    </ThemeProvider>
  );
}

export default HomePage;

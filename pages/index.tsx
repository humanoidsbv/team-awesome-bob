import React, { useState, useEffect, useContext } from "react";

import { ThemeProvider } from "styled-components";

import { getTimeEntries } from "../src/services/time-entries/getTimeEntries";

import { NewEntryButton } from "../src/components/new-entry/NewEntryButton.styled";

import Header from "../src/components/Header";
import NewEntryForm from "../src/components/new-entry/NewEntryForm";
import TimeTable from "../src/components/TimeTable";

import { theme } from "../src/styling/theme";
import { StoreContext } from "../src/stores/ContextLoader";

function HomePage() {
  const [isActive, setIsActive] = useState<boolean>(false);
  const handleActive = (): void => setIsActive(!isActive);

  const store = useContext(StoreContext);
  const [, setTimeEntries] = store.timeEntries;

  async function fetchTimeEntries() {
    setTimeEntries(await getTimeEntries());
  }

  useEffect(() => {
    fetchTimeEntries();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      {!isActive && (
        <NewEntryButton onClick={handleActive}>
          <img src="assets/plus-icon.svg" alt="" />
          New Time Entry
        </NewEntryButton>
      )}
      <NewEntryForm isActive={isActive} handleActive={handleActive} />
      <TimeTable />
    </ThemeProvider>
  );
}

export default HomePage;

import React, { useState, useEffect } from "react";

import { ThemeProvider } from "styled-components";

import { getTimeEntries } from "../src/services/getTimeEntries";

import { NewEntryButton } from "../src/components/NewEntry/NewEntryButton.styled";

import Header from "../src/components/Header";
import NewEntryForm from "../src/components/NewEntry/NewEntryForm";
import TimeTable from "../src/components/TimeTable";

import { theme } from "../src/styling/theme";

function HomePage() {
  const [isActive, setIsActive] = useState<boolean>(false);
  const handleActive = (): void => setIsActive(!isActive);

  const [timeEntries, setTimeEntries] = useState([]);

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
        <NewEntryButton isActive={isActive} onClick={handleActive}>
          <img src="assets/plus-icon.svg" alt="" />
          New Time Entry
        </NewEntryButton>
      )}
      <NewEntryForm timeEntries={timeEntries} isActive={isActive} handleActive={handleActive} />
      <TimeTable timeEntries={timeEntries} setTimeEntries={setTimeEntries} />
    </ThemeProvider>
  );
}

export default HomePage;

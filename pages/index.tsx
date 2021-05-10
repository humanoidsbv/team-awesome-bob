import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import Header from "../src/components/Header";
import { NewEntryButton } from "../src/components/NewEntry/NewEntryButton.styled";
import NewEntryForm from "../src/components/NewEntry/NewEntryForm";
import TimeTable from "../src/components/TimeTable";
import { theme } from "../src/styling/theme";
import { getTimeEntries } from "../src/services/getTimeEntries";

function HomePage() {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  const handleClick = (): void => setIsClicked(!isClicked);

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
      {!isClicked && (
        <NewEntryButton isClicked={isClicked} onClick={handleClick}>
          <img src="assets/plus-icon.svg" alt="" />
          New Time Entry
        </NewEntryButton>
      )}
      <NewEntryForm isClicked={isClicked} fetchTimeEntries={fetchTimeEntries} />
      <TimeTable timeEntries={timeEntries} fetchTimeEntries={fetchTimeEntries} />
    </ThemeProvider>
  );
}

export default HomePage;

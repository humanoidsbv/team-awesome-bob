import React from "react";
import { ThemeProvider } from "styled-components";
import Header from "../src/components/Header";
import NewEntryButton from "../src/components/NewEntryButton";
import TimeTable from "../src/components/TimeTable";
import { theme } from "../src/styling/theme";

function HomePage() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <NewEntryButton />
        <TimeTable />
      </ThemeProvider>
    </>
  );
}

export default HomePage;

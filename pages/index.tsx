import React from "react";
import Header from "../src/components/Header";
import NewEntryButton from "../src/components/NewEntryButton";
import TimeTable from "../src/components/TimeTable";

function HomePage() {
  return (
    <>
      <Header />
      <NewEntryButton />
      <TimeTable />
    </>
  );
}

export default HomePage;

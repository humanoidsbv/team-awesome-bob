import Header from "../src/components/Header";
import NewEntryButton from "../src/components/NewEntryButton";
import TimeEntries from "../src/components/TimeEntries";

function HomePage() {
  return (
    <>
      <Header />
      <NewEntryButton />
      <TimeEntries />
    </>
  );
}

export default HomePage;

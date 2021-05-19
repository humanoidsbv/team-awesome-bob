export async function addTimeEntries(timeEntryJson: string) {
  await fetch(`http://localhost:3004/time-entries/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: timeEntryJson,
  });
}

export async function deleteTimeEntries(id: number) {
  await fetch(`http://localhost:3004/time-entries/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
}

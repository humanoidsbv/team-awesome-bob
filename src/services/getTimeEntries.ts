export async function getTimeEntries() {
  const response = await fetch("http://localhost:3004/time-entries", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
}

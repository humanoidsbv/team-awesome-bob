import * as Type from "../../types/types";

export async function addTimeEntries(timeEntry: Type.TimeEntry) {
  const url = process.env.NEXT_PUBLIC_DB_HOST
    ? "http://localhost:3004"
    : "https://my-json-server.typicode.com/humanoidsbv/team-awesome-bob";
  await fetch(`${url}/timeEntries/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(timeEntry),
  });
}

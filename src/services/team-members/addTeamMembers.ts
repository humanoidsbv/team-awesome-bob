export async function addTeamMembers(timeEntryJson: string) {
  const url = process.env.NEXT_PUBLIC_DB_HOST
    ? "http://localhost:3004"
    : "https://my-json-server.typicode.com/humanoidsbv/team-awesome-bob";
  await fetch(`${url}/team-members/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: timeEntryJson,
  });
}

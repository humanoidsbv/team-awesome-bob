export async function addTeamMembers(timeEntryJson: string) {
  await fetch(`http://localhost:3004/team-members/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: timeEntryJson,
  });
}

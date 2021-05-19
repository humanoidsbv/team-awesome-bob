export async function getTeamMembers() {
  const response = await fetch("http://localhost:3004/team-members?_sort=name", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
}

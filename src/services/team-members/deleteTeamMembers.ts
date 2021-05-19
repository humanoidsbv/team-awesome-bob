export async function deleteTeamMembers(id: number) {
  await fetch(`http://localhost:3004/team-members/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
}

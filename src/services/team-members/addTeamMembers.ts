import * as Type from "../../types/types";

export async function addTeamMembers(teamMember: Type.TeamMember) {
  const url = process.env.NEXT_PUBLIC_DB_HOST
    ? "http://localhost:3004"
    : "https://my-json-server.typicode.com/humanoidsbv/team-awesome-bob";
  await fetch(`${url}/teamMembers/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(teamMember),
  });
}

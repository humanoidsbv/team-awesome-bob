export async function getTeamMembers() {
  const url = process.env.NEXT_PUBLIC_DB_HOST
    ? "http://localhost:3004"
    : "https://my-json-server.typicode.com/humanoidsbv/team-awesome-bob";
  const response = await fetch(`${url}/teamMembers?_sort=lastName`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  return response.json();
}

import React, { useEffect, useContext } from "react";

import { ThemeProvider } from "styled-components";

import { theme } from "../src/styling/theme";

import Header from "../src/components/Header";
import TeamMemberList from "../src/components/team-members/TeamMemberList";

import { StoreContext } from "../src/stores/ContextLoader";
import { getTeamMembers } from "../src/services/team-members/getTeamMembers";
import NewTeamMemberForm from "../src/components/team-members/NewTeamMemberForm";

function TeamMembers() {
  const store = useContext(StoreContext);
  const [teamMembers, setTeamMembers] = store.teamMembers;

  async function fetchTeamMembers() {
    setTeamMembers(await getTeamMembers());
  }

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <NewTeamMemberForm />
      <TeamMemberList />
      {teamMembers?.length === 0 && <p>There are no team members</p>}
    </ThemeProvider>
  );
}

export default TeamMembers;

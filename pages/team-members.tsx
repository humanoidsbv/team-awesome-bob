import React, { useEffect, useState } from "react";

import { ThemeProvider } from "styled-components";

import { theme } from "../src/styling/theme";

import Header from "../src/components/Header";
import TeamMemberList from "../src/components/team-members/TeamMemberList";

import { getTeamMembers } from "../src/services/team-members/getTeamMembers";
import NewTeamMemberForm from "../src/components/team-members/NewTeamMemberForm";
import FilterBar from "../src/components/filter/FilterBar";
import { useStore } from "../src/stores/ZustandStore";

function TeamMembers() {
  const teamMembers = useStore((state) => state.teamMembers);
  const setTeamMembers = useStore((state) => state.setTeamMembers);
  const teamMemberFilter = useStore((state) => state.teamMemberFilter);
  const setTeamMemberFilter = useStore((state) => state.setTeamMemberFilter);

  async function fetchTeamMembers() {
    setTeamMembers(await getTeamMembers());
  }

  useEffect(() => {
    fetchTeamMembers();
  }, []);

  const handleChange = (event) => {
    const newTeamMemberFilter = { ...teamMemberFilter };
    if (event.target.value === "") {
      delete newTeamMemberFilter[event.target.id];
      setTeamMemberFilter(newTeamMemberFilter);
    } else {
      setTeamMemberFilter({ ...newTeamMemberFilter, [event.target.id]: event.target.value });
    }
  };

  const [nameFilter, setNameFilter] = useState<string>("");

  const handleNameFilter = (event) => {
    setNameFilter(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Header activePage="teammembers" />
      <FilterBar
        handleNameFilter={handleNameFilter}
        handleChange={handleChange}
        filterFields={["role", "locality"]}
        content={teamMembers}
        activePage="Team Members"
      />
      <NewTeamMemberForm />
      <TeamMemberList nameFilter={nameFilter} />
      {teamMembers?.length === 0 && <p>There are no team members</p>}
    </ThemeProvider>
  );
}

export default TeamMembers;

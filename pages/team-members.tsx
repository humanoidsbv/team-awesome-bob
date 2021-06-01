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

  const [searchFilter, setSearchFilter] = useState<string>("");

  const handleSearchFilter = (event) => {
    setSearchFilter(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Header activePage="teamMembers" />
      <FilterBar
        handleSearchFilter={handleSearchFilter}
        handleChange={handleChange}
        filterFields={["role", "locality"]}
        content={teamMembers}
        activePage="Team Members"
      />
      <NewTeamMemberForm />
      <TeamMemberList searchFilter={searchFilter} />
      {teamMembers?.length === 0 && <p>There are no team members</p>}
    </ThemeProvider>
  );
}

export default TeamMembers;

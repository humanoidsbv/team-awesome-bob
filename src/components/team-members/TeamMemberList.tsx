import React from "react";

import { useStore } from "../../stores/ZustandStore";

import * as Styled from "./TeamMemberList.styled";

import TeamMember from "./TeamMember";

interface TeamMemberListProps {
  searchFilter: string;
}

function TeamMemberList({ searchFilter }: TeamMemberListProps) {
  const teamMembers = useStore((state) => state.teamMembers);
  const teamMemberFilter = useStore((state) => state.teamMemberFilter);

  const fields = Object.keys(teamMemberFilter || {});

  return (
    <Styled.TeamMemberList>
      {teamMembers
        ?.filter((teamMember) =>
          fields.every((field) => teamMemberFilter[field] === teamMember[field]),
        )
        .filter(
          (teamMember) =>
            teamMember.firstName.toLowerCase().includes(searchFilter.toLowerCase()) ||
            teamMember.lastName.toLowerCase().includes(searchFilter.toLowerCase()) ||
            teamMember.role.toLowerCase().includes(searchFilter.toLowerCase()),
        )
        .sort((a, b) => (a.lastName > b.lastName ? 1 : -1))
        .map((teamMember) => (
          <TeamMember key={teamMember.id} teamMember={teamMember} />
        ))}
    </Styled.TeamMemberList>
  );
}

export default TeamMemberList;

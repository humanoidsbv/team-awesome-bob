import React, { useContext } from "react";

import * as Styled from "./TeamMemberList.styled";

import TeamMember from "./TeamMember";

import { StoreContext } from "../../stores/ContextLoader";

function TeamMemberList() {
  const store = useContext(StoreContext);
  const [teamMembers] = store.teamMembers;
  const [teamMemberFilter] = store.teamMemberFilter;

  return (
    <Styled.TeamMemberList>
      {teamMembers
        ?.sort((a, b) => (a.lastName > b.lastName ? 1 : -1))
        .filter((teamMember) =>
          teamMember.locality.includes(teamMemberFilter?.locality ? teamMemberFilter.locality : ""),
        )
        .filter((teamMember) =>
          teamMember.firstName
            .concat(" " + teamMember.lastName)
            .toLowerCase()
            .includes(teamMemberFilter?.firstName ? teamMemberFilter.firstName.toLowerCase() : ""),
        )
        .map((teamMember) => (
          <TeamMember key={teamMember.id} teamMember={teamMember} />
        ))}
    </Styled.TeamMemberList>
  );
}

export default TeamMemberList;

import React, { useContext } from "react";

import * as Styled from "./TeamMemberList.styled";

import TeamMember from "./TeamMember";

import { StoreContext } from "../../stores/ContextLoader";

function TeamMemberList() {
  const store = useContext(StoreContext);
  const [teamMembers] = store.teamMembers;
  const [filterOptions] = store.filterOptions;

  return (
    <Styled.TeamMemberList>
      {teamMembers
        ?.sort((a, b) => (a.lastName > b.lastName ? 1 : -1))
        .filter((teamMember) => teamMember.locality.includes(filterOptions?.locality))
        .map((teamMember) => (
          <TeamMember key={teamMember.id} teamMember={teamMember} />
        ))}
    </Styled.TeamMemberList>
  );
}

export default TeamMemberList;

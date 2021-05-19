import React, { useContext } from "react";

import * as Styled from "./TeamMemberList.styled";

import TeamMember from "./TeamMember";

import { StoreContext } from "../../stores/ContextLoader";

function TeamMemberList() {
  const store = useContext(StoreContext);
  const [teamMembers] = store.teamMembers;

  const allMembers = teamMembers?.map((teamMember) => {
    return <TeamMember key={teamMember.id} teamMember={teamMember} />;
  });

  return <Styled.TeamMemberList>{allMembers}</Styled.TeamMemberList>;
}

export default TeamMemberList;

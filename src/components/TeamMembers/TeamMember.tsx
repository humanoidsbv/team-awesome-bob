/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from "react";
import * as Styled from "./TeamMember.styled";

import * as Type from "../../types/types";

interface TeamMemberProps {
  teamMember: Type.TeamMember;
}

function TeamMember({ teamMember }: TeamMemberProps) {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const handleClick = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Styled.TeamMember>
      <Styled.TeamMemberInformation isCollapsed={isCollapsed}>
        <img
          src={`${teamMember.profilePicture ? teamMember.profilePicture : "/assets/default.jpeg"}`}
          alt=""
        />
        <div>
          <p>{`${teamMember.firstName} ${teamMember.lastName}`}</p>
          <p>{teamMember.role}</p>
        </div>
        <button type="button" onClick={handleClick} />
      </Styled.TeamMemberInformation>
      {isCollapsed && (
        <>
          <Styled.TeamMemberMidHeader>
            <p>{`Detailed information about ${teamMember.firstName}`}</p>
          </Styled.TeamMemberMidHeader>
          <Styled.TeamMemberDetails>
            <p>{teamMember.currentEmployer}</p>
            <p>Current employer</p>
            <p>{teamMember.startingDate}</p>
            <p>Starting date</p>
          </Styled.TeamMemberDetails>
        </>
      )}
    </Styled.TeamMember>
  );
}
export default TeamMember;

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
    <Styled.TeamMember isCollapsed={isCollapsed}>
      <Styled.TeamMemberInformation>
        <p>{teamMember.name}</p>
        <p>{teamMember.role}</p>
        <button type="button" onClick={handleClick} />
      </Styled.TeamMemberInformation>
      {isCollapsed && (
        <>
          <div>
            <p>{`Detailed information about ${teamMember.name}`}</p>
          </div>
          <Styled.TeamMemberDetails>
            <p>{teamMember.currentEmployer}</p>
            <p>{teamMember.startingDate}</p>
          </Styled.TeamMemberDetails>
        </>
      )}
    </Styled.TeamMember>
  );
}
export default TeamMember;

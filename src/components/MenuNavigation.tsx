import React from "react";

import * as Styled from "./MenuNavigation.styled";

interface NavProps {
  isOpen: boolean;
}

function MenuNavigation({ isOpen }: NavProps) {
  return (
    <Styled.MenuNavigation isOpen={isOpen}>
      <p>Timesheets</p>
      <p>Team Members</p>
      <p>Projects</p>
      <p>Clients</p>
      <p>Documents</p>
    </Styled.MenuNavigation>
  );
}

export default MenuNavigation;

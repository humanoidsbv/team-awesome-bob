/* eslint-disable react/prop-types */
import React from "react";

import * as Styled from "./MenuNavigation.styled";

function MenuNavigation({ isOpen }) {
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

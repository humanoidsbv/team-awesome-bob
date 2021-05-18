/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import Link from "next/link";

import * as Styled from "./MenuNavigation.styled";

interface NavProps {
  isOpen: boolean;
}

function MenuNavigation({ isOpen }: NavProps) {
  return (
    <Styled.MenuNavigation isOpen={isOpen}>
      <Link href="/">
        <a>Timesheets</a>
      </Link>
      <Link href="/team-members">
        <a>Team Members</a>
      </Link>
      <a>Projects</a>
      <a>Clients</a>
      <a>Documents</a>
    </Styled.MenuNavigation>
  );
}

export default MenuNavigation;

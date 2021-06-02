/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import Link from "next/link";

import * as Styled from "./MenuNavigation.styled";

interface NavProps {
  isOpen: boolean;
  activePage: string;
}
function MenuNavigation({ isOpen, activePage }: NavProps) {
  return (
    <Styled.MenuNavigation data-cy="MenuNavigation" isOpen={isOpen}>
      <Link href="/" passHref>
        <Styled.MenuItem activePage={activePage === "timesheets"}>Timesheets</Styled.MenuItem>
      </Link>
      <Link href="/team-members" passHref>
        <Styled.MenuItem activePage={activePage === "teamMembers"}>Team Members</Styled.MenuItem>
      </Link>
      <Link href="#" passHref>
        <Styled.MenuItem activePage={activePage === "projects"}>Projects</Styled.MenuItem>
      </Link>
      <Link href="#" passHref>
        <Styled.MenuItem activePage={activePage === "clients"}>Clients</Styled.MenuItem>
      </Link>
      <Link href="#" passHref>
        <Styled.MenuItem activePage={activePage === "documents"}>Documents</Styled.MenuItem>
      </Link>
    </Styled.MenuNavigation>
  );
}

export default MenuNavigation;

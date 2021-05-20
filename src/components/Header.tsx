import React, { useState } from "react";

import * as Styled from "./Header.styled";

import MenuNavigation from "./MenuNavigation";

interface HeaderProps {
  activePage: string;
}

function Header({ activePage }: HeaderProps): React.ReactElement {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClick = (): void => setIsOpen(!isOpen);

  return (
    <>
      <Styled.Header isOpen={isOpen}>
        <h1>team awesome</h1>
        <button type="button" onClick={handleClick}>
          <img src="assets/plus-icon.svg" alt="" />
        </button>
      </Styled.Header>
      <MenuNavigation activePage={activePage} isOpen={isOpen} />
    </>
  );
}
export default Header;

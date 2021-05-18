import React, { useState } from "react";

import * as Styled from "./Header.styled";

import MenuNavigation from "./MenuNavigation";

function Header(): React.ReactElement {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleClick = (): void => setIsOpen(!isOpen);

  return (
    <>
      <Styled.Header isOpen={isOpen}>
        <h1>team awesome</h1>
        <div>
          <img src="assets/plus-icon.svg" onClick={handleClick} alt="" />
        </div>
      </Styled.Header>
      <MenuNavigation isOpen={isOpen} />
    </>
  );
}
export default Header;

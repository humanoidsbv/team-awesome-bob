import React, { useState } from "react";
import * as Styled from "./Header.styled";
import MenuNavigation from "./MenuNavigation";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => setIsOpen(!isOpen);

  return (
    <>
      <Styled.Header isOpen={isOpen}>
        <h1>team awesome</h1>
        <div>
          <img src="assets/plus-icon.svg" onClick={handleClick} />
        </div>
      </Styled.Header>
      <MenuNavigation isOpen={isOpen}></MenuNavigation>
    </>
  );
}

export default Header;

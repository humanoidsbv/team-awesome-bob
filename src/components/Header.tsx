/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";

import * as Styled from "./Header.styled";

import MenuNavigation from "./MenuNavigation";

function Header(): React.ReactElement {
  const [isOpen, setIsOpen] = useState<Boolean>(false);
  const handleClick = () => setIsOpen(!isOpen);

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
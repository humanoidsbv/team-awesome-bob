import React, { useState } from "react";
import * as Style from "./Header.styled";
import { NavBox } from "./NavBox";

function Header() {

    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => setIsOpen(!isOpen);
    console.log({isOpen});

  return (
    <>
    <Style.Header isOpen = {isOpen}>
      <h1>team awesome</h1>
      <div>
      <img src="assets/plusje.svg" onClick = {handleClick}/>
      </div>
    </Style.Header>
    <NavBox isOpen={isOpen}></NavBox>
    </>
  );
}

export default Header;

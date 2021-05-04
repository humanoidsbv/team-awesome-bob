import * as Styled from "./NavBox.styled"

function NavBox({isOpen}) {
  
  return (
    <Styled.NavBox isOpen = {isOpen}>
      <p>Timesheets</p>
      <p>Team Members</p> 
      <p>Projects</p> 
      <p>Clients</p>
      <p>Documents</p>     
    </Styled.NavBox>
  );
}

export default NavBox;

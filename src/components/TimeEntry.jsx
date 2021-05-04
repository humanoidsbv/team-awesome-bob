import * as Styled from "./TimeEntry.styled";
import ColorSign from "./ColorSign";

function TimeEntry(props) {
  return (
    <Styled.TimeEntry firstChild={props.firstChild} lastChild={props.lastChild}>
      {props.children} 
    </Styled.TimeEntry>
  );
}

export default TimeEntry;

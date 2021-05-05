import React from "react";

import * as Styled from "./TimeEntry.styled";

function TimeEntry(props) {
  return (
    <Styled.TimeEntry firstChild={props.firstChild} lastChild={props.lastChild}>
      {props.children}
    </Styled.TimeEntry>
  );
}

export default TimeEntry;

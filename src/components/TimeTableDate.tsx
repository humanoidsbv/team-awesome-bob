import React from "react";

import * as Styled from "./TimeTableDate.styled";

function TimeTableDate(props) {
  return <Styled.TimeTableDate isToday={props.isToday}>{props.children}</Styled.TimeTableDate>;
}

export default TimeTableDate;

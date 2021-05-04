import styled from "styled-components";
import TimeEntry from "./TimeEntry"

export const TimeTableDate = styled.div`
  > p {
    opacity: 0.4;
    margin: 10px 5vw;
    font-size: 16px;
  }

  ${TimeEntry}{
    ${(props) => props.isToday ? "* {font-weight: bold}" : ""};
  }

  
`;

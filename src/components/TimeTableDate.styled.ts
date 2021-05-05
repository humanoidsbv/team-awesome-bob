import styled from "styled-components";
import { TimeEntry } from "./TimeEntry.styled";
import { theme } from "../styling/theme";

export const TimeTableDate = styled.div`
  > p {
    opacity: 0.4;
    margin: 10px 5vw;
    font-size: 16px;
  }
  > ${TimeEntry} {
    ${(props) => (props.isToday ? `border-left-color: ${theme.teamAwesomeGreen}` : "")};
    > p:first-child {
      ${(props) => (props.isToday ? "font-weight: bold;" : "")};
    }
  }
`;

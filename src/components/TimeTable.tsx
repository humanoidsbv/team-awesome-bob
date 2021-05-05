import React from "react";

import TimeEntry from "./TimeEntry";
import TimeTableDate from "./TimeTableDate";

function TimeTable() {
  return (
    <>
      <TimeTableDate>
        <p>29-07-2018</p>
        <TimeEntry firstChild lastChild>
          <p>Port of Rotterdam</p>
          <p>09:00 - 18:00</p>
        </TimeEntry>
      </TimeTableDate>

      <TimeTableDate isToday>
        <p>30-07-2018</p>
        <TimeEntry firstChild>
          <p>Port of Rotterdam</p>
          <p>09:00 - 12:00</p>
        </TimeEntry>
        <TimeEntry lastChild>
          <p>Talklow</p>
          <p>13:00 - 18:00</p>
        </TimeEntry>
      </TimeTableDate>

      <TimeTableDate>
        <p>31-07-2018</p>
        <TimeEntry firstChild>
          <p>Port of Rotterdam</p>
          <p>09:00 - 12:00</p>
        </TimeEntry>
        <TimeEntry>
          <p>Talklow</p>
          <p>13:00 - 15:00</p>
        </TimeEntry>
        <TimeEntry lastChild>
          <p>Team Awesome</p>
          <p>15:00 - 19:00</p>
        </TimeEntry>
      </TimeTableDate>

      <TimeTableDate>
        <p>01-08-2018</p>
        <TimeEntry firstChild>
          <p>Port of Rotterdam</p>
          <p>09:00 - 18:00</p>
        </TimeEntry>
        <TimeEntry>
          <p>Port of Rotterdam</p>
          <p>09:00 - 18:00</p>
        </TimeEntry>
        <TimeEntry lastChild>
          <p>Port of Rotterdam</p>
          <p>09:00 - 18:00</p>
        </TimeEntry>
      </TimeTableDate>

      <TimeTableDate>
        <p>02-08-2018</p>
        <TimeEntry firstChild>
          <p>Port of Rotterdam</p>
          <p>09:00 - 18:00</p>
        </TimeEntry>
        <TimeEntry lastChild>
          <p>Port of Rotterdam</p>
          <p>09:00 - 18:00</p>
        </TimeEntry>
      </TimeTableDate>
    </>
  );
}

export default TimeTable;

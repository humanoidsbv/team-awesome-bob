/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from "react";

import * as Styled from "./NewEntryForm.styled";

import * as Type from "../../types/timeEntry";

import NewEntryInput from "./NewEntryInput";
import NewEntryButton from "./NewEntryButton";

import { addTimeEntries } from "../../services/addTimeEntries";

interface NewEntryFormProps {
  fetchTimeEntries: Function;
  isClicked: boolean;
}

function NewEntryForm({ isClicked, fetchTimeEntries }: NewEntryFormProps) {
  const [timeEntryInput, setState] = useState({
    activity: "",
    date: new Date().toISOString().substr(0, 10),
    employer: "",
    endTime: "17:00",
    id: null,
    startTime: "08:00",
  });

  function resetAllFields() {
    setState({
      activity: "",
      date: new Date().toISOString().substr(0, 10),
      employer: "",
      endTime: "17:00",
      id: null,
      startTime: "08:00",
    });
  }

  function convertTimeEntry({ id, employer, activity, date, startTime, endTime }) {
    const newTimeEntry: Type.timeEntry = {
      activity,
      client: employer,
      endTime: `${date}T${endTime}:00.000Z`,
      id,
      startTime: `${date}T${startTime}:00.000Z`,
    };
    addTimeEntries(JSON.stringify(newTimeEntry));
    resetAllFields();
  }

  const saveTimeEntry = (event) => {
    event.preventDefault();
    convertTimeEntry(timeEntryInput);
    fetchTimeEntries();
  };

  const updateTimeEntry = (event) => {
    setState({
      ...timeEntryInput,
      [event.target.name]: event.target.value,
    });
  };

  return (
    <Styled.NewEntryForm isClicked={isClicked} onSubmit={saveTimeEntry}>
      <NewEntryInput>
        <label htmlFor="Employer"> Employer:</label>
        <input
          id="Employer"
          name="employer"
          onChange={updateTimeEntry}
          type=""
          value={timeEntryInput.employer}
        />
      </NewEntryInput>

      <NewEntryInput>
        <label htmlFor="Activity"> Activity:</label>
        <input
          id="Activity"
          name="activity"
          onChange={updateTimeEntry}
          type=""
          value={timeEntryInput.activity}
        />
      </NewEntryInput>

      <NewEntryInput>
        <label htmlFor="Date"> Date:</label>
        <input
          id="Date"
          name="date"
          onChange={updateTimeEntry}
          type="date"
          value={timeEntryInput.date}
        />
      </NewEntryInput>

      <div>
        <NewEntryInput>
          <label htmlFor="Start Time"> Start Time:</label>
          <input
            id="Start Time"
            name="startTime"
            onChange={updateTimeEntry}
            type="time"
            value={timeEntryInput.startTime}
          />
        </NewEntryInput>

        <NewEntryInput>
          <label htmlFor="End Time"> End Time:</label>
          <input
            id="End Time"
            name="endTime"
            onChange={updateTimeEntry}
            type="time"
            value={timeEntryInput.endTime}
          />
        </NewEntryInput>
      </div>
      <NewEntryButton>Add</NewEntryButton>
    </Styled.NewEntryForm>
  );
}

export default NewEntryForm;

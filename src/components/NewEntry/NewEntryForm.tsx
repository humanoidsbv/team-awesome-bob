import React, { useState, useRef, useContext } from "react";

import * as Styled from "./NewEntryForm.styled";

import * as Type from "../../types/timeEntry";

import NewEntryInput from "./NewEntryInput";
import NewEntryButton from "./NewEntryButton";

import { addTimeEntries } from "../../services/addTimeEntries";

import { StoreContext } from "../../stores/ContextLoader";

interface NewEntryFormProps {
  isActive: boolean;
  handleActive: Function;
}

function NewEntryForm({ isActive, handleActive }: NewEntryFormProps) {
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
  const store = useContext(StoreContext);
  const [timeEntries, setTimeEntries] = store.timeEntriesUseState;

  function convertTimeEntry({ employer, activity, date, startTime, endTime }) {
    const newTimeEntry: Type.timeEntry = {
      activity,
      client: employer,
      endTime: `${date}T${endTime}:00.000Z`,
      id: timeEntries.length + 1,
      startTime: `${date}T${startTime}:00.000Z`,
    };
    addTimeEntries(JSON.stringify(newTimeEntry));
    timeEntries.push(newTimeEntry);
    resetAllFields();
  }

  const saveTimeEntry = (event) => {
    handleActive();
    event.preventDefault();
    convertTimeEntry(timeEntryInput);
  };

  const updateTimeEntry = (event) => {
    setState({
      ...timeEntryInput,
      [event.target.id]: event.target.value,
    });
  };

  const formRef = useRef<HTMLFormElement>(null);

  const [isValid, setIsValid] = useState(false);
  const handleBlur = () => {
    setIsValid(formRef.current?.checkValidity());
  };

  return (
    <Styled.NewEntryForm
      isActive={isActive}
      onChange={handleBlur}
      onSubmit={saveTimeEntry}
      ref={formRef}
    >
      <NewEntryInput>
        <label htmlFor="employer">
          Employer:
          <input
            id="employer"
            required
            onChange={updateTimeEntry}
            value={timeEntryInput.employer}
          />
        </label>
      </NewEntryInput>

      <NewEntryInput>
        <label htmlFor="activity">
          Activity:
          <input
            id="activity"
            required
            onChange={updateTimeEntry}
            value={timeEntryInput.activity}
          />
        </label>
      </NewEntryInput>

      <NewEntryInput>
        <label htmlFor="date">
          Date:
          <input id="date" onChange={updateTimeEntry} type="date" value={timeEntryInput.date} />
        </label>
      </NewEntryInput>

      <div>
        <NewEntryInput>
          <label htmlFor="startTime">
            Start Time:
            <input
              id="startTime"
              onChange={updateTimeEntry}
              type="time"
              value={timeEntryInput.startTime}
            />
          </label>
        </NewEntryInput>

        <NewEntryInput>
          <label htmlFor="endTime">
            End Time:
            <input
              id="endTime"
              onChange={updateTimeEntry}
              type="time"
              value={timeEntryInput.endTime}
            />
          </label>
        </NewEntryInput>
      </div>
      <NewEntryButton isValid={isValid}>
        {isValid ? "Add" : "Please fill in required fields"}
      </NewEntryButton>
    </Styled.NewEntryForm>
  );
}

export default NewEntryForm;
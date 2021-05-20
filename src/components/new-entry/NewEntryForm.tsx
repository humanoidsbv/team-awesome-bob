import React, { useState, useRef, useContext } from "react";

import * as Styled from "./NewEntryForm.styled";

import * as Type from "../../types/types";

import InputField from "../InputField";
import NewEntryButton from "./NewEntryButton";

import { addTimeEntries } from "../../services/time-entries/addTimeEntries";

import { StoreContext } from "../../stores/ContextLoader";

interface NewEntryFormProps {
  isActive: boolean;
  handleActive: Function;
}

const NewEntryForm = ({ isActive, handleActive }: NewEntryFormProps) => {
  const [isFormValid, setIsFormValid] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const [timeEntryInput, setTimeEntryInput] = useState({
    activity: "",
    date: new Date().toISOString().substr(0, 10),
    employer: "",
    endTime: "17:00",
    id: null,
    startTime: "08:00",
  });

  function resetAllFields() {
    setTimeEntryInput({
      activity: "",
      date: new Date().toISOString().substr(0, 10),
      employer: "",
      endTime: "17:00",
      id: null,
      startTime: "08:00",
    });
    setIsFormValid(false);
  }
  const store = useContext(StoreContext);
  const [timeEntries] = store.timeEntries;

  function convertTimeEntry({ employer, activity, date, startTime, endTime }) {
    const newTimeEntry: Type.TimeEntry = {
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
    setTimeEntryInput({
      ...timeEntryInput,
      [event.target.id]: event.target.value,
    });
    setIsFormValid(formRef.current?.checkValidity());
  };

  return (
    <Styled.NewEntryForm isActive={isActive} onSubmit={saveTimeEntry} ref={formRef}>
      <InputField
        id="employer"
        type="text"
        inputValue={timeEntryInput.employer}
        labelValue="Employer"
        isRequired
        onChange={updateTimeEntry}
      />

      <InputField
        id="activity"
        type="text"
        inputValue={timeEntryInput.activity}
        labelValue="Activity"
        onChange={updateTimeEntry}
        isRequired
      />

      <InputField
        id="date"
        type="date"
        inputValue={timeEntryInput.date}
        labelValue="Date"
        onChange={updateTimeEntry}
      />

      <Styled.DoubleInput>
        <InputField
          id="startTime"
          type="time"
          inputValue={timeEntryInput.startTime}
          labelValue="From"
          onChange={updateTimeEntry}
        />

        <InputField
          id="endTime"
          type="time"
          inputValue={timeEntryInput.endTime}
          labelValue="To"
          onChange={updateTimeEntry}
        />
      </Styled.DoubleInput>
      <Styled.SubmitButton isVisible disabled={!isFormValid}>
        {isFormValid ? "Add" : "Please fill in required fields"}
      </Styled.SubmitButton>
    </Styled.NewEntryForm>
  );
};

export default NewEntryForm;

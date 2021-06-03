import React, { useState, useRef } from "react";

import * as Styled from "./NewEntryForm.styled";
import * as Type from "../../types/types";

import InputField from "../InputField";

import { addTimeEntries } from "../../services/time-entries/addTimeEntries";
import { useStore } from "../../stores/ZustandStore";
import EntryButton from "../entrybutton/EntryButton";

interface NewEntryFormProps {
  isActive: boolean;
  handleActive: Function;
}

const NewEntryForm = ({ isActive, handleActive }: NewEntryFormProps) => {
  const timeEntries = useStore((state) => state.timeEntries);
  const setTimeEntries = useStore((state) => state.setTimeEntries);

  const [isFormValid, setIsFormValid] = useState(false);

  const formRef = useRef<HTMLFormElement>(null);

  const [timeEntryInput, setTimeEntryInput] = useState({
    activity: "",
    date: new Date().toISOString().substr(0, 10),
    employer: "",
    endTime: "17:00",
    startTime: "08:00",
  });

  function resetAllFields() {
    setTimeEntryInput({
      activity: "",
      date: new Date().toISOString().substr(0, 10),
      employer: "",
      endTime: "17:00",
      startTime: "08:00",
    });
    setIsFormValid(false);
  }

  const convertTimeEntry = ({ employer, activity, date, startTime, endTime }) => {
    const newTimeEntry: Type.TimeEntry = {
      id: null,
      activity,
      client: employer,
      endTime: `${date}T${endTime}:00.000Z`,
      startTime: `${date}T${startTime}:00.000Z`,
    };

    addTimeEntries(newTimeEntry);
    setTimeEntries([...timeEntries, newTimeEntry]);
    resetAllFields();
  };

  const saveTimeEntry = (event) => {
    event.preventDefault();
    handleActive();
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
      <EntryButton
        label={isFormValid ? "Add" : "Please fill in required fields"}
        isVisible
        type="AddButton"
        disabled={!isFormValid}
      />
    </Styled.NewEntryForm>
  );
};

export default NewEntryForm;

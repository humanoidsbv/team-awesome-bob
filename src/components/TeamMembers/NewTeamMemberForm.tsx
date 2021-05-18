import React, { useState, useRef, useContext } from "react";

import * as Styled from "./NewTeamMemberForm.styled";

import { StoreContext } from "../../stores/ContextLoader";

import { addTeamMembers } from "../../services/teamMembers/addTeamMembers";

import NewTeamMemberInput from "./NewTeamMemberInput";

function NewTeamMemberForm() {
  const [isActive, setIsActive] = useState(true);
  const handleActive = () => setIsActive(!isActive);

  const store = useContext(StoreContext);
  const [teamMembers] = store.teamMembers;

  const formRef = useRef<HTMLFormElement>(null);

  const [teamMemberInput, setTeamMemberInput] = useState({
    id: null,
    name: "",
    role: "",
    currentEmployer: "",
    startingDate: "",
    profilePicture: "",
  });

  const resetAllFields = () => {
    setTeamMemberInput({
      ...teamMemberInput,
      id: null,
      name: "",
      role: "",
      currentEmployer: "",
      startingDate: "",
      profilePicture: "",
    });
  };

  const updateTeamMember = () => {
    setTeamMemberInput({
      ...teamMemberInput,
      name: teamMemberInput.name,
      role: teamMemberInput.role,
      currentEmployer: teamMemberInput.currentEmployer,
      startingDate: teamMemberInput.startingDate,
    });
  };
  const saveTeamMember = (event) => {
    handleActive();
    event.preventDefault();
    addTeamMembers(JSON.stringify(teamMemberInput));
    teamMembers.push(teamMemberInput);
    resetAllFields();
  };

  return (
    <Styled.NewTeamMemberForm
      isActive={isActive}
      handleActive={handleActive}
      onSubmit={saveTeamMember}
      ref={formRef}
    >
      <NewTeamMemberInput
        id="name"
        type="text"
        inputValue={teamMemberInput.name}
        labelValue="Name"
        isRequired
        updateTeamMember={updateTeamMember}
      />
      <NewTeamMemberInput
        id="role"
        type="text"
        inputValue={teamMemberInput.role}
        labelValue="Role"
        isRequired
        updateTeamMember={updateTeamMember}
      />
      <NewTeamMemberInput
        id="currentEmployer"
        type="text"
        inputValue={teamMemberInput.currentEmployer}
        labelValue="Current Employer"
        isRequired
        updateTeamMember={updateTeamMember}
      />
    </Styled.NewTeamMemberForm>
  );
}

export default NewTeamMemberForm;

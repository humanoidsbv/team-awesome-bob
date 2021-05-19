/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useRef, useContext } from "react";

import { ST } from "next/dist/next-server/lib/utils";
import * as Styled from "./NewTeamMemberForm.styled";

import { StoreContext } from "../../stores/ContextLoader";

import { addTeamMembers } from "../../services/teamMembers/addTeamMembers";

import NewTeamMemberInput from "./NewTeamMemberInput";
import NewEntryButton from "../NewEntry/NewEntryButton";

function NewTeamMemberForm() {
  const [isActive, setIsActive] = useState(true);
  const handleActive = () => setIsActive(!isActive);

  const [isFormValid, setIsFormValid] = useState(false);

  const store = useContext(StoreContext);
  const [teamMembers] = store.teamMembers;

  const formRef = useRef<HTMLFormElement>();

  const [teamMemberInput, setTeamMemberInput] = useState({
    id: null,
    firstName: "",
    lastName: "",
    email: "",
    bio: "",
    address: "",
    zipCode: "",
    city: "",
    role: "",
    socialTwitter: "",
    socialFacebook: "",
    currentEmployer: "",
    startingDate: "",
    profilePicture: "",
  });

  const resetAllFields = () => {
    setTeamMemberInput({
      id: null,
      firstName: "",
      lastName: "",
      email: "",
      bio: "",
      address: "",
      zipCode: "",
      city: "",
      role: "",
      socialTwitter: "",
      socialFacebook: "",
      currentEmployer: "",
      startingDate: "",
      profilePicture: "",
    });
    setIsFormValid(false);
  };

  const updateTeamMember = (event) => {
    setTeamMemberInput({
      ...teamMemberInput,
      [event.target.id]: event.target.value,
    });
    setIsFormValid(formRef.current?.checkValidity());
  };

  const saveTeamMember = (event) => {
    handleActive();
    event.preventDefault();
    addTeamMembers(JSON.stringify(teamMemberInput));
    teamMembers.push(teamMemberInput);
    resetAllFields();
  };

  return (
    <Styled.NewTeamMembersDesktopForm>
      <NewEntryButton isValid={isFormValid}>
        {isFormValid ? "Add" : "Please fill in required fields"}
      </NewEntryButton>
      <Styled.NewTeamMemberForm isActive={isActive} onSubmit={saveTeamMember} ref={formRef}>
        <Styled.NewTeamMemberAvatarColumn>test</Styled.NewTeamMemberAvatarColumn>

        <Styled.NewTeamMemberPersonaliaColumn>
          <Styled.NewTeamMemberDoubleFields>
            <NewTeamMemberInput
              id="firstName"
              type="text"
              inputSize="small"
              inputValue={teamMemberInput.firstName}
              labelValue="First Name"
              isRequired
              updateTeamMember={updateTeamMember}
            />
            <NewTeamMemberInput
              id="lastName"
              type="text"
              inputValue={teamMemberInput.lastName}
              labelValue="Last Name"
              isRequired
              updateTeamMember={updateTeamMember}
            />
          </Styled.NewTeamMemberDoubleFields>
          <NewTeamMemberInput
            id="email"
            type="text"
            inputValue={teamMemberInput.email}
            labelValue="Email Address"
            isRequired
            updateTeamMember={updateTeamMember}
          />
          <NewTeamMemberInput
            id="bio"
            type="textarea"
            inputValue={teamMemberInput.bio}
            labelValue="Bio"
            updateTeamMember={updateTeamMember}
          />
        </Styled.NewTeamMemberPersonaliaColumn>
        <Styled.NewTeamMembersDivider />
        <Styled.NewTeamMemberSocialColumn>
          <NewTeamMemberInput
            id="address"
            type="text"
            inputValue={teamMemberInput.address}
            labelValue="Address"
            isRequired
            updateTeamMember={updateTeamMember}
          />
          <Styled.NewTeamMemberDoubleFields>
            <NewTeamMemberInput
              id="zipCode"
              type="text"
              inputValue={teamMemberInput.zipCode}
              labelValue="zipCode"
              isRequired
              updateTeamMember={updateTeamMember}
            />
            <NewTeamMemberInput
              id="city"
              type="text"
              inputValue={teamMemberInput.city}
              labelValue="City"
              isRequired
              updateTeamMember={updateTeamMember}
            />
          </Styled.NewTeamMemberDoubleFields>
          <NewTeamMemberInput
            id="socialFacebook"
            type="text"
            inputValue={teamMemberInput.socialFacebook}
            labelValue="Facebook"
            isRequired
            updateTeamMember={updateTeamMember}
          />
          <NewTeamMemberInput
            id="socialTwitter"
            type="text"
            inputValue={teamMemberInput.socialTwitter}
            labelValue="Twitter"
            isRequired
            updateTeamMember={updateTeamMember}
          />
        </Styled.NewTeamMemberSocialColumn>
      </Styled.NewTeamMemberForm>
    </Styled.NewTeamMembersDesktopForm>
  );
}

export default NewTeamMemberForm;

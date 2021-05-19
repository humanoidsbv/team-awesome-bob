/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useRef, useContext } from "react";

import * as Styled from "./NewTeamMemberForm.styled";

import { StoreContext } from "../../stores/ContextLoader";

import { addTeamMembers } from "../../services/team-members/addTeamMembers";

import InputField from "../InputField";
import NewEntryButton from "../new-entry/NewEntryButton";

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
    emailAddress: "",
    bio: "",
    address: "",
    postalCode: "",
    locality: "",
    role: "",
    socialTwitter: "Twitter",
    socialFacebook: "Facebook",
    currentEmployer: "",
    startingDate: "",
    profilePicture: "",
  });

  const resetAllFields = () => {
    setTeamMemberInput({
      id: null,
      firstName: "",
      lastName: "",
      emailAddress: "",
      bio: "",
      address: "",
      postalCode: "",
      locality: "",
      role: "",
      socialTwitter: "Twitter",
      socialFacebook: "Facebook",
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
    <Styled.NewTeamMembersDesktopForm isActive={isActive} onSubmit={saveTeamMember} ref={formRef}>
      <NewEntryButton isValid={isFormValid}>
        {isFormValid ? "Add" : "Please fill in required fields"}
      </NewEntryButton>
      <Styled.Tab>
        <p>Personal Details</p>
        <p>Work Details</p>
      </Styled.Tab>
      <Styled.NewTeamMemberForm>
        <Styled.NewTeamMemberAvatarColumn>
          <img src="/assets/default.jpeg" alt="" />
          <button type="button">Edit Avatar</button>
        </Styled.NewTeamMemberAvatarColumn>
        <Styled.NewTeamMembersDivider />
        <Styled.NewTeamMemberPersonaliaColumn>
          <Styled.NewTeamMemberDoubleFields>
            <InputField
              id="firstName"
              type="text"
              inputSize="small"
              inputValue={teamMemberInput.firstName}
              labelValue="First Name"
              isRequired
              onChange={updateTeamMember}
            />
            <InputField
              onChange={updateTeamMember}
              id="lastName"
              type="text"
              inputValue={teamMemberInput.lastName}
              labelValue="Last Name"
              isRequired
            />
          </Styled.NewTeamMemberDoubleFields>
          <InputField
            id="emailAddress"
            type="text"
            inputValue={teamMemberInput.emailAddress}
            labelValue="Email Address"
            isRequired
            onChange={updateTeamMember}
          />
          <InputField
            id="bio"
            type="textarea"
            inputValue={teamMemberInput.bio}
            labelValue="Bio"
            onChange={updateTeamMember}
          />
        </Styled.NewTeamMemberPersonaliaColumn>
        <Styled.NewTeamMembersDivider />
        <Styled.NewTeamMemberPersonaliaColumn>
          <InputField
            id="address"
            type="text"
            inputValue={teamMemberInput.address}
            labelValue="Address"
            isRequired
            onChange={updateTeamMember}
          />
          <Styled.NewTeamMemberDoubleFields>
            <InputField
              id="postalCode"
              type="text"
              inputValue={teamMemberInput.postalCode}
              labelValue="Postal Code"
              isRequired
              onChange={updateTeamMember}
            />
            <InputField
              id="locality"
              type="text"
              inputValue={teamMemberInput.locality}
              labelValue="Locality"
              isRequired
              onChange={updateTeamMember}
            />
          </Styled.NewTeamMemberDoubleFields>
          <Styled.SocialMedia>
            <InputField
              id="socialFacebook"
              type="text"
              inputValue={teamMemberInput.socialFacebook}
              labelValue="Social Media"
              isRequired
              socialIcon="assets/facebook.png"
              onChange={updateTeamMember}
            />
            <InputField
              id="socialTwitter"
              type="text"
              inputValue={teamMemberInput.socialTwitter}
              labelValue=""
              isRequired
              hasLabel={false}
              socialIcon="assets/twitter.jpeg"
              onChange={updateTeamMember}
            />
          </Styled.SocialMedia>
        </Styled.NewTeamMemberPersonaliaColumn>
      </Styled.NewTeamMemberForm>
    </Styled.NewTeamMembersDesktopForm>
  );
}

export default NewTeamMemberForm;

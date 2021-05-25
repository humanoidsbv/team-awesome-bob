import React, { useState, useRef, useContext } from "react";

import * as Styled from "./NewTeamMemberForm.styled";

import { StoreContext } from "../../stores/ContextLoader";

import { addTeamMembers } from "../../services/team-members/addTeamMembers";

import InputField from "../InputField";

function NewTeamMemberForm() {
  const [isActive, setIsActive] = useState(true);
  const handleActive = () => setIsActive(!isActive);

  const [isFormValid, setIsFormValid] = useState(false);

  const store = useContext(StoreContext);
  const [teamMembers, setTeamMembers] = store.teamMembers;

  const formRef = useRef<HTMLFormElement>();

  const mockTeamMember = {
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
  };
  const [teamMemberInput, setTeamMemberInput] = useState(mockTeamMember);

  const resetAllFields = () => {
    setTeamMemberInput(mockTeamMember);
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
    addTeamMembers(teamMemberInput);
    setTeamMembers([...teamMembers, teamMemberInput]);
    resetAllFields();
  };

  return (
    <Styled.NewTeamMembersDesktopForm onSubmit={saveTeamMember} ref={formRef}>
      <Styled.SubmitButton isVisible disabled={!isFormValid} type="submit">
        {isFormValid ? "Add" : "Please fill in required fields"}
      </Styled.SubmitButton>
      <Styled.CancelButton type="button">cancel</Styled.CancelButton>
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
              inputValue={teamMemberInput.firstName}
              isRequired
              labelValue="First Name"
              onChange={updateTeamMember}
              type="text"
            />
            <InputField
              id="lastName"
              inputValue={teamMemberInput.lastName}
              isRequired
              labelValue="Last Name"
              onChange={updateTeamMember}
              type="text"
            />
          </Styled.NewTeamMemberDoubleFields>
          <InputField
            id="emailAddress"
            inputValue={teamMemberInput.emailAddress}
            isRequired
            labelValue="Email Address"
            onChange={updateTeamMember}
            type="text"
          />
          <InputField
            id="bio"
            inputValue={teamMemberInput.bio}
            labelValue="Bio"
            onChange={updateTeamMember}
            type="textarea"
          />
        </Styled.NewTeamMemberPersonaliaColumn>
        <Styled.NewTeamMembersDivider />
        <Styled.NewTeamMemberPersonaliaColumn>
          <InputField
            id="address"
            inputValue={teamMemberInput.address}
            isRequired
            labelValue="Address"
            onChange={updateTeamMember}
            type="text"
          />
          <Styled.NewTeamMemberDoubleFields>
            <InputField
              id="postalCode"
              inputValue={teamMemberInput.postalCode}
              isRequired
              labelValue="Postal Code"
              onChange={updateTeamMember}
              type="text"
            />
            <InputField
              id="locality"
              inputValue={teamMemberInput.locality}
              isRequired
              labelValue="Locality"
              onChange={updateTeamMember}
              type="text"
            />
          </Styled.NewTeamMemberDoubleFields>
          <Styled.SocialMedia>
            <InputField
              id="socialFacebook"
              inputValue={teamMemberInput.socialFacebook}
              isRequired
              labelValue="Social Media"
              onChange={updateTeamMember}
              socialIcon="assets/facebook.png"
              type="text"
            />
            <InputField
              hasLabel={false}
              id="socialTwitter"
              inputValue={teamMemberInput.socialTwitter}
              isRequired
              labelValue=""
              onChange={updateTeamMember}
              socialIcon="assets/twitter.jpeg"
              type="text"
            />
          </Styled.SocialMedia>
        </Styled.NewTeamMemberPersonaliaColumn>
      </Styled.NewTeamMemberForm>
    </Styled.NewTeamMembersDesktopForm>
  );
}

export default NewTeamMemberForm;

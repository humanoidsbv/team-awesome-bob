import React from "react";

export interface TimeEntry {
  id: number;
  client: string;
  activity: string;
  startTime: string;
  endTime: string;
}

export interface TeamMember {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  bio: string;
  address: string;
  zipCode: string;
  city: string;
  role: string;
  socialTwitter: string;
  socialFacebook: string;
  currentEmployer: string;
  startingDate: string;
  profilePicture: string;
}

export type ValidityEvent =
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLTextAreaElement>
  | React.FocusEvent<HTMLInputElement>;

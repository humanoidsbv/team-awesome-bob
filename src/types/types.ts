import React from "react";

export interface TimeEntry {
  activity: string;
  client: string;
  endTime: string;
  id: number;
  startTime: string;
}

export interface TeamMember {
  address: string;
  bio: string;
  currentEmployer: string;
  emailAddress: string;
  firstName: string;
  id: number;
  lastName: string;
  locality: string;
  postalCode: string;
  profilePicture: string;
  role: string;
  socialFacebook: string;
  socialTwitter: string;
  startingDate: string;
}

export interface FilterOptions {
  locality: string;
  name: string;
}

export type ValidityEvent =
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLTextAreaElement>
  | React.FocusEvent<HTMLInputElement>;

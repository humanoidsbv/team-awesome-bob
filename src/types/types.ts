import React from "react";

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

export type ValidityEvent =
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLTextAreaElement>
  | React.FocusEvent<HTMLInputElement>;

export interface TimeEntry {
  activity: string;
  client: string;
  duration?: string;
  durationAsNumber?: number;
  endDateTime?: Date;
  endTime: string;
  firstChild?: boolean;
  id: number;
  lastChild?: boolean;
  startDateTime?: Date;
  startTime: string;
  timeRegistration?: string;
}

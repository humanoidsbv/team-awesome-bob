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
  name: string;
  role: string;
  currentEmployer: string;
  startingDate: string;
  profilePicture: string;
}

export type ValidityEvent =
  | React.ChangeEvent<HTMLInputElement>
  | React.FocusEvent<HTMLInputElement>;

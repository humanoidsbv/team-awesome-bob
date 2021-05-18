import React from "react";

export interface timeEntry {
  id: number;
  client: string;
  activity: string;
  startTime: string;
  endTime: string;
}

export type validityEvent =
  | React.ChangeEvent<HTMLInputElement>
  | React.FocusEvent<HTMLInputElement>;

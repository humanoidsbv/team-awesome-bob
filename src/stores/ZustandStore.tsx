/* eslint-disable no-unused-vars */
import create from "zustand";

import * as Type from "../types/types";
import { TimeEntry } from "../types/types";

type State = {
  rawTimeEntries: Type.RawTimeEntry[];
  setRawTimeEntries: (input: Type.RawTimeEntry[]) => void;
  setTeamMemberFilter: (input: Type.TeamMember) => void;
  setTeamMembers: (input: Type.TeamMember[]) => void;
  setTimeEntries: (input: TimeEntry[]) => void;
  setTimeEntryFilter: (input: Type.TimeEntry) => void;
  teamMemberFilter: Type.TeamMember;
  teamMembers: Type.TeamMember[];
  timeEntries: Type.TimeEntry[];
  timeEntryFilter: Type.TimeEntry;
};

export const useStore = create<State>((set) => ({
  rawTimeEntries: [],
  setRawTimeEntries: (input) => set({ rawTimeEntries: input }),
  setTeamMemberFilter: (input) => set({ teamMemberFilter: input }),
  setTeamMembers: (input) => set({ teamMembers: input }),
  setTimeEntries: (input) => set({ timeEntries: input }),
  setTimeEntryFilter: (input) => set({ timeEntryFilter: input }),
  teamMemberFilter: null,
  teamMembers: [],
  timeEntries: [],
  timeEntryFilter: null,
}));

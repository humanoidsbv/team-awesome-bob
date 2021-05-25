import React, { createContext, useState } from "react";

import * as Type from "../types/types";

interface StoreProvicerProps {
  children: React.ReactNode;
}

interface StoreContextProps {
  timeEntries: [Type.TimeEntry[], React.Dispatch<React.SetStateAction<Type.TimeEntry[]>>];
  teamMembers: [Type.TeamMember[], React.Dispatch<React.SetStateAction<Type.TeamMember[]>>];
  filterOptions: [Type.FilterOptions, React.Dispatch<React.SetStateAction<Type.FilterOptions>>];
}

export const StoreContext = createContext<StoreContextProps>(null);

export function StoreProvider({ children }: StoreProvicerProps) {
  const context = {
    timeEntries: useState<Type.TimeEntry[]>(),
    teamMembers: useState<Type.TeamMember[]>(),
    filterOptions: useState<Type.FilterOptions>(),
  };
  return <StoreContext.Provider value={context}>{children}</StoreContext.Provider>;
}

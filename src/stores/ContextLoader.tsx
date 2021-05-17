import React, { createContext, useState } from "react";

import * as Type from "../types/types";

interface StoreProvicerProps {
  children: React.ReactChildren;
}

interface StoreContextProps {
  timeEntries: [Type.timeEntry[], React.Dispatch<React.SetStateAction<Type.timeEntry[]>>];
}

export const StoreContext = createContext<StoreContextProps>(null);

export function StoreProvider({ children }: StoreProvicerProps) {
  const context = {
    timeEntries: useState<Type.timeEntry[]>(),
  };
  return <StoreContext.Provider value={context}>{children}</StoreContext.Provider>;
}

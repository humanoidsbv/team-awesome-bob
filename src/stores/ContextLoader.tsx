import React, { createContext, useState } from "react";

import * as Type from "../types/timeEntry";

interface StoreProvicerProps {
  children;
}

interface StoreContextProps {
  timeEntriesUseState: any;
}

export const StoreContext = createContext<StoreContextProps>([]);

export function StoreProvider({ children }: StoreProvicerProps) {
  const context = {
    timeEntriesUseState: useState<Type.timeEntry[]>(),
  };
  return <StoreContext.Provider value={context}>{children}</StoreContext.Provider>;
}

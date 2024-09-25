"use client";
import React, {
  CreateContext,
  useState,
  useContext,
  createContext,
} from "react";
import themes from "./theme";

export const GlobalContext = CreateContext();
export const GlobalUpdateContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [selectedTheme, setSelectedTheme] = useState(0);
  const theme = themes[selectedTheme];

  return (
    <GlobalContext.Provider value={{ theme }}>
      <GlobalUpdateContext.Provider value={setGlobalState}>
        {children}
      </GlobalUpdateContext.Provider>
    </GlobalContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalContext);
export const useGlobalUpdate = () => useContext(useGlobalUpdateContext);

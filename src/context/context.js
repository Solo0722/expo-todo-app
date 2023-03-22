import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useState, useMemo } from "react";
import { usePersistedState } from "../helpers/hooks/usePersistedState";

export const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = usePersistedState(
    "loggedInUser",
    null
  );

  const contextProviderValue = useMemo(
    () => ({ loggedInUser, setLoggedInUser }),
    [loggedInUser, setLoggedInUser]
  );

  return (
    <GlobalContext.Provider value={contextProviderValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;

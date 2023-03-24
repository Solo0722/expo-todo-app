import React, { createContext, useMemo } from "react";
import { usePersistedState } from "../helpers/hooks/usePersistedState";

export const GlobalContext = createContext({});

const GlobalProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = usePersistedState(
    "loggedInUser",
    null
  );
  const [tasks, setTasks] = usePersistedState("tasks", []);
  const [taskCategories, setTaskCategories] = usePersistedState(
    "taskCategories",
    []
  );

  const contextProviderValue = useMemo(
    () => ({
      loggedInUser,
      setLoggedInUser,
      taskCategories,
      tasks,
      setTaskCategories,
      setTasks,
    }),
    [
      loggedInUser,
      setLoggedInUser,
      taskCategories,
      tasks,
      setTaskCategories,
      setTasks,
    ]
  );

  return (
    <GlobalContext.Provider value={contextProviderValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalProvider;

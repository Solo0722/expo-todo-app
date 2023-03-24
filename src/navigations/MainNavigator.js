import React, { useContext } from "react";
import { GlobalContext } from "../context/context";
import AuthNavigator from "./AuthNavigator";
import DrawerNavigator from "./DrawerNavigator";

const MainNavigator = () => {
  const { loggedInUser } = useContext(GlobalContext);

  return <>{loggedInUser ? <DrawerNavigator /> : <AuthNavigator />}</>;
};

export default MainNavigator;

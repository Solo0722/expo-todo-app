import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { TABNAVIGATOR } from "../constants/routeNames";
import TabNavigator from "./TabNavigator";

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={TABNAVIGATOR}
    >
      <Drawer.Screen name={TABNAVIGATOR} component={TabNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

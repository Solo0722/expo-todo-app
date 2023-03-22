import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  DONATE,
  FAQS,
  MINENAVIGATOR,
  PROFILE,
  SETTINGS,
  TABNAVIGATOR,
} from "../constants/routeNames";
import TabNavigator from "./TabNavigator";
import Drawerbar from "../components/Drawerbar";
import MineNavigator from "./MineNavigator";
import { enableScreens } from "react-native-screens";
import Profile from "../screens/Profile";
import Settings from "../screens/Settings";
import Donate from "../screens/Donate";
import Faqs from "../screens/Faqs";
import BackButton from "../components/BackButton";
enableScreens();

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  const getDrawerbar = () => <Drawerbar />;

  return (
    <Drawer.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={TABNAVIGATOR}
      drawerContent={getDrawerbar}
    >
      <Drawer.Screen name={TABNAVIGATOR} component={TabNavigator} />
      <Drawer.Screen
        name={PROFILE}
        component={Profile}
        options={{ headerShown: true, headerLeft: () => <BackButton /> }}
      />
      <Drawer.Screen
        name={SETTINGS}
        component={Settings}
        options={{ headerShown: true, headerLeft: () => <BackButton /> }}
      />
      <Drawer.Screen
        name={DONATE}
        component={Donate}
        options={{ headerShown: true, headerLeft: () => <BackButton /> }}
      />
      <Drawer.Screen
        name={FAQS}
        component={Faqs}
        options={{ headerShown: true, headerLeft: () => <BackButton /> }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

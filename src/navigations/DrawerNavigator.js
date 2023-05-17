import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  DONATE,
  PROFILE,
  SETTINGS,
  TABNAVIGATOR,
  WELCOME,
} from "../constants/routeNames";
import TabNavigator from "./TabNavigator";
import Drawerbar from "../components/Drawerbar";
import { enableScreens } from "react-native-screens";
import Profile from "../screens/Profile";
import Settings from "../screens/Settings";
import Donate from "../screens/Donate";
import BackButton from "../components/BackButton";
import { colors } from "../theme/theme";
import Welcome from "../screens/Welcome";
import { useContext } from "react";
import { GlobalContext } from "../context/context";
enableScreens();

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  const getDrawerbar = () => <Drawerbar />;

  const defaultOptions = {
    headerShown: true,
  };

  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        headerLeft: () => <BackButton />,
        sceneContainerStyle: {
          backgroundColor: `${colors.secondaryColor}`,
        },
        headerStyle: {
          backgroundColor: `${colors.secondaryColor}`,
          elevation: 0,
        },
        headerTitleStyle: {
          fontFamily: "bellota-bold",
          fontSize: 18,
        },
      }}
      initialRouteName={TABNAVIGATOR}
      drawerContent={getDrawerbar}
    >
      <Drawer.Screen name={TABNAVIGATOR} component={TabNavigator} />
      <Drawer.Screen
        name={PROFILE}
        component={Profile}
        options={{ ...defaultOptions }}
      />
      <Drawer.Screen
        name={SETTINGS}
        component={Settings}
        options={{ ...defaultOptions }}
      />
      <Drawer.Screen
        name={DONATE}
        component={Donate}
        options={{
          ...defaultOptions,
          headerStyle: { backgroundColor: "#c7d2fe" },
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

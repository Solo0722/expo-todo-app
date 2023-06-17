import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import {
  CALENDAR,
  CLASSES,
  NOTES,
  PROFILE,
  TASKSNAVIGATOR,
} from "../constants/routeNames";
import TabBar from "../components/TabBar";
import Classes from "../screens/Classes";
import Calendar from "../screens/Calendar";
import Profile from "../screens/Profile";
import { colors } from "../theme/theme";
import Notes from "../screens/Notes";
import TabHeader from "../components/TabHeader";

const TabNavigator = () => {
  const tabs = [
    {
      name: NOTES,
      label: "Notes",
      component: Notes,
      activeIconName: "reader",
      inactiveIconName: "reader-outline",
    },
    {
      name: CLASSES,
      label: "Classes",
      component: Classes,
      activeIconName: "school",
      inactiveIconName: "school-outline",
    },
    {
      name: CALENDAR,
      label: "Calendar",
      component: Calendar,
      activeIconName: "calendar-sharp",
      inactiveIconName: "calendar-outline",
    },
    {
      name: PROFILE,
      label: "Profile",
      component: Profile,
      activeIconName: "person",
      inactiveIconName: "person-outline",
    },
  ];

  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      tabBar={(props) => {
        return <TabBar {...props} />;
      }}
      initialRouteName={TASKSNAVIGATOR}
      sceneContainerStyle={{
        backgroundColor: `${colors.backgroundColor}`,
      }}
      screenOptions={{
        tabBarHideOnKeyboard: true,
        header: (props) => <TabHeader {...props} />,
        headerShown: true,
      }}
    >
      {tabs.map((_, index) => {
        return (
          <Tab.Screen
            key={index}
            name={_.name}
            component={_.component}
            options={{
              tabBarLabel: _.label,
              tabBarActiveIcon: _.activeIconName,
              tabBarInactiveIcon: _.inactiveIconName,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default TabNavigator;

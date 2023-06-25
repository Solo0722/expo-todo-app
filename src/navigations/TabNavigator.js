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
      tabbarHeaderTitle: "My Notes",
      tabHeaderBtns: [
        { iconName: "add-circle", onPress: () => null },
        { iconName: "search", onPress: () => null },
        { iconName: "person-circle", onPress: () => null },
      ],
    },
    {
      name: CLASSES,
      label: "Classes",
      component: Classes,
      activeIconName: "school",
      inactiveIconName: "school-outline",
      tabbarHeaderTitle: "My Classes",
      tabHeaderBtns: [
        { iconName: "add-circle", onPress: () => null },
        { iconName: "search", onPress: () => null },
      ],
    },
    {
      name: CALENDAR,
      label: "Calendar",
      component: Calendar,
      activeIconName: "calendar-sharp",
      inactiveIconName: "calendar-outline",
      tabbarHeaderTitle: "Calendar",
      tabHeaderBtns: [
        // {iconName:"",onPress:() => null},
        // {iconName:"",onPress:() => null},
      ],
    },
    {
      name: PROFILE,
      label: "Profile",
      component: Profile,
      activeIconName: "person",
      inactiveIconName: "person-outline",
      tabbarHeaderTitle: "My Profile",
      tabHeaderBtns: [
        // {iconName:"",onPress:() => null},
        // {iconName:"",onPress:() => null},
      ],
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
              header: (props) => (
                <TabHeader
                  {...props}
                  title={_.tabbarHeaderTitle}
                  iconButtons={_.tabHeaderBtns}
                />
              ),
              headerShown:
                _.name == CALENDAR || _.name == PROFILE ? false : true,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default TabNavigator;

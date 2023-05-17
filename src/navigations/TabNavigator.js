import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import {
  CALENDAR,
  CLASSES,
  PROFILE,
  TASKS,
  TASKSNAVIGATOR,
} from "../constants/routeNames";
import TabBar from "../components/TabBar";
import Tasks from "../screens/Tasks";
import Classes from "../screens/Classes";
import Calendar from "../screens/Calendar";
import Profile from "../screens/Profile";
import { colors } from "../theme/theme";

const TabNavigator = () => {
  const tabs = [
    {
      name: TASKS,
      label: "Tasks",
      component: Tasks,
      iconName: "reader-sharp",
    },
    {
      name: CLASSES,
      label: "Classes",
      component: Classes,
      iconName: "school-sharp",
    },
    {
      name: CALENDAR,
      label: "Calendar",
      component: Calendar,
      iconName: "calendar-sharp",
    },
    {
      name: PROFILE,
      label: "Profile",
      component: Profile,
      iconName: "person-sharp",
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
        backgroundColor: `${colors.secondaryColor}`,
      }}
      screenOptions={{
        tabBarHideOnKeyboard: true,
        headerStyle: {
          backgroundColor: `${colors.secondaryColor}`,
        },
        headerTitle: "Hello World",
        headerShadowVisible: false,
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
              tabBarIcon: _.iconName,
              // headerTitle: _.label,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};

export default TabNavigator;

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useLayoutEffect } from "react";
import {
  ADDTOTASKS,
  CALENDARNAVIGATOR,
  CLASSESNAVIGATOR,
  MINENAVIGATOR,
  TASKS,
  TASKSNAVIGATOR,
} from "../constants/routeNames";
import CalendarNavigator from "./CalendarNavigator";
import ClassesNavigator from "./ClassesNavigator";
import MineNavigator from "./MineNavigator";
import TasksNavigator from "./TasksNavigator";
import TabBar from "../components/TabBar";

const TabNavigator = ({ navigation, route }) => {
  const Tab = createBottomTabNavigator();
  const getTabBar = () => <TabBar />;

  return (
    <Tab.Navigator
      tabBar={(props) => {
        return <TabBar {...props} />;
      }}
      initialRouteName={TASKSNAVIGATOR}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          paddingBottom: 10,
          elevation: 5,
          backgroundColor: "#fff",
          display: "none",
        },
        tabBarHideOnKeyboard: true,
        tabBarLabelStyle: {
          fontSize: 12,
        },
      }}
    >
      <Tab.Screen name={MINENAVIGATOR} component={MineNavigator} />
      <Tab.Screen name={TASKSNAVIGATOR} component={TasksNavigator} />
      <Tab.Screen name={CALENDARNAVIGATOR} component={CalendarNavigator} />
      <Tab.Screen name={CLASSESNAVIGATOR} component={ClassesNavigator} />
    </Tab.Navigator>
  );
};

export default TabNavigator;

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { CALENDAR } from "../constants/routeNames";
import Calendar from "../screens/Calendar";

const CalendarNavigator = () => {
  const CalendarStack = createStackNavigator();
  return (
    <CalendarStack.Navigator>
      <CalendarStack.Screen name={CALENDAR} component={Calendar} />
    </CalendarStack.Navigator>
  );
};

export default CalendarNavigator;

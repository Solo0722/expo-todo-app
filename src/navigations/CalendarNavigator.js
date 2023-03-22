import { StyleSheet, Text, View } from "react-native";
import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { CALENDAR } from "../constants/routeNames";
import Calendar from "../screens/Calendar";
import { colors } from "../theme/theme";
import { enableScreens } from "react-native-screens";
enableScreens();

const CalendarNavigator = () => {
  const CalendarStack = createStackNavigator();
  return (
    <CalendarStack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: `${colors.secondaryColor}` },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <CalendarStack.Screen
        name={CALENDAR}
        component={Calendar}
        options={{
          headerTitle: "Calendar",
          headerTitleStyle: {
            fontFamily: "colfax-bold",
          },
          headerStyle: {
            backgroundColor: "#eef2ff",
            elevation: 0,
          },
        }}
      />
    </CalendarStack.Navigator>
  );
};

export default CalendarNavigator;

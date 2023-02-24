import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Classes from "../screens/Classes";
import { CLASSES } from "../constants/routeNames";

const ClassesNavigator = () => {
  const ClassesStack = createStackNavigator();
  return (
    <ClassesStack.Navigator>
      <ClassesStack.Screen name={CLASSES} component={Classes} />
    </ClassesStack.Navigator>
  );
};

export default ClassesNavigator;

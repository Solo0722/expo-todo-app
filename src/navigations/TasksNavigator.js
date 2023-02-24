import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { TASKS } from "../constants/routeNames";
import Tasks from "../screens/Tasks";
import { colors } from "../theme/theme";

const TasksNavigator = () => {
  const TasksStack = createStackNavigator();

  return (
    <TasksStack.Navigator
      screenOptions={{ cardStyle: { backgroundColor: "ghostwhite" } }}
    >
      <TasksStack.Screen
        name={TASKS}
        component={Tasks}
        options={{
          headerTitle: "",
          headerStyle: {
            backgroundColor: `${colors.secondaryColor}`,
          },
        }}
      />
    </TasksStack.Navigator>
  );
};

export default TasksNavigator;

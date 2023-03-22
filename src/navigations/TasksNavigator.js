import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { ADDTOTASKS, TASKS } from "../constants/routeNames";
import Tasks from "../screens/Tasks";
import { colors } from "../theme/theme";
import AddToTasks from "../screens/AddToTasks";
import { enableScreens } from "react-native-screens";
enableScreens();

const TasksNavigator = ({ navigation, route }) => {
  const TasksStack = createStackNavigator();

  return (
    <TasksStack.Navigator
      initialRouteName={TASKS}
      screenOptions={{
        cardStyle: { backgroundColor: `${colors.secondaryColor}` },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <TasksStack.Screen
        name={TASKS}
        component={Tasks}
        options={{
          headerTitle: "Tasks",
          headerTitleStyle: {
            fontFamily: "colfax-bold",
          },
          headerStyle: {
            backgroundColor: `${colors.secondaryColor}`,
            elevation: 0,
          },
        }}
      />
      <TasksStack.Screen
        name={ADDTOTASKS}
        component={AddToTasks}
        options={{
          headerTitle: "",
          headerStyle: {
            backgroundColor: `${colors.secondaryColor}`,
            elevation: 0,
          },
        }}
      />
    </TasksStack.Navigator>
  );
};

export default TasksNavigator;

import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { ADDTOTASKS, TASKNOTES, TASKS } from "../constants/routeNames";
import Tasks from "../screens/Tasks";
import { colors } from "../theme/theme";
import AddToTasks from "../screens/AddToTasks";
import { enableScreens } from "react-native-screens";
import TaskNotes from "../screens/TaskNotes";
import BackButton from "../components/BackButton";
enableScreens();

const TasksNavigator = () => {
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
          headerTitle: "",
          headerTitleStyle: {
            fontFamily: "colfax-bold",
          },
          headerStyle: {
            backgroundColor: `${colors.secondaryColor}`,
            elevation: 0,
            // height: 40,
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
          headerLeft: () => <BackButton />,
        }}
      />
      <TasksStack.Screen
        name={TASKNOTES}
        component={TaskNotes}
        options={{
          headerTitle: "",
          headerStyle: {
            backgroundColor: `${colors.secondaryColor}`,
            elevation: 0,
          },
          headerLeft: () => <BackButton />,
        }}
      />
    </TasksStack.Navigator>
  );
};

export default TasksNavigator;

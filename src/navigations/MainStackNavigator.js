import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import {
  TABNAVIGATOR,
  TASK,
  TASKNOTES,
  TASKTODOS,
} from "../constants/routeNames";
import { colors } from "../theme/theme";
import { enableScreens } from "react-native-screens";
import TaskNotes from "../screens/TaskNotes";
import BackButton from "../components/BackButton";
import Task from "../screens/Task";
import { Heading } from "native-base";
import TaskTodos from "../screens/TaskTodos";
import TabNavigator from "./TabNavigator";
enableScreens();

const MainStackNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName={TABNAVIGATOR}
      screenOptions={{
        cardStyle: { backgroundColor: `${colors.secondaryColor}` },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerStyle: {
          backgroundColor: `${colors.secondaryColor}`,
          elevation: 1,
          shadowColor: "rgba(0,0,0,0.4)",
        },
      }}
    >
      <Stack.Screen
        name={TABNAVIGATOR}
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={TASKTODOS}
        component={TaskTodos}
        options={{
          headerTitle: () => (
            <Heading
              color={"primary.400"}
              fontWeight={"extrabold"}
              fontSize="xl"
            >
              Tasks
            </Heading>
          ),
          headerTitleStyle: {
            fontFamily: "",
          },
        }}
      />
      <Stack.Screen
        name={TASK}
        component={Task}
        options={{
          headerTitle: "",
          headerStyle: {
            backgroundColor: `${colors.secondaryColor}`,
            elevation: 0,
          },
          headerLeft: () => <BackButton />,
        }}
      />
      <Stack.Screen
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
    </Stack.Navigator>
  );
};

export default MainStackNavigator;

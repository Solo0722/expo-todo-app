import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { colors } from "../theme/theme";
import { enableScreens } from "react-native-screens";
import TabNavigator from "./TabNavigator";
import { NOTE, TABNAVIGATOR } from "../constants/routeNames";
import Note from "../screens/Note";
enableScreens();

const MainStackNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator initialRouteName={TABNAVIGATOR}>
      <Stack.Group
        screenOptions={{
          cardStyle: { backgroundColor: `${colors.backgroundColor}` },
          cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
      >
        <Stack.Screen
          name={TABNAVIGATOR}
          component={TabNavigator}
          options={{ headerShown: false }}
        />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen name={NOTE} component={Note} />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default MainStackNavigator;

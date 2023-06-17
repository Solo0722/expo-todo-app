import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { TABNAVIGATOR } from "../constants/routeNames";
import { colors } from "../theme/theme";
import { enableScreens } from "react-native-screens";
import TabNavigator from "./TabNavigator";
enableScreens();

const MainStackNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName={TABNAVIGATOR}
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
    </Stack.Navigator>
  );
};

export default MainStackNavigator;

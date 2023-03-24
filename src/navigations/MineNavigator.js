import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { DONATE, PROFILE, SETTINGS } from "../constants/routeNames";
import Profile from "../screens/Profile";
import Settings from "../screens/Settings";
import Donate from "../screens/Donate";
import { colors } from "../theme/theme";

const MineNavigator = () => {
  const MineStack = createStackNavigator();

  return (
    <MineStack.Navigator
      initialRouteName={PROFILE}
      screenOptions={{
        cardStyle: { backgroundColor: `${colors.secondaryColor}` },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <MineStack.Screen name={PROFILE} component={Profile} />
      <MineStack.Screen name={SETTINGS} component={Settings} />
      <MineStack.Screen name={DONATE} component={Donate} />
    </MineStack.Navigator>
  );
};

export default MineNavigator;

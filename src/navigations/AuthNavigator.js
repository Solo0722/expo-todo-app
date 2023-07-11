import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { ONBOARDING, SIGNIN, SIGNUP } from "../constants/routeNames";
import Signin from "../screens/Signin";
import Signup from "../screens/Signup";
import Onboarding from "../screens/Onboarding";
import { enableScreens } from "react-native-screens";
import { colors } from "../theme/theme";
enableScreens();

const AuthNavigator = () => {
  const AuthStack = createStackNavigator();

  return (
    <AuthStack.Navigator
      initialRouteName={ONBOARDING}
      screenOptions={{
        cardStyle: { backgroundColor: `${colors.backgroundColor}` },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerShown: false,
      }}
    >
      <AuthStack.Screen name={ONBOARDING} component={Onboarding} />
      <AuthStack.Screen name={SIGNIN} component={Signin} />
      <AuthStack.Screen name={SIGNUP} component={Signup} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;

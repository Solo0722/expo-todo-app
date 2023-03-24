import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import Welcome from "../screens/Welcome";
import { SIGNIN, SIGNUP, WELCOME } from "../constants/routeNames";
import Signin from "../screens/Signin";
import Signup from "../screens/Signup";
import { enableScreens } from "react-native-screens";
import { colors } from "../theme/theme";
enableScreens();

const AuthNavigator = () => {
  const AuthStack = createStackNavigator();

  return (
    <AuthStack.Navigator
      initialRouteName={WELCOME}
      screenOptions={{
        cardStyle: { backgroundColor: `${colors.secondaryColor}` },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        headerShown: false,
      }}
    >
      <AuthStack.Screen name={WELCOME} component={Welcome} />
      <AuthStack.Screen name={SIGNUP} component={Signup} />
      <AuthStack.Screen name={SIGNIN} component={Signin} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;

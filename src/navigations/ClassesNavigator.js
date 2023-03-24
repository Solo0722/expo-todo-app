import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import Classes from "../screens/Classes";
import { ADDTOCLASSES, CLASSES } from "../constants/routeNames";
import { colors } from "../theme/theme";
import { enableScreens } from "react-native-screens";
import AddToClasses from "../screens/AddToClasses";
enableScreens();

const ClassesNavigator = () => {
  const ClassesStack = createStackNavigator();
  return (
    <ClassesStack.Navigator
      screenOptions={{
        cardStyle: { backgroundColor: `${colors.secondaryColor}` },
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <ClassesStack.Screen
        name={CLASSES}
        component={Classes}
        options={{
          headerShown: false,
          headerTitle: "",
          headerTitleStyle: {
            fontFamily: "colfax-bold",
          },
          headerStyle: {
            backgroundColor: `${colors.secondaryColor}`,
            elevation: 0,
          },
        }}
      />
      <ClassesStack.Screen
        name={ADDTOCLASSES}
        component={AddToClasses}
        options={{
          headerTitle: "",
          headerStyle: {
            backgroundColor: `${colors.secondaryColor}`,
            elevation: 0,
          },
        }}
      />
    </ClassesStack.Navigator>
  );
};

export default ClassesNavigator;

import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { NOTE, NOTESGROUP, TABNAVIGATOR } from "../constants/routeNames";
import { colors } from "../theme/theme";
import { enableScreens } from "react-native-screens";
import TabNavigator from "./TabNavigator";
import NotesGroup from "../screens/NotesGroup";
import TabHeader from "../components/TabHeader";
import Note from "../screens/Note";
enableScreens();

const MainStackNavigator = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator
      initialRouteName={TABNAVIGATOR}
      screenOptions={{
        cardStyle: { backgroundColor: `${colors.backgroundColor}` },
      }}
    >
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
        <Stack.Screen
          name={NOTESGROUP}
          component={NotesGroup}
          options={{
            header: (props) => <TabHeader {...props} />,
            headerShown: true,
          }}
        />
      </Stack.Group>
      <Stack.Group screenOptions={{ presentation: "modal" }}>
        <Stack.Screen
          name={NOTE}
          component={Note}
          options={{
            header: (props) => <TabHeader {...props} />,
            headerShown: true,
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};

export default MainStackNavigator;

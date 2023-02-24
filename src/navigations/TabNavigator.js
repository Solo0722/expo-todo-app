import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text } from "react-native";
import {
  CALENDARNAVIGATOR,
  CLASSESNAVIGATOR,
  MINENAVIGATOR,
  TASKSNAVIGATOR,
} from "../constants/routeNames";
import CalendarNavigator from "./CalendarNavigator";
import ClassesNavigator from "./ClassesNavigator";
import MineNavigator from "./MineNavigator";
import TasksNavigator from "./TasksNavigator";
import { Box, Pressable, Heading, VStack, Icon } from "native-base";
import {
  getFocusedRouteNameFromRoute,
  useNavigation,
} from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../theme/theme";

const TabNavigator = ({ navigation, route }) => {
  const Tab = createBottomTabNavigator();
  const { openDrawer, navigate } = useNavigation();

  const screens = [
    {
      routeName: "",
      name: "Mine",
      onPress: () => openDrawer(),
      iconName: "menu-sharp",
    },
    {
      routeName: TASKSNAVIGATOR,
      name: "Tasks",
      onPress: () => navigate(TASKSNAVIGATOR),
      iconName: "reader-sharp",
    },
    {
      routeName: CALENDARNAVIGATOR,

      name: "Calendar",
      onPress: () => navigate(CALENDARNAVIGATOR),
      iconName: "calendar-sharp",
    },
    {
      routeName: CLASSESNAVIGATOR,

      name: "Classes",
      onPress: () => navigate(CLASSESNAVIGATOR),
      iconName: "school-sharp",
    },
  ];
  let focusedRouteName = getFocusedRouteNameFromRoute(route);

  return (
    <Tab.Navigator
      tabBar={() => (
        <Box w="full" style={styles.box}>
          {screens.map((screen) => (
            <Pressable
              key={screen.iconName}
              style={styles.tabBarItem}
              android_ripple={{ color: "#9ca3af" }}
              onPress={screen.onPress}
            >
              <VStack
                space={2}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Icon
                  as={Ionicons}
                  name={screen.iconName}
                  size={"md"}
                  color={
                    focusedRouteName === screen.routeName
                      ? "primary.500"
                      : "coolGray.400"
                  }
                />
                <Heading
                  fontSize={"xs"}
                  fontWeight={"600"}
                  color={
                    focusedRouteName === screen.routeName
                      ? "primary.500"
                      : "coolGray.400"
                  }
                >
                  {screen.name}
                </Heading>
              </VStack>
            </Pressable>
          ))}
        </Box>
      )}
      initialRouteName={TASKSNAVIGATOR}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 60,
          paddingBottom: 10,
          elevation: 5,
          backgroundColor: "#fff",
        },
        tabBarLabelStyle: {
          fontSize: 12,
        },
      }}
    >
      <Tab.Screen name={MINENAVIGATOR} component={MineNavigator} />
      <Tab.Screen name={TASKSNAVIGATOR} component={TasksNavigator} />
      <Tab.Screen name={CALENDARNAVIGATOR} component={CalendarNavigator} />
      <Tab.Screen name={CLASSESNAVIGATOR} component={ClassesNavigator} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  box: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
    elevation: 5,
    shadowColor: "#000",
    backgroundColor: "#fff",
  },
  tabBarItem: {
    flex: 1,
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
});

export default TabNavigator;

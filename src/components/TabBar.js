import { StyleSheet } from "react-native";
import React, { useLayoutEffect, useState } from "react";
import {
  CALENDARNAVIGATOR,
  CLASSESNAVIGATOR,
  TASKSNAVIGATOR,
} from "../constants/routeNames";
import { Box, Pressable, Heading, VStack, Icon } from "native-base";
import {
  getFocusedRouteNameFromRoute,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../theme/theme";

const TabBar = ({ state, descriptors, navigation }) => {
  const { openDrawer, navigate } = useNavigation();
  const route = useRoute();
  const [hideTabBar, setHideTabBar] = useState(false);

  const routes = [
    {
      key: state.routes[0].key,
      routeName: "",
      name: "Mine",
      onPress: () => openDrawer(),
      iconName: "menu-sharp",
    },
    {
      key: state.routes[1].key,
      routeName: TASKSNAVIGATOR,
      name: "Tasks",
      onPress: () => navigate(TASKSNAVIGATOR),
      iconName: "reader-sharp",
    },
    {
      key: state.routes[2].key,
      routeName: CALENDARNAVIGATOR,
      name: "Calendar",
      onPress: () => navigate(CALENDARNAVIGATOR),
      iconName: "calendar-sharp",
    },
    {
      key: state.routes[3].key,
      routeName: CLASSESNAVIGATOR,
      name: "Classes",
      onPress: () => navigate(CLASSESNAVIGATOR),
      iconName: "school-sharp",
    },
  ];

  let focusedRouteName = getFocusedRouteNameFromRoute(route);

  useLayoutEffect(() => {
    routes.forEach((route) => {
      descriptors[route.key].navigation.setOptions({});
    });
  }, []);

  return (
    <Box
      w="full"
      style={[styles.box, { display: `${hideTabBar ? "none" : "flex"}` }]}
    >
      {routes.map((route, index) => {
        const isFocused = state.index === index;

        return (
          <Pressable
            key={route.name}
            style={styles.tabBarItem}
            android_ripple={{ color: "#9ca3af" }}
            onPress={route.onPress}
          >
            <VStack
              space={2}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Icon
                as={Ionicons}
                name={route.iconName}
                size={"md"}
                color={isFocused ? "primary.400" : "coolGray.400"}
              />
              <Heading
                fontSize={"xs"}
                fontWeight={"600"}
                color={isFocused ? "primary.500" : "coolGray.400"}
              >
                {route.name}
              </Heading>
            </VStack>
          </Pressable>
        );
      })}
    </Box>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  box: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
    elevation: 20,
    shadowColor: "#000",
    backgroundColor: colors.white,
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

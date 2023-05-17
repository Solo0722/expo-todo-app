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
  return (
    <Box w="full" style={[styles.box]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel || route.name;
        const iconName = options.tabBarIcon || "home-sharp";
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <Pressable
            key={`${index}--${route.key}`}
            style={styles.tabBarItem}
            android_ripple={{ color: "#9ca3af", borderless: true }}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            <VStack
              space={2}
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
            >
              <Icon
                as={Ionicons}
                name={iconName}
                size={"md"}
                color={isFocused ? "primary.400" : "coolGray.400"}
              />
              {/* <Heading
                fontSize={"xs"}
                fontWeight={"600"}
                color={isFocused ? "primary.500" : "coolGray.400"}
              >
                {label}
              </Heading> */}
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
    height: 50,
    elevation: 20,
    shadowColor: "#000",
    backgroundColor: colors.secondaryColor,
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

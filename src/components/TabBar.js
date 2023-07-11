import { StyleSheet } from "react-native";
import React from "react";
import { Box, Pressable, Heading, VStack, Icon } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../theme/theme";

const TabBar = ({ state, descriptors, navigation }) => {
  return (
    <Box
      w="full"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      height="60"
      backgroundColor={colors.backgroundColor}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label = options.tabBarLabel || route.name;
        const activeIconName = options.tabBarActiveIcon || "home";
        const inactiveIconName = options.tabBarInactiveIcon || "home-outline";
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
            android_ripple={{ color: "", borderless: true, foreground: true }}
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
                name={isFocused ? activeIconName : inactiveIconName}
                size={"md"}
                color={isFocused ? "white" : "coolGray.400"}
              />
              <Heading
                fontSize={"10"}
                // fontWeight={"600"}
                color={isFocused ? "white" : "coolGray.400"}
              >
                {label}
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
    backgroundColor: colors.backgroundColor,
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

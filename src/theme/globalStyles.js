import { Platform, StatusBar, StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  globalContainer: {
    paddingTop: Platform.OS === "windows" ? StatusBar.currentHeight : 0,
  },
});

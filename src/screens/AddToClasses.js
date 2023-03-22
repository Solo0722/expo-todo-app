import { StyleSheet } from "react-native";
import React from "react";
import { View } from "native-base";

const AddToClasses = () => {
  return <View style={styles.container}></View>;
};

export default AddToClasses;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
});

import React from "react";
import { StyleSheet } from "react-native";
import { Spinner } from "native-base";

const LoadingSpinner = () => {
  return <Spinner animating colorScheme={"primary"} size={"sm"} />;
};

export default LoadingSpinner;

const styles = StyleSheet.create({});

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "native-base";

const TaskImage = ({ image }) => {
  return (
    <View w={"48%"} h={40}>
      <Image
        w={"full"}
        h={"full"}
        source={{ uri: image.uri }}
        alt="img"
        borderRadius={"md"}
      />
    </View>
  );
};

export default TaskImage;

const styles = StyleSheet.create({});

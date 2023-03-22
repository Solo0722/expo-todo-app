import { StyleSheet } from "react-native";
import React from "react";
import Animated from "react-native-reanimated";
import { Button, View } from "native-base";

const TaskCategoriesbar = () => {
  const Colors = [
    "primary.100",
    "secondary.100",
    "rose.100",
    "amber.100",
    "success.100",
    "purple.100",
    "orange.100",
    "green.100",
    "blue.100",
  ];

  return (
    <Animated.FlatList
      showsHorizontalScrollIndicator={false}
      horizontal
      ListHeaderComponent={<View pl={2} />}
      centerContent
      overScrollMode={"never"}
      style={{
        marginBottom: 15,
      }}
      data={new Array(5)}
      renderItem={({ item }) => (
        <Button
          fontSize={"xs"}
          size={"xs"}
          variant={"unstyled"}
          borderRadius={20}
          mr={"4"}
          bgColor={`${Colors[Math.floor(Math.random() * 10)]}`}
          color={"coolGray.800"}
        >
          Personal
        </Button>
      )}
    />
  );
};

export default TaskCategoriesbar;

const styles = StyleSheet.create({});

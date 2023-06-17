import { StyleSheet } from "react-native";
import React from "react";
import { Button, FlatList, View } from "native-base";

const NotesCategoriesBar = () => {
  const renderItem = ({ item }) => (
    <Button
      variant={"unstyled"}
      _pressed={{
        bgColor: "primary.400",
        color: "white",
      }}
      bgColor="blueGray.100"
      color={"blueGray.700"}
    >
      {item}
    </Button>
  );

  return (
    <FlatList
      horizontal
      data={[
        "all",
        "category",
        "hello",
        "world",
        "other",
        "all",
        "category",
        "hello",
        "world",
        "other",
      ]}
      renderItem={renderItem}
      ItemSeparatorComponent={<View mx={"2"}></View>}
    />
  );
};

export default NotesCategoriesBar;

const styles = StyleSheet.create({});

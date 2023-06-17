import { StyleSheet } from "react-native";
import { View, Input, Icon } from "native-base";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const Searchbar = () => {
  return (
    <View mb="2">
      <Input
        _focus={{
          bgColor: "blueGray.200",
          borderWidth: 0,
        }}
        variant={"filled"}
        InputLeftElement={
          <Icon
            as={<Ionicons name="search-outline" />}
            size={5}
            ml="2"
            color="muted.400"
          />
        }
        placeholder="Search by name or keyword"
        bgColor="blueGray.100"
      />
    </View>
  );
};

export default Searchbar;

const styles = StyleSheet.create({});

import { StyleSheet } from "react-native";
import { View, Input, Icon } from "native-base";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../theme/theme";

const Searchbar = () => {
  return (
    <View mb="2">
      <Input
        variant={"filled"}
        rounded={"lg"}
        borderWidth="0"
        cursorColor={"white"}
        color={"white"}
        bgColor={colors.accentColor}
        placeholderTextColor={"coolGray.400"}
        InputLeftElement={
          <Icon
            as={<Ionicons name="search-outline" />}
            size={5}
            ml="2"
            color="muted.400"
          />
        }
        placeholder="Search by name or keyword"
      />
    </View>
  );
};

export default Searchbar;

const styles = StyleSheet.create({});

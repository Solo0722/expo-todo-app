import { StyleSheet } from "react-native";
import React from "react";
import { FlatList, VStack, View } from "native-base";
import Searchbar from "../components/Searchbar";
import NotesCategoriesBar from "../components/NotesCategoriesBar";
import NoteCard from "../components/NoteCard";

const Notes = () => {
  return <View w="full" style={styles.container}></View>;
};

export default Notes;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});

import { StyleSheet, Text } from "react-native";
import React from "react";
import { FlatList, View } from "native-base";
import NoteCard from "../components/NoteCard";

const NotesGroup = () => {
  return (
    <View px="2" w="full">
      <FlatList
        data={new Array(10)}
        renderItem={() => <NoteCard />}
        ItemSeparatorComponent={<View my="2" />}
        ListHeaderComponent={() => <View my="2" />}
        ListFooterComponent={() => <View my="2" />}
      />
    </View>
  );
};

export default NotesGroup;

const styles = StyleSheet.create({});

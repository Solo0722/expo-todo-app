import { StyleSheet } from "react-native";
import React from "react";
import { FlatList, VStack, View } from "native-base";
import NotesGroupCard from "../components/NotesGroupCard";

const Notes = () => {
  return (
    <View px="2" w="full">
      <FlatList
        data={new Array(10)}
        renderItem={() => <NotesGroupCard />}
        ItemSeparatorComponent={<View my="2" />}
        ListHeaderComponent={() => <View my="2" />}
        ListFooterComponent={() => <View my="2" />}
      />
    </View>
  );
};

export default Notes;

const styles = StyleSheet.create({});

import { StyleSheet } from "react-native";
import React from "react";
import { FlatList, VStack, View } from "native-base";
import NotesGroupCard from "../components/NotesGroupCard";

const Notes = () => {
  const data = ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""];

  return (
    <View px="2" w="full">
      <FlatList
        w="full"
        keyExtractor={(item, index) => index.toString()}
        data={data}
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

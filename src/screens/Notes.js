import { SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { FlatList, VStack, View } from "native-base";
import NoteCard from "../components/NoteCard";
import Searchbar from "../components/Searchbar";
import TabHeader from "../components/TabHeader";
import FabComp from "../components/FabComp";
import EmptyComp from "../components/EmptyComp";

const Notes = ({ navigation, route }) => {
  return (
    <SafeAreaView>
      <View px="2" w="full" h="full">
        <FlatList
          data={[]}
          renderItem={() => <NoteCard />}
          ItemSeparatorComponent={<View my="2" />}
          ListHeaderComponent={() => (
            <VStack space="2">
              <TabHeader title="My Notes" />
              <View mb="2">
                <Searchbar />
              </View>
            </VStack>
          )}
          ListEmptyComponent={
            <EmptyComp
              title="No notes available!"
              subText="Click the + to create notes"
            />
          }
          ListFooterComponent={() => <View my="2" />}
        />
        <FabComp />
      </View>
    </SafeAreaView>
  );
};

export default Notes;

const styles = StyleSheet.create({});

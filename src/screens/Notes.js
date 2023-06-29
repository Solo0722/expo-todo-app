import { SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { FlatList, VStack, View } from "native-base";
import NoteCard from "../components/NoteCard";
import Searchbar from "../components/Searchbar";
import TabHeader from "../components/TabHeader";

const Notes = ({ navigation, route }) => {
  return (
    <SafeAreaView>
      <View px="2" w="full">
        <FlatList
          data={new Array(10)}
          renderItem={() => <NoteCard />}
          ItemSeparatorComponent={<View my="2" />}
          ListHeaderComponent={() => (
            <VStack>
              <TabHeader
                title="My Notes"
                iconButtons={[{ iconName: "add-circle", onPress: () => null }]}
              />
              <View my="2">
                <Searchbar />
              </View>
            </VStack>
          )}
          ListFooterComponent={() => <View my="2" />}
        />
      </View>
    </SafeAreaView>
  );
};

export default Notes;

const styles = StyleSheet.create({});

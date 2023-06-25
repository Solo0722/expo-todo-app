import { StyleSheet, Text } from "react-native";
import React, { useEffect } from "react";
import { FlatList, View } from "native-base";
import NoteCard from "../components/NoteCard";
import TabHeader from "../components/TabHeader";

const NotesGroup = ({ navigation, route }) => {
  // const {} =

  useEffect(() => {
    navigation.setOptions({
      header: (props) => (
        <TabHeader
          {...props}
          title={"Embedded Systems"}
          iconButtons={[
            { iconName: "add-circle", onPress: () => null },
            { iconName: "search", onPress: () => null },
            { iconName: "ellipsis-vertical", onPress: () => null },
          ]}
          showBackBtn={true}
        />
      ),
      headerShown: true,
    });
  }, []);

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

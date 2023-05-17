import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Input, ScrollView } from "native-base";
import { DeviceEventEmitter } from "react-native";
import { useEffect } from "react";

const TaskNotes = ({ route }) => {
  const { notes } = route.params;

  useEffect(() => {
    return () => {
      DeviceEventEmitter.removeAllListeners("setNotesEvent");
    };
  }, []);

  return (
    <ScrollView w={"full"} p={"2"}>
      <Input
        // value={notes}
        onChangeText={(e) => DeviceEventEmitter.emit("setNotesEvent", { e })}
        placeholder="Enter notes here"
        numberOfLines={10}
        variant={"filled"}
        bgColor={"transparent"}
        borderColor={"transparent"}
        autoFocus
        isFullWidth
        multiline
        textAlignVertical="top"
        _focus={{
          borderColor: "transparent",
        }}
        fontSize={"sm"}
        fontWeight={"bold"}
      />
    </ScrollView>
  );
};

export default TaskNotes;

const styles = StyleSheet.create({});

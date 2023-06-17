import { StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Input, TextArea, VStack, View } from "native-base";

const Note = () => {
  return (
    <View p="2" w="full">
      <VStack space="6">
        <Input
          w="full"
          placeholder="Title"
          variant="unstyled"
          cursorColor={"white"}
          color="white"
          fontSize={"md"}
          pl="0"
        />
        <TextArea
          pl="0"
          variant={"unstyled"}
          placeholder="Note"
          cursorColor={"white"}
          multiline
          numberOfLines={2}
          autoCorrect
          fontSize={"md"}
          color="white"
        />
      </VStack>
    </View>
  );
};

export default Note;

const styles = StyleSheet.create({});

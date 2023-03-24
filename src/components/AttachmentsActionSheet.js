import { StyleSheet } from "react-native";
import React from "react";
import {
  Actionsheet,
  FlatList,
  Heading,
  Image,
  Pressable,
  View,
  VStack,
} from "native-base";
import {
  audioIcon,
  fileIcon,
  photoIcon,
  recordAudioIcon,
} from "../constants/general";

const AttachmentsActionSheet = ({ isOpen, onOpen, onClose }) => {
  const data = [
    { name: "Photo", image: photoIcon, color: "blue.200", onPress: () => null },
    {
      name: "Audio",
      image: audioIcon,
      color: "success.200",
      onPress: () => null,
    },
    {
      name: "Record Audio",
      image: recordAudioIcon,
      color: "red.200",
      onPress: () => null,
    },
    {
      name: "Files",
      image: fileIcon,
      color: "yellow.200",
      onPress: () => null,
    },
  ];

  const renderItem = ({ item }) => (
    <View p={"4"}>
      <VStack space={"2"}>
        <Pressable
          android_ripple={{ color: `${item.color}`, radius: 16 }}
          bgColor={item.color}
          p={"4"}
          h={"16"}
          w={"16"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          borderRadius={"10"}
        >
          <Image source={{ uri: item.image }} w={"6"} h={"6"} alt={item.name} />
        </Pressable>
        <Heading fontSize={10} size={"xs"} color="coolGray.500">
          {item.name}
        </Heading>
      </VStack>
    </View>
  );

  return (
    <Actionsheet
      isOpen={isOpen}
      onClose={onClose}
      borderRadius={0}
      hideDragIndicator
    >
      <Actionsheet.Content p={"2"}>
        <FlatList data={data} renderItem={renderItem} horizontal />
      </Actionsheet.Content>
    </Actionsheet>
  );
};

export default AttachmentsActionSheet;

const styles = StyleSheet.create({});

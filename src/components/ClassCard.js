import { StyleSheet } from "react-native";
import React from "react";
import { Box, HStack, Pressable, Spacer, Text, VStack } from "native-base";
import moment from "moment";
import { colors } from "../theme/theme";

const ClassCard = ({ item }) => {
  return (
    <Pressable w="full" android_ripple={{ color: "", foreground: true }}>
      <Box w="full" px="2" py="4" rounded={"lg"} bgColor={colors.accentColor}>
        <HStack alignItems="center" space={"2"}>
          <VStack space={1}>
            <Text color="white" bold>
              {item.fullName}
            </Text>
            <Text color="coolGray.400" fontSize={"xs"}>
              {moment().format("hh:mm")} - {moment().format("hh:mm  dddd")}
            </Text>
          </VStack>
          <Spacer />
          <Text fontSize="xs" color="coolGray.400" alignSelf="flex-start">
            {item.recentText}
          </Text>
        </HStack>
      </Box>
    </Pressable>
  );
};

export default ClassCard;

const styles = StyleSheet.create({});

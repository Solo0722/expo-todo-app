import { StyleSheet } from "react-native";
import React from "react";
import {
  Avatar,
  Box,
  HStack,
  Heading,
  Icon,
  IconButton,
  Text,
} from "native-base";
import { colors } from "../theme/theme";
import { Ionicons } from "@expo/vector-icons";

const TabHeader = () => {
  return (
    <Box
      w="full"
      style={styles.box}
      px="2"
      h="20"
      zIndex={"10"}
      shadow={"4"}
      pt="8"
    >
      <Heading color={"primary.400"} fontSize="lg" fontWeight={"bold"}>
        My Notes
      </Heading>
      <HStack space="2">
        <IconButton
          variant={"ghost"}
          colorScheme={"coolGray"}
          rounded={"full"}
          icon={<Icon as={Ionicons} name="add-circle" color="white" />}
        />
        <IconButton
          variant={"ghost"}
          colorScheme={"coolGray"}
          rounded={"full"}
          icon={<Icon as={Ionicons} name="search" color="white" />}
        />

        <IconButton
          variant={"ghost"}
          colorScheme={"coolGray"}
          rounded={"full"}
          icon={<Icon as={Ionicons} name="person-circle" color="white" />}
        />
      </HStack>
    </Box>
  );
};

export default TabHeader;

const styles = StyleSheet.create({
  box: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: colors.backgroundColor,
  },
});

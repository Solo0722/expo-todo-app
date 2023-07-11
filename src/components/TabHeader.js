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
import BackButton from "./BackButton";

const TabHeader = ({
  title = "My Notes",
  iconButtons = [],
  showBackBtn = false,
}) => {
  return (
    <Box
      w="full"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      bgColor={colors.backgroundColor}
      h="20"
      zIndex={"10"}
      pt="8"
    >
      <HStack
        space="1"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
      >
        {showBackBtn && <BackButton />}
        <Heading color={"primary.500"} fontSize="lg" fontWeight={"bold"}>
          {title}
        </Heading>
      </HStack>
      <HStack space="2">
        {iconButtons.map((iconButton, index) => (
          <IconButton
            key={index}
            variant={"ghost"}
            colorScheme={"coolGray"}
            rounded={"full"}
            icon={
              <Icon as={Ionicons} name={iconButton.iconName} color="white" />
            }
          />
        ))}
      </HStack>
    </Box>
  );
};

export default TabHeader;

const styles = StyleSheet.create({});

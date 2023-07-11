import { StyleSheet } from "react-native";
import React from "react";
import SvgImg from "../assets/images/reading.svg";
import { Center, Heading, VStack } from "native-base";

const EmptyComp = ({ title = "", subText = "", showImage = true }) => {
  return (
    <Center
      w="full"
      h="full"
      flex={1}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <VStack space={2}>
        {showImage && <SvgImg width={200} height={200} />}
        <Heading
          fontSize={"xs"}
          fontWeight={"bold"}
          textAlign="center"
          color={"coolGray.500"}
        >
          {title}
        </Heading>
        <Heading
          fontSize={"xs"}
          fontWeight={"bold"}
          textAlign="center"
          color={"coolGray.500"}
        >
          {subText}
        </Heading>
      </VStack>
    </Center>
  );
};

export default EmptyComp;

const styles = StyleSheet.create({});

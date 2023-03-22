import { StyleSheet } from "react-native";
import React from "react";
import SvgImg from "../assets/images/reading.svg";
import { Heading, View, VStack } from "native-base";

const EmptyTasks = () => {
  return (
    <View flex={1} alignItems="center" justifyContent="center">
      <VStack space={2}>
        <SvgImg width={200} height={200} />
        <Heading
          fontSize={"sm"}
          fontWeight={"bold"}
          textAlign="center"
          color={"coolGray.500"}
        >
          No tasks available.
        </Heading>
        <Heading
          fontSize={"sm"}
          fontWeight={"bold"}
          textAlign="center"
          color={"coolGray.500"}
        >
          Click the + to create tasks.
        </Heading>
      </VStack>
    </View>
  );
};

export default EmptyTasks;

const styles = StyleSheet.create({});

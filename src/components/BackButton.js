import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Icon, IconButton } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const BackButton = () => {
  const { goBack } = useNavigation();

  return (
    <IconButton
      variant={"ghost"}
      colorScheme={"coolGray"}
      rounded={"full"}
      icon={<Icon as={Ionicons} name="arrow-back-sharp" />}
      onPress={() => goBack()}
    />
  );
};

export default BackButton;

const styles = StyleSheet.create({});

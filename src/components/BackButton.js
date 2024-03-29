import { StyleSheet } from "react-native";
import React from "react";
import { Icon, IconButton, View } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const BackButton = () => {
  const { goBack } = useNavigation();

  return (
    <View>
      <IconButton
        variant={"ghost"}
        colorScheme={"coolGray"}
        rounded={"full"}
        icon={<Icon as={Ionicons} name="arrow-back" />}
        onPress={() => goBack()}
      />
    </View>
  );
};

export default BackButton;

const styles = StyleSheet.create({});

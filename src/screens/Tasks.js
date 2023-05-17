import { Animated, StyleSheet } from "react-native";
import React, { useEffect, useRef } from "react";
import {
  View,
  Icon,
  Heading,
  Box,
  Pressable,
  HStack,
  VStack,
  Text,
  Spacer,
  Checkbox,
  Center,
  ScrollView,
  IconButton,
} from "native-base";
import FabComp from "../components/FabComp";
import Lists from "../components/Lists";
import { colors } from "../theme/theme";
import { Ionicons } from "@expo/vector-icons";

const Tasks = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerRightContainerStyle: {
        paddingRight: 10,
      },
      headerRight: () => (
        <HStack space="2">
          <IconButton
            variant={"ghost"}
            colorScheme={"coolGray"}
            rounded={"full"}
            icon={<Icon as={Ionicons} name="search-sharp" />}
          />
        </HStack>
      ),
    });
  }, []);

  return (
    <View style={styles.container}>
      <Lists />
      <FabComp />
    </View>
  );
};

export default Tasks;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
});

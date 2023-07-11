import { StyleSheet } from "react-native";
import React from "react";
import {
  Box,
  Button,
  Heading,
  Icon,
  IconButton,
  Image,
  Pressable,
  Text,
  VStack,
  View,
} from "native-base";
import { colors } from "../theme/theme";
import { Ionicons } from "@expo/vector-icons";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";
import { NOTE } from "../constants/routeNames";
console.log(moment());

const NoteCard = () => {
  const { navigate } = useNavigation();

  return (
    <Pressable
      android_ripple={{ color: "", foreground: true }}
      onPress={() => navigate(NOTE)}
    >
      <Box
        minH={"40"}
        w="full"
        px="2"
        py="4"
        rounded={"lg"}
        // bgColor={colors.accentColor}
        borderWidth={"1"}
        borderColor={colors.accentColor}
      >
        <VStack space="2">
          <View
            w="full"
            display={"flex"}
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            <Button
              variant={"unstyled"}
              colorScheme={"coolGray"}
              bgColor={colors.accentColor}
              size="xs"
              displat={"flex"}
              flexDirection={"row"}
              alignItems={"flex-start"}
              _text={{
                color: "coolGray.400",
              }}
            >
              {moment().format("MMMM D, YYYY")}
            </Button>
          </View>
          <VStack space="1" w="full">
            <Heading color="white" fontSize={"md"}>
              Embedded Systems
            </Heading>
            <Text color="coolGray.400" fontSize={"xs"}>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer lorem ipsum dolor sit amet.
            </Text>
          </VStack>
          {/* <Image
            source={require("../assets/images/todolist.png")}
            borderRadius={"md"}
            w="full"
            h="40"
            alt="note-pic"
          /> */}
        </VStack>
      </Box>
    </Pressable>
  );
};

export default NoteCard;

const styles = StyleSheet.create({});

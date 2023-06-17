import { StyleSheet } from "react-native";
import React from "react";
import {
  Box,
  Button,
  Heading,
  Icon,
  IconButton,
  Pressable,
  Text,
  VStack,
  View,
} from "native-base";
import { colors } from "../theme/theme";
import { Ionicons } from "@expo/vector-icons";
import moment from "moment";
import { useNavigation } from "@react-navigation/native";
import { NOTE, NOTESGROUP } from "../constants/routeNames";
console.log(moment());

const NoteCard = () => {
  const { navigate } = useNavigation();

  return (
    <Pressable
      android_ripple={{ color: "", foreground: true }}
      onPress={() => navigate(NOTE)}
    >
      <Box
        //   h="40"
        minH={"40"}
        w="full"
        px="2"
        py="4"
        //   shadow="2"
        //   borderWidth="1"
        //   borderColor="white"
        borderRadius={"md"}
        bgColor={colors.accentColor2}
        //   opacity={0.5}
      >
        <VStack space="2">
          <View
            w="full"
            display={"flex"}
            flexDirection="row"
            alignItems="center"
            justifyContent="space-between"
          >
            {/* <IconButton
            variant={"ghost"}
            colorScheme={"coolGray"}
            rounded={"full"}
            icon={<Icon as={Ionicons} name="folder" color="primary.400" />}
          /> */}
            <Button
              variant={"solid"}
              colorScheme={"coolGray"}
              bgColor={colors.backgroundColor}
              rounded={"full"}
              borderRadius={"full"}
              size="xs"
              _text={{
                color: "coolGray.400",
              }}

              // icon={<Icon as={Ionicons} name="folder" color="coolGray.400" />}
            >
              {moment().format("MMMM D, YYYY")}
            </Button>
          </View>
          <VStack space="1">
            <Heading color="white" fontSize={"md"}>
              Embedded Systems
            </Heading>
            <Text color="coolGray.400" fontSize={"xs"}>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer lorem ipsum dolor sit amet.
            </Text>
          </VStack>
        </VStack>
      </Box>
    </Pressable>
  );
};

export default NoteCard;

const styles = StyleSheet.create({});

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
import { NOTESGROUP } from "../constants/routeNames";
console.log(moment());

const NotesGroupCard = () => {
  const { navigate } = useNavigation();

  return (
    <Pressable
      android_ripple={{ color: "", foreground: true }}
      onPress={() => navigate(NOTESGROUP)}
    >
      <Box
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
            <Heading color="white" fontSize={"sm"}>
              Embedded Systems
            </Heading>
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
            >
              4
            </Button>
          </View>
        </VStack>
      </Box>
    </Pressable>
  );
};

export default NotesGroupCard;

const styles = StyleSheet.create({});

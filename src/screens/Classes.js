import { StyleSheet } from "react-native";
import React from "react";
import {
  Box,
  FlatList,
  Heading,
  HStack,
  Pressable,
  Spacer,
  Text,
  View,
  VStack,
} from "native-base";
import FabComp from "../components/FabComp";
import { ADDTOCLASSES } from "../constants/routeNames";
import EmptyTasks from "../components/EmptyTasks";
import moment from "moment";
import { colors } from "../theme/theme";

const Classes = ({ navigation }) => {
  const data = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      fullName: "Afreen Khan",
      timeStamp: "12:47 PM",
      recentText: "Good Day!",
      avatarUrl:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      fullName: "Sujita Mathur",
      timeStamp: "11:11 PM",
      recentText: "Cheer up, there!",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      fullName: "Anci Barroco",
      timeStamp: "6:22 PM",
      recentText: "Good Day!",
      avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg",
    },
    {
      id: "68694a0f-3da1-431f-bd56-142371e29d72",
      fullName: "Aniket Kumar",
      timeStamp: "8:56 PM",
      recentText: "All the best",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU",
    },

    {
      id: "28694a0f-3da1-471f-bd96-142456e29d72",
      fullName: "Kiara",
      timeStamp: "12:47 PM",
      recentText: "I will call today.",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU",
    },
  ];

  const renderItem = ({ item }) => (
    <Pressable w="full" android_ripple={{ color: "", foreground: true }}>
      <Box
        w="full"
        px="2"
        py="4"
        borderRadius={"md"}
        bgColor={colors.accentColor2}
      >
        <HStack alignItems="center" space={"2"}>
          <VStack space={1}>
            <Text color="white" bold>
              {item.fullName}
            </Text>
            <Text color="coolGray.400" fontSize={"xs"}>
              {moment().format("hh:mm")} - {moment().format("hh:mm  dddd")}
            </Text>
          </VStack>
          <Spacer />
          <Text fontSize="xs" color="coolGray.400" alignSelf="flex-start">
            {item.recentText}
          </Text>
        </HStack>
      </Box>
    </Pressable>
  );

  return (
    <View px="2" w="full">
      <FlatList
        ListEmptyComponent={<EmptyTasks />}
        ListHeaderComponent={
          <Heading
            fontSize={"sm"}
            fontWeight={"bold"}
            color="white"
            mt="2"
            mb="4"
          >
            Today
          </Heading>
        }
        ItemSeparatorComponent={<View my="2" />}
        ListFooterComponent={() => <View my="2" />}
        data={data}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Classes;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 10,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

import { StyleSheet } from "react-native";
import React from "react";
import {
  Box,
  Checkbox,
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

  const renderItem = ({ item, index }) => (
    <Pressable
      w="full"
      bgColor={"coolGray.100"}
      // borderRadius="10"
      android_ripple={{ color: "#9ca3af" }}
      // borderRadius="10"
      borderLeftColor={"amber.500"}
      borderLeftWidth={"3"}
    >
      <Box pl="4" pr="5" py="2" height={"64px"}>
        <HStack alignItems="center" space={3}>
          {/* <Checkbox
            // value="danger"
            colorScheme="coolGray"
            // defaultIsChecked
            aria-label="completed?"
            rounded={"full"}
            size={"sm"}
          /> */}
          <VStack space={1}>
            <Text
              color="coolGray.800"
              _dark={{
                color: "warmGray.50",
              }}
              bold
            >
              {item.fullName}
            </Text>
            <Text
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
              fontSize={"xs"}
            >
              {moment().format("hh:mm")} - {moment().format("hh:mm  dddd")}
            </Text>
          </VStack>
          <Spacer />
          <Text
            fontSize="xs"
            color="coolGray.800"
            _dark={{
              color: "warmGray.50",
            }}
            alignSelf="flex-start"
          >
            {item.recentText}
          </Text>
        </HStack>
      </Box>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <FlatList
        ListEmptyComponent={<EmptyTasks />}
        ListHeaderComponent={
          <Heading fontFamily={"colfax-regular"} fontSize={"md"} mb={4} mt={4}>
            Today
          </Heading>
        }
        ItemSeparatorComponent={<View pt={1} pb={1} />}
        collapsable
        data={data}
        renderItem={renderItem}
        style={{ width: "100%" }}
      />
      <FabComp onPress={() => navigation.navigate(ADDTOCLASSES)} />
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

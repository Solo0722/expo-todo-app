import { StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import {
  Button,
  View,
  ScrollView,
  IconButton,
  Icon,
  Fab,
  Image,
  Heading,
  Box,
  Pressable,
  HStack,
  Avatar,
  VStack,
  Text,
  Spacer,
  useDisclose,
  Checkbox,
} from "native-base";
import Animated from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";
import TaskCategoriesbar from "../components/TaskCategoriesbar";
import FabComp from "../components/FabComp";
import EmptyTasks from "../components/EmptyTasks";
import { SwipeListView } from "react-native-swipe-list-view";
import moment from "moment";
import { ADDTOTASKS } from "../constants/routeNames";
import { useContext } from "react";
import { GlobalContext } from "../context/context";

const Tasks = ({ navigation }) => {
  // useEffect(() => {
  //   // navigation.setOptions({
  //   //   headerLeft: () => <TaskCategoriesbar />,
  //   //   headerLeftContainerStyle: {
  //   //     flexDirection: "row",
  //   //     alignItems: "center",
  //   //     justifyContent: "center",
  //   //     width: "80%",
  //   //     paddingVertical: 10,
  //   //   },
  //   //   headerRightContainerStyle: {
  //   //     width: "20%",
  //   //     paddingRight: 5,
  //   //     display: "flex",
  //   //     alignItems: "center",
  //   //     justifyContent: "center",
  //   //   },
  //   //   headerRight: () => (
  //   //     <IconButton
  //   //       colorScheme={"coolGray"}
  //   //       borderRadius={"full"}
  //   //       display={"flex"}
  //   //       alignItems={"center"}
  //   //       justifyContent={"center"}
  //   //       icon={<Icon as={Ionicons} name="ellipsis-vertical-sharp" />}
  //   //     />
  //   //   ),
  //   //   headerTransparent: true,
  //   // });
  // }, [navigation]);

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
    {
      id: "28694a0f-3da1-471f-bd96-142456e29d72",
      fullName: "Kiara",
      timeStamp: "12:47 PM",
      recentText: "I will call today.",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU",
    },
    {
      id: "28694a0f-3da1-471f-bd96-142456e29d72",
      fullName: "Kiara",
      timeStamp: "12:47 PM",
      recentText: "I will call today.",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU",
    },
    {
      id: "28694a0f-3da1-471f-bd96-142456e29d72",
      fullName: "Kiara",
      timeStamp: "12:47 PM",
      recentText: "I will call today.",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU",
    },
    {
      id: "28694a0f-3da1-471f-bd96-142456e29d72",
      fullName: "Kiara",
      timeStamp: "12:47 PM",
      recentText: "I will call today.",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU",
    },
    {
      id: "28694a0f-3da1-471f-bd96-142456e29d72",
      fullName: "Kiara",
      timeStamp: "12:47 PM",
      recentText: "I will call today.",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU",
    },
    {
      id: "28694a0f-3da1-471f-bd96-142456e29d72",
      fullName: "Kiara",
      timeStamp: "12:47 PM",
      recentText: "I will call today.",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU",
    },
    {
      id: "28694a0f-3da1-471f-bd96-142456e29d72",
      fullName: "Kiara",
      timeStamp: "12:47 PM",
      recentText: "I will call today.",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU",
    },
    {
      id: "28694a0f-3da1-471f-bd96-142456e29d72",
      fullName: "Kiara",
      timeStamp: "12:47 PM",
      recentText: "I will call today.",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU",
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

  const [listData, setListData] = useState(data);

  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteRow = (rowMap, rowKey) => {
    closeRow(rowMap, rowKey);
    const newData = [...listData];
    const prevIndex = listData.findIndex((item) => item.key === rowKey);
    newData.splice(prevIndex, 1);
    setListData(newData);
  };

  const onRowDidOpen = (rowKey) => {
    console.log("This row opened", rowKey);
  };

  const renderItem = ({ item, index }) => (
    <Pressable
      w="full"
      bgColor={"coolGray.100"}
      // borderRadius="10"
      android_ripple={{ color: "#9ca3af" }}
      // borderRadius="10"
    >
      <Box pl="4" pr="5" py="2" height={"64px"}>
        <HStack alignItems="center" space={3}>
          <Checkbox
            // value="danger"
            colorScheme="coolGray"
            // defaultIsChecked
            aria-label="completed?"
            rounded={"full"}
            size={"sm"}
          />
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
              {moment().format("Do MMMM YYYY")}
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
            {item.timeStamp}
          </Text>
        </HStack>
      </Box>
    </Pressable>
  );

  const renderHiddenItem = (data, rowMap) => (
    <HStack flex="1" pl="2" ml="full">
      <Pressable
        w="70"
        ml="auto"
        cursor="pointer"
        bg="primary.200"
        justifyContent="center"
        onPress={() => closeRow(rowMap, data.item.key)}
        _pressed={{
          opacity: 0.5,
        }}
      >
        <VStack alignItems="center" space={2}>
          <Icon
            as={<Ionicons name="star-outline" />}
            size="sm"
            color="coolGray.500"
          />
          <Text fontSize="xs" fontWeight="medium" color="coolGray.500">
            Star
          </Text>
        </VStack>
      </Pressable>
      <Pressable
        w="70"
        cursor="pointer"
        bg="primary.400"
        justifyContent="center"
        // onPress={() => deleteRow(rowMap, data.item.key)}
        _pressed={{
          opacity: 0.5,
        }}
      >
        <VStack alignItems="center" space={2}>
          <Icon
            as={<Ionicons name="calendar-sharp" />}
            color="white"
            size="sm"
          />
          <Text color="white" fontSize="xs" fontWeight="medium">
            Date
          </Text>
        </VStack>
      </Pressable>
      <Pressable
        w="70"
        cursor="pointer"
        bg="red.500"
        justifyContent="center"
        // onPress={() => deleteRow(rowMap, data.item.key)}
        _pressed={{
          opacity: 0.5,
        }}
        // borderRadius="10"
      >
        <VStack alignItems="center" space={2}>
          <Icon as={<Ionicons name="trash-sharp" />} color="white" size="sm" />
          <Text color="white" fontSize="xs" fontWeight="medium">
            Delete
          </Text>
        </VStack>
      </Pressable>
    </HStack>
  );

  return (
    <View style={styles.container}>
      {/* <TaskCategoriesbar /> */}
      <View style={styles.tasksContainer}>
        <SwipeListView
          ListEmptyComponent={<EmptyTasks />}
          ListHeaderComponent={
            // <Heading fontFamily={"colfax-regular"} fontSize={"md"} mb={4} mt={4}>
            //   Today
            // </Heading>
            <View pt={4} />
          }
          ItemSeparatorComponent={<View pt={1} pb={1} />}
          collapsable
          disableRightSwipe
          data={[]}
          renderItem={renderItem}
          renderHiddenItem={renderHiddenItem}
          rightOpenValue={-200}
          previewRowKey={"0"}
          previewOpenValue={-200}
          previewOpenDelay={3000}
          onRowDidOpen={onRowDidOpen}
          style={{ width: "100%", paddingHorizontal: 10 }}
        />
        {/* <EmptyTasks /> */}
      </View>
      <FabComp onPress={() => navigation.navigate(ADDTOTASKS)} />
    </View>
  );
};

export default Tasks;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    // paddingHorizontal: 10,
    flex: 1,
  },
  tasksContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

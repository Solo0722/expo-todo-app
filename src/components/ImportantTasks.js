import { StyleSheet } from "react-native";
import React, { useEffect } from "react";
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
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import FabComp from "../components/FabComp";
import EmptyTasks from "../components/EmptyTasks";
import { SwipeListView } from "react-native-swipe-list-view";
import moment from "moment";
import { colors } from "../theme/theme";

const ImportantTasks = () => {
  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteRow = (rowMap, rowKey) => {
    closeRow(rowMap, rowKey);
    // const newData = [...listData];
    // // const prevIndex = listData.findIndex((item) => item.key === rowKey);
    // newData.splice(prevIndex, 1);
    // setListData(newData);
  };

  const onRowDidOpen = (rowKey) => {
    console.log("This row opened", rowKey);
  };

  const renderItem = ({ item, index }) => (
    <Pressable
      w="full"
      bgColor={`${colors.itemColor}`}
      android_ripple={{ color: "#9ca3af" }}
    >
      <Box pl="4" pr="5" py="2" height={"64px"}>
        <HStack alignItems="center" space={3}>
          <Checkbox
            colorScheme="coolGray"
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
              fontWeight={"bold"}
            >
              Hello World
            </Text>
            <Text
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
              fontSize={"xs"}
            >
              {moment().format("D-MM-YYYY")}
            </Text>
          </VStack>
          <Spacer />
          <Icon as={Ionicons} name={"flag"} size={"sm"} color={"primary.400"} />
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
    <SwipeListView
      ListEmptyComponent={
        <Center my={100}>
          <EmptyTasks />
        </Center>
      }
      ListHeaderComponent={
        <Heading
          fontFamily={"bellota-regular"}
          fontSize={"md"}
          mb={4}
          mt={4}
          color={"primary.400"}
        >
          <Icon
            as={Ionicons}
            name={"star-sharp"}
            size={"sm"}
            color={"primary.400"}
          />{" "}
          Important
        </Heading>
      }
      ItemSeparatorComponent={<View pt={0.5} pb={0.5} />}
      ListFooterComponent={<View pb={"10"}></View>}
      disableRightSwipe
      data={[
        { key: "1" },
        { key: "2" },
        { key: "3" },
        { key: "11" },
        { key: "23" },
        { key: "35" },
      ]}
      renderItem={renderItem}
      renderHiddenItem={renderHiddenItem}
      keyExtractor={(item) => item?._id}
      rightOpenValue={-200}
      previewRowKey={"0"}
      previewOpenValue={-200}
      previewOpenDelay={3000}
      onRowDidOpen={onRowDidOpen}
      style={{ width: "100%", paddingHorizontal: 10 }}
    />
  );
};

export default ImportantTasks;

const styles = StyleSheet.create({});

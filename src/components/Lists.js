import { Animated, StyleSheet } from "react-native";
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
  FlatList,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import FabComp from "../components/FabComp";
import EmptyTasks from "../components/EmptyTasks";
import { SwipeListView } from "react-native-swipe-list-view";
import moment from "moment";
import { colors } from "../theme/theme";
import { TASKTODOS } from "../constants/routeNames";
import { useNavigation } from "@react-navigation/native";

const Lists = () => {
  const { navigate } = useNavigation();

  const renderItem = ({ item, index }) => (
    <Pressable
      style={styles.listcard}
      onPress={() => navigate(TASKTODOS)}
      w="full"
      bgColor={`${colors.secondaryColor}`}
      android_ripple={{ color: "#9ca3af" }}
    >
      <Box px="4" py="4">
        <HStack alignItems="center" space={3}>
          <Icon as={Ionicons} name={"list"} size={"md"} color={"success.400"} />
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
          </VStack>
          <Spacer />
          <Text
            color="coolGray.600"
            _dark={{
              color: "warmGray.200",
            }}
            fontSize={"xs"}
          >
            {Math.floor(Math.random() * 10)}
          </Text>
        </HStack>
      </Box>
    </Pressable>
  );

  return (
    <FlatList
      ListEmptyComponent={
        <Center my={100}>
          <EmptyTasks />
        </Center>
      }
      ItemSeparatorComponent={<View pt={0.5} pb={0.5} />}
      ListHeaderComponent={<View pt={"1"}></View>}
      ListFooterComponent={<View pb={"10"}></View>}
      data={[
        { key: "1" },
        { key: "2" },
        { key: "3" },
        { key: "11" },
        { key: "23" },
        { key: "135" },
        { key: "345" },
        { key: "35e" },
        { key: "355" },
        { key: "356" },
        { key: "357" },
        { key: "358" },
        { key: "359" },
        { key: "350" },
        { key: "325" },
        { key: "3e5" },
        { key: "3w5" },
        { key: "3r5" },
        { key: "3t5" },
        { key: "3y5" },
        { key: "3g5" },
        { key: "3u5" },
        { key: "3g5" },
        { key: "3l5" },
      ]}
      renderItem={renderItem}
      keyExtractor={(item) => item?._id}
      style={{ width: "100%" }}
    />
  );
};

export default Lists;

const styles = StyleSheet.create({
  listcard: {
    elevation: 2,
    shadowColor: "rgba(0,0,0,0.2)",
    shadowOpacity: 0.2,
  },
});

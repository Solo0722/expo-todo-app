import { StyleSheet } from "react-native";
import React, { useEffect, useMemo, useState, useContext } from "react";
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
  useToast,
  Center,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import TaskCategoriesbar from "../components/TaskCategoriesbar";
import FabComp from "../components/FabComp";
import EmptyTasks from "../components/EmptyTasks";
import { SwipeListView } from "react-native-swipe-list-view";
import moment from "moment";
import { ADDTOTASKS } from "../constants/routeNames";
import { GlobalContext } from "../context/context";
import { colors } from "../theme/theme";
import {
  categoriesQuery,
  groupQuery,
  tasksQuery,
} from "../helpers/sanity/sanityQueries";
import { client } from "../helpers/sanity/sanityClient";
import LoadingSpinner from "../components/LoadingSpinner";

const Tasks = ({ navigation }) => {
  const { tasks, setTasks, setTaskCategories, taskCategories, loggedInUser } =
    useContext(GlobalContext);
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  useMemo(() => {
    const tasks_query = tasksQuery(loggedInUser._id);
    setLoading(true);

    client
      .fetch(tasks_query)
      .then((result) => {
        setTasks(result);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
        toast.show({
          description: "Error fetching tasks. Try again",
          placement: "top",
          colorScheme: "error",
          bgColor: "error.500",
        });
      });
  }, []);

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => <TaskCategoriesbar />,
      headerLeftContainerStyle: {
        width: "100%",
        paddingTop: 15,
      },
      // headerRightContainerStyle: {
      //   width: "20%",
      //   paddingRight: 5,
      //   display: "flex",
      //   alignItems: "center",
      //   justifyContent: "center",
      // },
      // headerRight: () => (
      //   <IconButton
      //     colorScheme={"coolGray"}
      //     borderRadius={"full"}
      //     display={"flex"}
      //     alignItems={"center"}
      //     justifyContent={"center"}
      //     icon={<Icon as={Ionicons} name="ellipsis-vertical-sharp" />}
      //   />
      // ),
      // headerTransparent: true,
    });
  }, [navigation]);

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
      bgColor={`${colors.itemColor}`}
      android_ripple={{ color: "#9ca3af" }}
      // onPress={}
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
              {item.title}
            </Text>
            <Text
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
              fontSize={"xs"}
            >
              {moment(item.dueDateAndTime).format("D-MM-YYYY")}
            </Text>
          </VStack>
          <Spacer />
          <Icon
            as={Ionicons}
            name={"flag"}
            size={"sm"}
            color={item.category.color}
          />
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
      <View style={styles.tasksContainer}>
        {loading ? (
          <LoadingSpinner />
        ) : (
          <SwipeListView
            ListEmptyComponent={
              <Center my={100}>
                <EmptyTasks />
              </Center>
            }
            ListHeaderComponent={
              <Heading
                fontFamily={"colfax-regular"}
                fontSize={"md"}
                mb={4}
                mt={4}
              >
                Today
              </Heading>
            }
            ItemSeparatorComponent={<View pt={0.5} pb={0.5} />}
            disableRightSwipe
            data={tasks || []}
            renderItem={renderItem}
            renderHiddenItem={renderHiddenItem}
            // keyExtractor={({ item }) => item._id}
            rightOpenValue={-200}
            previewRowKey={"0"}
            previewOpenValue={-200}
            previewOpenDelay={3000}
            onRowDidOpen={onRowDidOpen}
            style={{ width: "100%", paddingHorizontal: 10 }}
          />
        )}
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
    flex: 1,
  },
  tasksContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

import { StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import {
  Button,
  Divider,
  FlatList,
  Heading,
  HStack,
  Icon,
  IconButton,
  Input,
  Menu,
  Pressable,
  Text,
  View,
  VStack,
  Checkbox,
  useDisclose,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../theme/theme";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import moment from "moment";
import AddSubTaskModal from "../components/modals/AddSubTaskModal";
import AttachmentsActionSheet from "../components/AttachmentsActionSheet";
import { TASKNOTES } from "../constants/routeNames";

const AddToTasks = ({ navigation }) => {
  const [date, setDate] = useState(new Date());
  const [subTasks, setSubTasks] = useState([]);
  const [showAddSubTaskModal, setShowAddSubTaskModal] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclose();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HStack space={2}>
          <IconButton
            variant={"subtle"}
            colorScheme={"success"}
            rounded={"full"}
            icon={
              <Icon
                as={Ionicons}
                name={"checkmark-sharp"}
                color={"success.500"}
                size={"sm"}
              />
            }
          />
          <Menu
            // w="190"
            bgColor={`${colors.secondaryColor}`}
            placement="bottom left"
            mr={"5"}
            safeAreaRight
            trigger={(triggerProps) => {
              return (
                <IconButton
                  accessibilityLabel="More options menu"
                  {...triggerProps}
                  variant={"ghost"}
                  colorScheme={"coolGray"}
                  rounded={"full"}
                  icon={<Icon as={Ionicons} name="ellipsis-vertical-sharp" />}
                />
              );
            }}
          >
            <Menu.Item>Mark as Done</Menu.Item>
            <Menu.Item>Duplicate Task</Menu.Item>
            <Menu.Item>Print</Menu.Item>
            <Menu.Item>Share</Menu.Item>
            <Menu.Item>Delete</Menu.Item>
          </Menu>
        </HStack>
      ),
      headerRightContainerStyle: {
        marginRight: 10,
      },
    });
  }, []);

  const options = [
    {
      name: "Add Sub-task",
      iconName: "add-sharp",
      hasButton: false,
      hasDescription: false,
      onPress: () => setShowAddSubTaskModal(true),
    },
    {
      name: "Due Date",
      iconName: "md-calendar-sharp",
      hasButton: false,
      hasDescription: true,
      description: moment(date).format("YYYY/MM/DD"),
      onPress: () => showDatepicker(),
    },
    {
      name: "Time & Reminder",
      iconName: "time-sharp",
      hasButton: false,
      hasDescription: true,
      description: moment(date).format("hh:mm A"),
      onPress: () => showTimepicker(),
    },
    {
      name: "Repeat Task",
      iconName: "repeat-sharp",
      hasButton: false,
      hasDescription: true,
      description: "No",
    },
    {
      name: "Notes",
      iconName: "reader-sharp",
      hasButton: true,
      hasDescription: false,
      onPress: () => navigation.navigate(TASKNOTES),
    },
    {
      name: "Attachments",
      iconName: "attach-sharp",
      hasButton: true,
      hasDescription: false,
      onPress: () => onOpen(),
    },
  ];

  const renderTaskSubOptions = ({ item }) => (
    <Pressable
      android_ripple={{ color: "#9ca3af" }}
      style={styles.subTaskBtn}
      onPress={item.onPress}
    >
      <View
        w={"full"}
        h={"full"}
        display={"flex"}
        flexDirection="row"
        alignItems="center"
        justifyContent={"space-between"}
      >
        <HStack space={3}>
          <Icon
            as={Ionicons}
            name={item.iconName}
            color={
              !item.hasButton && !item.hasDescription
                ? "primary.500"
                : "coolGray.500"
            }
            size={"sm"}
          />
          <Heading
            fontWeight={"bold"}
            size={"xs"}
            color={
              !item.hasButton && !item.hasDescription
                ? "primary.500"
                : "coolGray.500"
            }
          >
            {item.name}
          </Heading>
        </HStack>
        {item.hasDescription ? (
          <Button
            variant={"unstyled"}
            size={"xs"}
            color={"coolGray.500"}
            bgColor={"primary.50"}
          >
            {item.description}
          </Button>
        ) : item.hasButton ? (
          <Button variant={"unstyled"} size={"xs"} color={"coolGray.500"}>
            ADD
          </Button>
        ) : null}
      </View>
    </Pressable>
  );

  //date-time picker functions
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    console.log(currentDate);
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: date,
      onChange,
      mode: currentMode,
      is24Hour: true,
    });
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Button
          variant="unstyled"
          color={"coolGray.500"}
          bgColor={"primary.50"}
          endIcon={<Icon as={Ionicons} name="caret-down" size="sm" />}
          size={"xs"}
          height={"8"}
          width={"30%"}
          maxWidth={"50%"}
        >
          No category
        </Button>
      </View>
      <FlatList
        data={options}
        alwaysBounceVertical
        renderItem={renderTaskSubOptions}
        ListHeaderComponent={() => (
          <VStack space={2}>
            <Input
              placeholder="Enter task here"
              numberOfLines={15}
              variant={"filled"}
              bgColor={"transparent"}
              borderColor={"transparent"}
              // autoFocus
              isFullWidth
              multiline
              textAlignVertical="top"
              _focus={{
                borderColor: "transparent",
              }}
            />
            {subTasks && (
              <View my={"4"}>
                {subTasks.map((subTask) => (
                  <Pressable w={"100%"} px={"2"} py={"2"} key={subTask}>
                    <HStack alignItems="center" space={3}>
                      <Checkbox
                        colorScheme="coolGray"
                        aria-label="completed?"
                        rounded={"full"}
                        size={"sm"}
                      />
                      <Text
                        color="coolGray.500"
                        _dark={{
                          color: "warmGray.50",
                        }}
                        bold
                      >
                        {subTask}
                      </Text>
                    </HStack>
                  </Pressable>
                ))}
              </View>
            )}
          </VStack>
        )}
        ItemSeparatorComponent={<Divider bgColor={"coolGray.100"} />}
        ListFooterComponent={<View paddingTop={"10"} />}
        overScrollMode={"never"}
        showsVerticalScrollIndicator={false}
      />
      <AddSubTaskModal
        showAddSubTaskModal={showAddSubTaskModal}
        setShowAddSubTaskModal={setShowAddSubTaskModal}
      />
      <AttachmentsActionSheet
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
      />
    </View>
  );
};

export default AddToTasks;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  titleContainer: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    // width: "50%",
  },
  bodyContainer: {
    paddingHorizontal: 10,
  },
  subTaskBtn: {
    height: 50,
    // paddingVertical: 10,
    paddingHorizontal: 10,
  },
});

import { StyleSheet } from "react-native";
import React, { useContext, useEffect, useState } from "react";
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
  Image,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../theme/theme";
import { DateTimePickerAndroid } from "@react-native-community/datetimepicker";
import moment from "moment";
import AddSubTaskModal from "../components/modals/AddSubTaskModal";
import AttachmentsActionSheet from "../components/AttachmentsActionSheet";
import { GlobalContext } from "../context/context";
import TaskAudio from "../components/TaskAudio";
import TaskImage from "../components/TaskImage";
import AddTaskNotesModal from "../components/modals/AddTaskNotesModal";
import LoadingSpinner from "../components/LoadingSpinner";

const Task = ({ navigation, route }) => {
  const { taskId } = route.params;
  const { taskCategories, tasks, updateTask, deleteTask } =
    useContext(GlobalContext);
  const [specificTask, setSpecificTask] = useState(
    tasks.filter((tk) => tk._id === taskId)[0]
  );
  const [category, setCategory] = useState(specificTask?.category);
  const [title, setTitle] = useState(specificTask?.title);
  const [subTasks, setSubTasks] = useState(specificTask?.subTasks);
  const [dueDateAndTime, setDueDateAndTime] = useState(
    specificTask?.dueDateAndTime
  );
  const [repeatTask, setRepeatTask] = useState(specificTask?.repeatTask);
  const [notes, setNotes] = useState(specificTask?.notes);
  const [attachments, setAttachments] = useState(specificTask?.attachments);

  const [showAddSubTaskModal, setShowAddSubTaskModal] = useState(false);
  const [showAddNotesModal, setShowAddNotesModal] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclose();

  const getSpecificTask = () => {
    const currentTask = tasks.filter((tk) => tk._id === taskId);
    setSpecificTask(currentTask[0]);
    console.log(currentTask[0]);
  };

  const ellipsisData = [
    { title: "Mark as Done" },
    { title: "Print" },
    { title: "Share" },
    {
      title: "Delete",
      onPress: () => {
        deleteTask(specificTask._id);
        navigation.goBack();
      },
    },
  ];

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
      description: moment(dueDateAndTime).format("YYYY/MM/DD"),
      onPress: () => showDatepicker(),
    },
    {
      name: "Time & Reminder",
      iconName: "time-sharp",
      hasButton: false,
      hasDescription: true,
      description: moment(dueDateAndTime).format("hh:mm A"),
      onPress: () => showTimepicker(),
    },
    {
      name: "Repeat Task",
      iconName: "repeat-sharp",
      hasButton: false,
      hasDescription: true,
      description: repeatTask ? "Yes" : "No",
      onPress: () => setRepeatTask(!repeatTask),
    },
    {
      name: "Notes",
      iconName: "reader-sharp",
      hasButton: true,
      hasDescription: false,
      onPress: () => setShowAddNotesModal(true),
    },
    {
      name: "Attachments",
      iconName: "attach-sharp",
      hasButton: true,
      hasDescription: false,
      onPress: () => onOpen(),
    },
  ];

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HStack space={2}>
          <IconButton
            variant={"subtle"}
            colorScheme={"success"}
            rounded={"full"}
            onPress={handleUpdate}
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
            placement={"bottom left"}
            safeAreaRight
            shouldOverlapWithTrigger={false}
            mr={"5"}
            trigger={(triggerProps) => {
              return (
                <IconButton
                  accessibilityLabel="More options menu"
                  variant={"ghost"}
                  colorScheme={"coolGray"}
                  rounded={"full"}
                  icon={<Icon as={Ionicons} name="ellipsis-vertical-sharp" />}
                  {...triggerProps}
                />
              );
            }}
          >
            {ellipsisData.map((menuItem) => (
              <Menu.Item key={menuItem.title} onPress={menuItem.onPress}>
                {menuItem.title}
              </Menu.Item>
            ))}
          </Menu>
        </HStack>
      ),
      headerRightContainerStyle: {
        marginRight: 10,
      },
    });
  }, []);

  useEffect(() => getSpecificTask(), [route]);

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
    setDueDateAndTime(currentDate);
    console.log(selectedDate);
  };

  const showMode = (currentMode) => {
    DateTimePickerAndroid.open({
      value: specificTask.dueDateAndTime,
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

  const handleUpdate = () => {
    const taskData = {
      _id: specificTask._id,
      title,
      category,
      subTasks,
      repeatTask,
      notes,
      attachments,
      dueDateAndTime,
    };
    updateTask(taskData);
  };

  return (
    <>
      {!specificTask ? (
        <LoadingSpinner />
      ) : (
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Menu
              // w="190"
              bgColor={`${colors.secondaryColor}`}
              placement={"bottom left"}
              safeAreaRight
              shouldOverlapWithTrigger={false}
              trigger={(triggerProps) => {
                return (
                  <Button
                    variant="unstyled"
                    color={"coolGray.500"}
                    bgColor={"primary.50"}
                    endIcon={<Icon as={Ionicons} name="caret-down" size="sm" />}
                    size={"xs"}
                    height={"7"}
                    width={"30%"}
                    maxWidth={"50%"}
                    accessibilityLabel="More options menu"
                    {...triggerProps}
                  >
                    {!category ? "No category" : category.name}
                  </Button>
                );
              }}
            >
              {taskCategories?.map((menuItem) => (
                <Menu.Item
                  key={menuItem.name}
                  onPress={() => setCategory(menuItem)}
                >
                  {menuItem.name}
                </Menu.Item>
              ))}
            </Menu>
          </View>
          <FlatList
            data={options}
            alwaysBounceVertical
            renderItem={renderTaskSubOptions}
            ListHeaderComponent={() => (
              <VStack space={2}>
                <Input
                  value={title}
                  onChangeText={(e) => setTitle(e)}
                  placeholder="Enter task here"
                  numberOfLines={10}
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
                  fontSize={"lg"}
                  fontWeight={"bold"}
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
            ListFooterComponent={
              <>
                {notes && (
                  <View px={"2"} py="6" display="flex" flexWrap={"wrap"}>
                    <Heading
                      fontSize={"sm"}
                      fontWeight="normal"
                      color="coolGray.500"
                    >
                      {notes}
                    </Heading>
                  </View>
                )}
                {attachments ? (
                  <View px="2" py="6">
                    <View
                      pb={"1"}
                      display={"flex"}
                      flexDirection={"row"}
                      justifyContent={"flex-start"}
                    >
                      {attachments
                        .filter((attachment) =>
                          attachment.mimeType.includes("image/")
                        )
                        .map((attachment) => (
                          <TaskImage image={attachment} key={attachment.uri} />
                        ))}
                    </View>
                    <View pb={"1"}>
                      {attachments
                        .filter((attachment) =>
                          attachment.mimeType.includes("audio/")
                        )
                        .map((attachment) => (
                          <TaskAudio audio={attachment} key={attachment.uri} />
                        ))}
                    </View>
                  </View>
                ) : (
                  <View pb={"4"} />
                )}
              </>
            }
            overScrollMode={"never"}
            showsVerticalScrollIndicator={false}
          />
          <AddSubTaskModal
            showAddSubTaskModal={showAddSubTaskModal}
            setShowAddSubTaskModal={setShowAddSubTaskModal}
            subTasks={subTasks}
            setSubTasks={setSubTasks}
          />
          <AddTaskNotesModal
            showAddNotesModal={showAddNotesModal}
            setShowAddNotesModal={setShowAddNotesModal}
            notes={notes}
            setNotes={setNotes}
          />
          <AttachmentsActionSheet
            isOpen={isOpen}
            onOpen={onOpen}
            onClose={onClose}
            attachments={attachments}
            setAttachments={setAttachments}
          />
        </View>
      )}
    </>
  );
};

export default Task;

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

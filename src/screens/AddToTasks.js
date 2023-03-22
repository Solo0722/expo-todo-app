import { StyleSheet } from "react-native";
import React, { useEffect } from "react";
import {
  Box,
  Button,
  Center,
  Divider,
  FlatList,
  HamburgerIcon,
  Heading,
  HStack,
  Icon,
  IconButton,
  Input,
  Menu,
  Pressable,
  ScrollView,
  Text,
  View,
  VStack,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import BackButton from "../components/BackButton";

const AddToTasks = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Menu
          // w="190"
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
          <Menu.Item>Arial</Menu.Item>
          <Menu.Item>Nunito Sans</Menu.Item>
          <Menu.Item>Roboto</Menu.Item>
          <Menu.Item>Poppins</Menu.Item>
          <Menu.Item>SF Pro</Menu.Item>
          <Menu.Item>Helvetica</Menu.Item>
          <Menu.Item isDisabled>Sofia</Menu.Item>
          <Menu.Item>Cookie</Menu.Item>
        </Menu>
      ),
      headerRightContainerStyle: {
        marginRight: 10,
      },
      headerLeft: () => <BackButton />,
    });
  }, []);

  const options = [
    {
      name: "Add Sub-task",
      iconName: "add-sharp",
      hasButton: false,
      hasDescription: false,
    },
    {
      name: "Due Date",
      iconName: "md-calendar-sharp",
      hasButton: false,
      hasDescription: true,
      description: "2023/02/08",
    },
    {
      name: "Time & Reminder",
      iconName: "time-sharp",
      hasButton: false,
      hasDescription: true,
      description: "No",
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
    },
    {
      name: "Attachments",
      iconName: "attach-sharp",
      hasButton: true,
      hasDescription: false,
    },
  ];

  const renderTaskSubOptions = ({ item }) => (
    <Pressable android_ripple={{ color: "#9ca3af" }} style={styles.subTaskBtn}>
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

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Button
          variant="unstyled"
          color={"coolGray.500"}
          bgColor={"primary.50"}
          endIcon={<Icon as={Ionicons} name="caret-down" size="sm" />}
          size={"xs"}
          borderRadius={"20"}
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
        )}
        ItemSeparatorComponent={<Divider bgColor={"coolGray.100"} />}
        ListFooterComponent={<View paddingTop={"10"} />}
        // overScrollMode={"never"}
        // showsVerticalScrollIndicator={false}
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

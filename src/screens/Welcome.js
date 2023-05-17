import { StyleSheet } from "react-native";
import React from "react";
import { Box, Button, Heading, HStack, Icon, View, VStack } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { SIGNUP, TABNAVIGATOR } from "../constants/routeNames";

const Welcome = ({ navigation }) => {
  return (
    <View style={styles.container} bgColor={"primary.200"}>
      <Heading fontSize={"2xl"} fontWeight={"extrabold"}>
        Welcome to To-do List
      </Heading>
      <View style={styles.benefitsContainer}>
        {benefits.map((benefit) => (
          <Box key={benefit.title} style={styles.benefitContainer}>
            <HStack space={4}>
              <Icon
                as={Ionicons}
                name={benefit.iconName}
                size={"lg"}
                color={"primary.400"}
              />
              <VStack space={1}>
                <Heading fontSize={"md"} fontWeight={"extraBlack"}>
                  {benefit.title}
                </Heading>
                <Heading fontSize={"xs"} fontWeight={"normal"}>
                  {benefit.description}
                </Heading>
              </VStack>
            </HStack>
          </Box>
        ))}
      </View>
      <Button
        w={"full"}
        rounded={"full"}
        marginTop={50}
        onPress={() => navigation.navigate(SIGNUP)}
      >
        Continue
      </Button>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  benefitsContainer: {
    width: "100%",
    paddingVertical: 60,
    paddingHorizontal: "10%",
    display: "flex",
    justifyContent: "center",
  },
  benefitContainer: {
    paddingVertical: 30,
  },
});

const benefits = [
  {
    title: "Create Tasks Quickly and Easily",
    description: "Input tasks,  subtasks and repetitive tasks.",
    iconName: "create",
  },
  {
    title: "Task Reminders",
    description: "Set reminders, and never miss important things.",
    iconName: "alarm",
  },
  {
    title: "Personalized widgets",
    description: "Create widgets and view your tasks more easily.",
    iconName: "grid",
  },
  {
    title: "Custom Themes",
    description: "Choose the theme you like and start your wonderful day.",
    iconName: "shirt",
  },
];

import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ImportantTasks from "../components/ImportantTasks";

const TaskTodos = ({ route }) => {
  const params = route.params;

  return (
    <View>
      <ImportantTasks />
    </View>
  );
};

export default TaskTodos;

const styles = StyleSheet.create({});

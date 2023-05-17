import { StyleSheet } from "react-native";
import React from "react";
import Animated from "react-native-reanimated";
import { Button, Center, Heading, View } from "native-base";

const TaskCategoriesbar = () => {
  return (
    <Center justifyContent="center">
      <Animated.FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        ListHeaderComponent={<View pl={2}></View>}
        centerContent
        overScrollMode={"never"}
        style={{
          marginBottom: 10,
          width: "100%",
        }}
        data={[]}
        renderItem={({ item, index }) => (
          <Button
            fontSize={"xs"}
            size={"xs"}
            variant={"unstyled"}
            borderRadius={20}
            mr={"4"}
            height={7}
            bgColor={`${
              item._id === selected?._id ? "primary.400" : "primary.100"
            }`}
            // color={"coolGray.800"}
            onPress={() => {
              handleFilterTasks(item);
              setSelected(item);
            }}
          >
            <Heading
              fontSize={"xs"}
              height={"100%"}
              color={`${item._id === selected?._id ? "white" : "coolGray.500"}`}
            >
              {item.name}
            </Heading>
          </Button>
        )}
      />
    </Center>
  );
};

export default TaskCategoriesbar;

const styles = StyleSheet.create({});

import { StyleSheet } from "react-native";
import React from "react";
import Animated from "react-native-reanimated";
import { Button, Heading, View } from "native-base";

const TaskCategoriesbar = () => {
  return (
    <View>
      <Animated.FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        ListHeaderComponent={<View pl={2} />}
        centerContent
        overScrollMode={"never"}
        style={{
          marginBottom: 10,
        }}
        data={new Array(5)}
        renderItem={({ item, index }) => (
          <Button
            fontSize={"xs"}
            size={"xs"}
            variant={"unstyled"}
            borderRadius={20}
            mr={"4"}
            height={7}
            bgColor={`${index === 0 ? "primary.400" : "primary.100"}`}
            // color={"coolGray.800"}
          >
            <Heading
              fontSize={"xs"}
              height={"100%"}
              color={`${index === 0 ? "white" : "coolGray.500"}`}
            >
              Personal
            </Heading>
          </Button>
        )}
      />
    </View>
  );
};

export default TaskCategoriesbar;

const styles = StyleSheet.create({});

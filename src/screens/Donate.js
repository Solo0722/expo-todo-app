import { StyleSheet } from "react-native";
import React from "react";
import { FlatList, Heading, HStack, Icon, Pressable, View } from "native-base";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const Donate = () => {
  const donations = [
    {
      name: "A Lollipop",
      iconName: "candy",
      color: "rose.500",
    },
    {
      name: "A Chocolate Bar",
      iconName: "candy",
      color: "blue.500",
    },
    {
      name: "A Cup of Coffee",
      iconName: "coffee",
      color: "amber.900",
    },
    {
      name: "A Burger Meal",
      iconName: "hamburger",
      color: "orange.500",
    },
    {
      name: "A Big Dinner",
      iconName: "food",
      color: "green.400",
    },
  ];

  const renderItem = ({ item }) => (
    <Pressable
      android_ripple={{ color: "#9ca3af" }}
      bgColor={"white"}
      my={"2"}
      shadow={"2"}
      w={"full"}
      borderRadius={"sm"}
      px={"2"}
      py={"6"}
    >
      <HStack space={"4"} display={"flex"} alignItems={"flex-end"}>
        <Icon
          as={MaterialCommunityIcons}
          name={item.iconName}
          size={"lg"}
          color={item.color}
        />
        <Heading fontSize={"md"}>{item.name}</Heading>
      </HStack>
    </Pressable>
  );

  return (
    <View style={styles.container} bgColor={"primary.200"}>
      <Heading fontSize={"lg"} fontFamily={"bellota-bold"} mb={"4"}>
        Support To-do List Developer
      </Heading>
      <Heading fontSize={"sm"} fontFamily={"bellota-regular"} mb={"4"}>
        This is a donation page. You could treat me with a meal or a cup of
        coffee here. I will be really grateful for your kind encouragement.
        Anyway, I feel grateful to you whether you donate or not. Thank you for
        using this app.
      </Heading>
      <FlatList
        data={donations}
        renderItem={renderItem}
        // keyExtractor={({ item }) => item.name}
      />
    </View>
  );
};

export default Donate;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
});

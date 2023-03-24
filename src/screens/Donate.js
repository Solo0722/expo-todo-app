import { StyleSheet } from "react-native";
import React from "react";
import { FlatList, Heading, HStack, Pressable, View } from "native-base";
import { Ionicons } from "@expo/vector-icons";

const Donate = () => {
  const donations = [
    {
      name: "A Lollipop",
      iconName: "",
    },
    {
      name: "A Chocolate Bar",
      iconName: "",
    },
    {
      name: "A Cup of Coffee",
      iconName: "",
    },
    {
      name: "A Burger Meal",
      iconName: "",
    },
    {
      name: "A Big Dinner",
      iconName: "",
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
      p={"2"}
    >
      <HStack space={"3"}>
        <Icon
          as={Ionicons}
          name={item.iconName}
          size={"sm"}
          color={"primary.400"}
        />
        <Heading fontSize={"xs"} fontFamily={"colfax-regular"}>
          {item.name}
        </Heading>
      </HStack>
    </Pressable>
  );

  return (
    <View style={styles.container} bgColor={"primary.200"}>
      <Heading fontSize={"sm"} fontFamily={"colfax-bold"} mb={"2"}>
        Support To-do List Developer
      </Heading>
      <Heading fontSize={"xs"} fontFamily={"colfax-regular"} mb={"4"}>
        This is a donation page. You could treat us with a meal or a cup of
        coffee here. We will be really grateful for your kind encouragement.
        Anyway, we feel grateful to you whether you donate or not. Thank you for
        using this app.
      </Heading>
      <FlatList
        data={[donations]}
        renderItem={renderItem}
        keyExtractor={({ item }) => item.name}
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

import { Linking, StyleSheet } from "react-native";
import React from "react";
import { Heading, HStack, Icon, Pressable, View } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { DONATE, FAQS, PROFILE, SETTINGS } from "../constants/routeNames";

const Drawerbar = () => {
  const { navigate } = useNavigation();

  const links = [
    {
      name: "Profile",
      iconName: "person-sharp",
      onPress: () => navigate(PROFILE),
    },
    {
      name: "Star Tasks",
      iconName: "star-sharp",
      onPress: () => null,
    },
    {
      name: "Star Classes",
      iconName: "school-sharp",
      onPress: () => null,
    },
    {
      name: "Widget",
      iconName: "reader-sharp",
      onPress: () => null,
    },
    {
      name: "Donate",
      iconName: "heart-sharp",
      onPress: () => navigate(DONATE),
    },
    {
      name: "Feedback",
      iconName: "document-text-sharp",
      onPress: () => Linking.openURL("mailto:owusuansahsolomon39@gmail.com"),
    },
    {
      name: "Settings",
      iconName: "settings-sharp",
      onPress: () => navigate(SETTINGS),
    },
  ];

  return (
    <View flex={"1"}>
      <View
        flex={"0.2"}
        backgroundColor={"primary.500"}
        alignItems={"flex-start"}
        justifyContent={"flex-end"}
        mb={5}
      >
        <Heading
          fontSize={"2xl"}
          fontWeight={"bold"}
          color={"white"}
          pl={5}
          pb={5}
        >
          To-do List
        </Heading>
      </View>
      <View flex={"0.8"}>
        {links.map((link) => (
          <Pressable
            key={link.name}
            android_ripple={{ color: "#9ca3af" }}
            style={styles.linkBtn}
            w={"full"}
            onPress={link.onPress}
          >
            <HStack space={4}>
              <Icon
                as={Ionicons}
                name={link.iconName}
                size={"md"}
                color={"primary.500"}
              />
              <Heading
                fontSize={"xs"}
                fontWeight={"600"}
                color={"coolGray.500"}
              >
                {link.name}
              </Heading>
            </HStack>
          </Pressable>
        ))}
      </View>
    </View>
  );
};

export default Drawerbar;

const styles = StyleSheet.create({
  linkBtn: {
    height: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

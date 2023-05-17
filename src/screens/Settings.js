import { Animated, StyleSheet } from "react-native";
import React from "react";
import { View, Pressable, HStack, Icon, Heading } from "native-base";
import { Ionicons } from "@expo/vector-icons";

const sectionData = [
  {
    title: "Customize",
    data: [
      {
        name: "Theme",
        iconName: "color-palette-sharp",
        onPress: () => null,
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Rate Us",
        iconName: "star-sharp",
        onPress: () => null,
      },
      {
        name: "Share App",
        iconName: "share-social-sharp",
        onPress: () => null,
      },
      {
        name: "About To-do List",
        iconName: "apps-sharp",
        onPress: () => null,
      },
      {
        name: "About developer",
        iconName: "md-person-circle-sharp",
        onPress: () => null,
      },
      {
        name: "Privacy Policy",
        iconName: "shield-checkmark-sharp",
        onPress: () => null,
      },
      {
        name: "Version",
        iconName: "layers-sharp",
        onPress: () => null,
      },
    ],
  },
];

const Settings = () => {
  const renderItem = ({ item }) => (
    <Pressable
      key={item.name}
      android_ripple={{ color: "#9ca3af" }}
      style={styles.itemContainer}
      w={"full"}
      onPress={item.onPress}
    >
      <HStack space={4}>
        <Icon
          as={Ionicons}
          name={item.iconName}
          size={"md"}
          color={"primary.400"}
        />
        <Heading
          fontSize={"md"}
          fontFamily="bellota-regular"
          fontWeight={"600"}
          color={"black"}
        >
          {item.name}
        </Heading>
      </HStack>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <Animated.SectionList
        sections={sectionData}
        renderItem={renderItem}
        renderSectionHeader={({ section }) => (
          <Heading
            fontSize={"sm"}
            color="coolGray.500"
            style={styles.sectionHeader}
          >
            {section.title}
          </Heading>
        )}
      />
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
  sectionHeader: {
    paddingTop: 15,
    paddingBottom: 7,
    paddingHorizontal: 10,
  },
  itemContainer: {
    height: 50,
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginVertical: 5,
  },
});

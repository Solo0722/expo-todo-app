import { StyleSheet, Text } from "react-native";
import React, { useEffect } from "react";
import { Button, View, ScrollView, IconButton, Icon, Fab } from "native-base";
import Animated from "react-native-reanimated";
import { Ionicons } from "@expo/vector-icons";

const Tasks = ({ navigation }) => {
  useEffect(() => {
    navigation.setOptions({
      headerTitleStyle: {
        fontSize: 16,
        fontFamily: "colfax-bold",
      },
      headerLeft: () => (
        <Animated.FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          ListHeaderComponent={<View pl={5} />}
          centerContent
          overScrollMode={"never"}
          data={new Array(5)}
          renderItem={({ item }) => (
            <Button
              fontSize={"xs"}
              size={"xs"}
              variant={"subtle"}
              borderRadius={20}
              mr={5}
            >
              Personal
            </Button>
          )}
        />
      ),
      headerLeftContainerStyle: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        width: "85%",
        paddingVertical: 10,
      },
      headerRightContainerStyle: {
        width: "15%",
        paddingHorizontal: 5,
        paddingVertical: 10,
      },
      headerRight: () => (
        <IconButton
          colorScheme={"coolGray"}
          borderRadius={"full"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          icon={<Icon as={Ionicons} name="ellipsis-vertical-sharp" />}
        />
      ),
      // headerTransparent: true,
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Fab
        renderInPortal={false}
        shadow={2}
        size="sm"
        position="absolute"
        bottom={"30"}
        icon={
          <Icon color="white" as={<Ionicons name="add-sharp" />} size="sm" />
        }
      />
    </View>
  );
};

export default Tasks;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    padding: 10,
    flex: 1,
  },
});

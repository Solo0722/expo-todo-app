import { SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import {
  FlatList,
  Heading,
  ScrollView,
  SectionList,
  View,
  VStack,
} from "native-base";
import FabComp from "../components/FabComp";
import EmptyComp from "../components/EmptyComp";
import TabHeader from "../components/TabHeader";
import ClassCard from "../components/ClassCard";
import { colors } from "../theme/theme";
import Searchbar from "../components/Searchbar";

const Classes = ({ navigation }) => {
  const data = [
    {
      id: "bd7acbea-c1b1-46c2-aed5-3ad53abb28ba",
      fullName: "Afreen Khan",
      timeStamp: "12:47 PM",
      recentText: "Good Day!",
      avatarUrl:
        "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
    },
    {
      id: "3ac68afc-c605-48d3-a4f8-fbd91aa97f63",
      fullName: "Sujita Mathur",
      timeStamp: "11:11 PM",
      recentText: "Cheer up, there!",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyEaZqT3fHeNrPGcnjLLX1v_W4mvBlgpwxnA&usqp=CAU",
    },
    {
      id: "58694a0f-3da1-471f-bd96-145571e29d72",
      fullName: "Anci Barroco",
      timeStamp: "6:22 PM",
      recentText: "Good Day!",
      avatarUrl: "https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg",
    },
    {
      id: "68694a0f-3da1-431f-bd56-142371e29d72",
      fullName: "Aniket Kumar",
      timeStamp: "8:56 PM",
      recentText: "All the best",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr01zI37DYuR8bMV5exWQBSw28C1v_71CAh8d7GP1mplcmTgQA6Q66Oo--QedAN1B4E1k&usqp=CAU",
    },

    {
      id: "28694a0f-3da1-471f-bd96-142456e29d72",
      fullName: "Kiara",
      timeStamp: "12:47 PM",
      recentText: "I will call today.",
      avatarUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBwgu1A5zgPSvfE83nurkuzNEoXs9DMNr8Ww&usqp=CAU",
    },
  ];

  return (
    <SafeAreaView>
      <View px="2" w="full" h="full">
        <SectionList
          data={[]}
          sections={[]}
          renderSectionHeader={({ section }) => (
            <Heading fontSize={"sm"} fontWeight={"bold"} color="primary.500">
              Others
            </Heading>
          )}
          // renderItem={() => <NoteCard />}
          ItemSeparatorComponent={<View my="2" />}
          ListHeaderComponent={() => (
            <VStack space="2">
              <TabHeader title="My Classes" />
              <View mb="2">
                <Searchbar />
              </View>
            </VStack>
          )}
          ListEmptyComponent={
            <EmptyComp
              title="No classes available!"
              subText="Click the + to create classes"
            />
          }
          ListFooterComponent={() => <View my="2" />}
        />
        <FabComp />
      </View>
    </SafeAreaView>
  );
};

export default Classes;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 10,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

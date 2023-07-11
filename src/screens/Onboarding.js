import { SafeAreaView, StyleSheet } from "react-native";
import React from "react";
import { Button, Image, Text, VStack, View } from "native-base";
import { OnboardFlow } from "react-native-onboard";
import { SIGNIN } from "../constants/routeNames";
import OnboardImg1 from "../assets/images/onboard1.svg";
import OnboardImg2 from "../assets/images/onboard2.svg";
import OnboardImg3 from "../assets/images/onboard3.svg";
import { colors } from "../theme/theme";

const Onboarding = ({ navigation }) => {
  return (
    <View
      w="full"
      h="full"
      mt="4"
      px="4"
      flex="1"
      justifyContent={"space-between"}
    >
      <View flex="0.90" py="8">
        <OnboardFlow
          style={{ width: "100%", height: "100%" }}
          onDone={() => navigation.navigate(SIGNIN)}
          paginationColor="#444"
          paginationSelectedColor="#999"
          PrimaryButtonComponent={() => null}
          textStyle={{
            color: "white",
            fontFamily: "plusSans-regular",
            fontSize: 10,
          }}
          subtitleStyle={{
            color: "white",
            fontFamily: "plusSans-regular",
            fontSize: 12,
          }}
          titleStyle={{
            color: "white",
            fontFamily: "plusSans-regular",
            fontSize: 20,
            fontWeight: "700",
          }}
          pages={[
            {
              title: "Welcome to my app",
              subtitle:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
              imageComponent: (
                <OnboardImg1
                  //   source={require("../assets/images/onboard1.svg")}
                  //   alt="onboard"
                  width={300}
                  height={300}
                  rounded="full"
                  //   bgColor={"muted.900"}
                  my="4"
                />
              ),
            },
            {
              title: "Welcome to my app",
              subtitle:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
              imageComponent: (
                <OnboardImg3 width={300} height={300} rounded="full" my="4" />
              ),
            },
          ]}
          textAlign="center"
          type="inline" // Change to either 'fullscreen', 'bottom-sheet', or 'inline'
        />
      </View>

      <View flex="0.20" alignItems="center" justifyContent={"center"} w="full">
        <VStack space={"6"} w="full">
          <Button
            bgColor={"primary.500"}
            rounded={"full"}
            colorScheme="primary"
            _text={{
              color: "black",
              fontWeight: "bold",
            }}
            onPress={() => navigation.navigate(SIGNUP)}
          >
            Get Started
          </Button>
          <Button
            //   bgColor={"primary.500"}
            rounded={"full"}
            variant={"ghost"}
            colorScheme="primary"
            _text={{
              color: `${colors.secondaryColor}`,
              fontWeight: "bold",
            }}
            onPress={() => navigation.navigate(SIGNIN)}
          >
            Sign in
          </Button>
        </VStack>
      </View>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({});

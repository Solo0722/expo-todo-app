import { StyleSheet } from "react-native";
import React from "react";
import {
  Button,
  Divider,
  FormControl,
  Heading,
  HStack,
  Icon,
  Image,
  Input,
  Link,
  Text,
  View,
  VStack,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { SIGNIN } from "../constants/routeNames";
import { colors } from "../theme/theme";

const Signup = ({ navigation }) => {
  return (
    <View style={styles.container} bgColor={`${colors.secondaryColor}`}>
      <Image
        source={require("../assets/images/todolist.png")}
        w={"70"}
        h={"70"}
        rounded={"2xl"}
        alt="logo"
        mb={4}
      />
      <View style={styles.signupContainer}>
        <VStack space={4} mt="5">
          <FormControl>
            <Input
              variant={"filled"}
              cursorColor={"black"}
              bgColor={"coolGray.100"}
              _focus={{
                bgColor: "coolGray.200",
                borderColor: "none",
              }}
              colorScheme={"primary"}
              InputLeftElement={
                <Icon
                  as={<Ionicons name="person" />}
                  ml="2"
                  mr="2"
                  color="primary.300"
                />
              }
              placeholder="Username"
              color={"black"}
            />
          </FormControl>
          <FormControl>
            <Input
              variant={"filled"}
              cursorColor={"black"}
              bgColor={"coolGray.100"}
              _focus={{
                bgColor: "coolGray.200",
                borderColor: "none",
              }}
              colorScheme={"primary"}
              InputLeftElement={
                <Icon
                  as={<Ionicons name="at-circle" />}
                  ml="2"
                  mr="2"
                  color="primary.300"
                />
              }
              placeholder="Email"
              color={"black"}
            />
          </FormControl>
          <FormControl>
            <Input
              cursorColor={"black"}
              variant={"filled"}
              colorScheme={"primary"}
              type="password"
              bgColor={"coolGray.100"}
              _focus={{
                bgColor: "coolGray.200",
                borderColor: "none",
              }}
              InputLeftElement={
                <Icon
                  as={<Ionicons name="lock-closed" />}
                  ml="2"
                  mr="2"
                  color="primary.300"
                />
              }
              placeholder="Password"
              color={"black"}
            />
          </FormControl>
          <Button mt="4" colorScheme="primary">
            Sign up
          </Button>

          <Button
            startIcon={
              <Icon as={Ionicons} name="logo-google" size="sm" mr={"30"} />
            }
            colorScheme={"red"}
            mt={"6"}
          >
            Continue with Google
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              Already have an account.{" "}
            </Text>
            <Link
              _text={{
                color: "primary.500",
                fontWeight: "medium",
                fontSize: "sm",
              }}
              onPress={() => navigation.navigate(SIGNIN)}
            >
              Sign in
            </Link>
          </HStack>
        </VStack>
      </View>
    </View>
  );
};

export default Signup;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 50,
    paddingHorizontal: 20,
    position: "relative",
  },
  signupContainer: {
    width: "100%",
  },
});

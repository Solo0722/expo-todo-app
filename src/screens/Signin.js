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
import { colors } from "../theme/theme";

const Signin = ({ navigation }) => {
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
      <View style={styles.signinContainer}>
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
                  as={<Ionicons name="at-circle" />}
                  // size={5}
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
              variant={"filled"}
              cursorColor={"black"}
              bgColor={"coolGray.100"}
              _focus={{
                bgColor: "coolGray.200",
                borderColor: "none",
              }}
              colorScheme={"primary"}
              type="password"
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
            <Link
              _text={{
                fontSize: "xs",
                fontWeight: "500",
                color: "primary.500",
              }}
              alignSelf="flex-end"
              mt="1"
            >
              Forget Password?
            </Link>
          </FormControl>
          <Button mt="4" colorScheme="primary">
            Sign in
          </Button>
          <HStack mt="6" justifyContent="center">
            <Text
              fontSize="sm"
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              I'm a new user.{" "}
            </Text>
            <Link
              _text={{
                color: "primary.500",
                fontWeight: "medium",
                fontSize: "sm",
              }}
              onPress={() => navigation.goBack()}
            >
              Sign up
            </Link>
          </HStack>
        </VStack>
      </View>
    </View>
  );
};

export default Signin;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 50,
    paddingHorizontal: 20,
  },
  signinContainer: {
    width: "100%",
  },
});

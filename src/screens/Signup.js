import { StyleSheet } from "react-native";
import React, { useState, useContext } from "react";
import {
  Button,
  Divider,
  FormControl,
  HStack,
  Icon,
  IconButton,
  Input,
  Link,
  Text,
  useToast,
  View,
  VStack,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { SIGNIN } from "../constants/routeNames";
import { colors } from "../theme/theme";
import uuid from "react-native-uuid";
import { DEFAULT_IMAGE_URI } from "../constants/general";
import { client } from "../helpers/sanity/sanityClient";
import { GlobalContext } from "../context/context";
import SvgImage from "../assets/images/Audiobook.svg";

const Signup = ({ navigation }) => {
  const toast = useToast();
  const {} = useContext(GlobalContext);
  const [loading, setLoading] = useState(false);

  const [signupFormData, setSignupFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e, name) => {
    setSignupFormData({
      ...signupFormData,
      [name]: e.trim(),
    });
  };

  const validate = () => {
    let regex = /[a-z0-9]+@[a-z]+.[a-z]{2,4}/;
    if (!signupFormData.username) {
      setErrors({
        username: "Username is required",
      });
      return false;
    }
    if (signupFormData.username.length < 3) {
      setErrors({
        username: "Username must be at least 3 characters",
      });
      return false;
    }
    if (!signupFormData.email) {
      setErrors({
        email: "Email is required",
      });
      return false;
    }
    if (regex.test(signupFormData.email) === false) {
      setErrors({
        email: "Email is not valid",
      });
      return false;
    }
    if (!signupFormData.password) {
      setErrors({
        password: "Password is required",
      });
      return false;
    }
    if (signupFormData.password.length < 6) {
      setErrors({
        ...errors,
        password: "Password must be at least 6 characters",
      });
      return false;
    }

    return true;
  };

  const submitSignupForm = () => {
    if (validate()) {
      setLoading(true);
      setErrors({});

      const doc = {
        _id: uuid.v4(),
        _type: "user",
        ...signupFormData,
        imageUrl: DEFAULT_IMAGE_URI,
      };

      console.log(doc);

      client
        .createIfNotExists(doc)
        .then((result) => {
          setLoading(false);
          // setLoggedInUser(result);
        })
        .catch((err) => {
          console.log(err);
          toast.show({
            description: "Error occured! Try again",
            colorScheme: "error",
            bgColor: "error.500",
          });
          setLoading(false);
        });
    }
  };

  return (
    <View style={styles.container} bgColor={`${colors.backgroundColor}`}>
      {/* <Image
        source={require("../assets/images/todolist.png")}
        w={"70"}
        h={"70"}
        rounded={"2xl"}
        alt="logo"
        mb={4}
      /> */}
      <SvgImage width={"300"} height={"200"} />
      <View style={styles.signupContainer}>
        <VStack space={4} mt="5">
          <FormControl isRequired isInvalid={"username" in errors}>
            <Input
              variant={"filled"}
              cursorColor={colors.white}
              bgColor={colors.accentColor2}
              _focus={{
                bgColor: colors.accentColor,
              }}
              _invalid={{
                bgColor: "error.50",
              }}
              borderColor={"none"}
              borderWidth={0}
              color={"white"}
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
              value={signupFormData.username}
              onChangeText={(e) => handleChange(e, "username")}
            />
            {"username" in errors && (
              <FormControl.ErrorMessage>
                {errors.username}
              </FormControl.ErrorMessage>
            )}
          </FormControl>
          <FormControl isRequired isInvalid={"email" in errors}>
            <Input
              variant={"filled"}
              cursorColor={colors.white}
              bgColor={colors.accentColor2}
              _focus={{
                bgColor: colors.accentColor,
              }}
              _invalid={{
                bgColor: "error.50",
              }}
              borderColor={"none"}
              borderWidth={0}
              color={"white"}
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
              value={signupFormData.email}
              onChangeText={(e) => handleChange(e, "email")}
            />
            {"email" in errors && (
              <FormControl.ErrorMessage>
                {errors.email}
              </FormControl.ErrorMessage>
            )}
          </FormControl>
          <FormControl isRequired isInvalid={"password" in errors}>
            <Input
              variant={"filled"}
              cursorColor={colors.white}
              bgColor={colors.accentColor2}
              _focus={{
                bgColor: colors.accentColor,
              }}
              _invalid={{
                bgColor: "error.50",
              }}
              borderColor={"none"}
              borderWidth={0}
              color={"white"}
              colorScheme={"primary"}
              InputLeftElement={
                <Icon
                  as={<Ionicons name="lock-closed" />}
                  ml="2"
                  mr="2"
                  color="primary.300"
                />
              }
              placeholder="Password"
              value={signupFormData.password}
              onChangeText={(e) => handleChange(e, "password")}
              autoComplete="password-new"
            />
            {"password" in errors && (
              <FormControl.ErrorMessage>
                {errors.password}
              </FormControl.ErrorMessage>
            )}
          </FormControl>
          <Button
            mt="4"
            bgColor={"primary.500"}
            colorScheme="primary"
            isLoading={loading}
            onPress={submitSignupForm}
          >
            Sign up
          </Button>

          {/* <HStack mt="6" space="4" width="100%" justifyContent="center">
            <IconButton
              width="50%"
              icon={<Icon as={Ionicons} name="logo-google" size="sm" />}
              _icon={{ color: "red.400" }}
              // colorScheme={"white"}
              bgColor={"white"}
              variant="solid"
            />
          </HStack> */}
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

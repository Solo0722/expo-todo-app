import { StyleSheet } from "react-native";
import React, { useState, useContext } from "react";
import {
  Button,
  FormControl,
  HStack,
  Icon,
  Input,
  Link,
  Text,
  View,
  VStack,
  useToast,
  Box,
  Divider,
  Spacer,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../theme/theme";
import SvgImage from "../assets/images/Audiobook.svg";
import { userQuery } from "../helpers/sanity/sanityQueries";
import { client } from "../helpers/sanity/sanityClient";
import { GlobalContext } from "../context/context";
import { SIGNUP } from "../constants/routeNames";

const Signin = ({ navigation }) => {
  const toast = useToast();
  const {} = useContext(GlobalContext);
  const [loginFormData, setLoginFormData] = useState({
    username: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e, name) => {
    setLoginFormData({
      ...loginFormData,
      [name]: e.trim(),
    });
  };

  const validate = () => {
    if (!loginFormData.username) {
      setErrors({
        username: "Username is required",
      });
      return false;
    }
    if (!loginFormData.password) {
      setErrors({
        password: "Password is required",
      });

      return false;
    }

    return true;
  };

  const submitLoginForm = () => {
    if (validate()) {
      setLoading(true);
      setErrors({});

      const q = userQuery(
        loginFormData.username.trim(),
        loginFormData.password.trim()
      );

      client
        .fetch(q)
        .then((result) => {
          setLoading(false);
          // setLoggedInUser(result[0]);
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
    <View
      w="full"
      h="full"
      flex="1"
      alignItems={"center"}
      justifyContent={"center"}
      p="4"
    >
      <View w="full">
        <VStack space={"8"} mt="5">
          <FormControl isInvalid={"username" in errors}>
            <Input
              variant={"outline"}
              cursorColor={"white"}
              color={"white"}
              bgColor="transparent"
              borderColor={"coolGray.700"}
              rounded={"lg"}
              _focus={{
                borderColor: "coolGray.600",
              }}
              _invalid={{
                borderColor: "error.50",
              }}
              colorScheme={"coolGray"}
              placeholder="Email"
              onChangeText={(e) => handleChange(e, "username")}
            />
            {"username" in errors && (
              <FormControl.ErrorMessage>
                {errors.username}
              </FormControl.ErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={"password" in errors}>
            <Input
              variant={"outline"}
              cursorColor={"white"}
              color={"white"}
              bgColor="transparent"
              borderColor={"coolGray.700"}
              rounded={"lg"}
              _focus={{
                borderColor: "coolGray.600",
              }}
              _invalid={{
                borderColor: "error.50",
              }}
              colorScheme={"coolGray"}
              type="password"
              placeholder="Password"
              isRequired
              onChangeText={(e) => handleChange(e, "password")}
            />
            {"password" in errors && (
              <FormControl.ErrorMessage>
                {errors.password}
              </FormControl.ErrorMessage>
            )}
            <Link
              _text={{
                fontSize: "xs",
                fontWeight: "500",
                color: "primary.500",
                textDecoration: "none",
              }}
              alignSelf="flex-end"
              mt="2"
            >
              Forget Password?
            </Link>
          </FormControl>
          <Button
            bgColor={"primary.500"}
            rounded={"lg"}
            colorScheme="primary"
            _text={{
              color: "black",
              fontWeight: "bold",
            }}
            isLoading={loading}
            onPress={submitLoginForm}
          >
            Login
          </Button>

          <HStack top="64" justifyContent="center">
            <Text
              fontSize="xs"
              fontWeight="500"
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              I'm a new user.{" "}
            </Text>
            <Link
              _text={{
                fontSize: "xs",
                fontWeight: "500",
                color: "primary.500",
                textDecoration: "none",
              }}
              onPress={() => navigation.navigate(SIGNUP)}
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

const styles = StyleSheet.create({});

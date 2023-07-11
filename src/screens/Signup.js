import { StyleSheet } from "react-native";
import React, { useState, useContext } from "react";
import {
  Button,
  Divider,
  FormControl,
  Heading,
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
          <Heading fontWeight="bold" color="white">
            Sign up
          </Heading>
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
              placeholder="Username"
              onChangeText={(e) => handleChange(e, "username")}
            />
            {"username" in errors && (
              <FormControl.ErrorMessage>
                {errors.username}
              </FormControl.ErrorMessage>
            )}
          </FormControl>
          <FormControl isInvalid={"email" in errors}>
            <Input
              variant={"outline"}
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
              onChangeText={(e) => handleChange(e, "email")}
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
          </FormControl>
          <Button
            bgColor={"primary.500"}
            rounded={"lg"}
            colorScheme="primary"
            _text={{
              color: "black",
              fontWeight: "bold",
            }}
            _pressed={{
              bgColor: "primary.600",
            }}
            isLoading={loading}
            onPress={submitSignupForm}
          >
            Sign up
          </Button>

          <HStack top={"56"} justifyContent="center">
            <Text
              fontSize="xs"
              fontWeight="500"
              color="coolGray.600"
              _dark={{
                color: "warmGray.200",
              }}
            >
              Already have an account?{" "}
            </Text>
            <Link
              _text={{
                fontSize: "xs",
                fontWeight: "500",
                color: `${colors.secondaryColor}`,
                textDecoration: "none",
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

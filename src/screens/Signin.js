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
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../theme/theme";
import SvgImage from "../assets/images/Audiobook.svg";
import { userQuery } from "../helpers/sanity/sanityQueries";
import { client } from "../helpers/sanity/sanityClient";
import { GlobalContext } from "../context/context";

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
    <View style={styles.container} bgColor={`${colors.accentColor}`}>
      <SvgImage width={"300"} height={"200"} />
      <View style={styles.signinContainer}>
        <VStack space={4} mt="5">
          <FormControl isInvalid={"username" in errors}>
            <Input
              variant={"filled"}
              cursorColor={"black"}
              bgColor={"coolGray.100"}
              _focus={{
                bgColor: "coolGray.200",
                borderColor: "none",
              }}
              _invalid={{
                bgColor: "error.50",
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
              variant={"filled"}
              cursorColor={"black"}
              bgColor={"coolGray.100"}
              _focus={{
                bgColor: "coolGray.200",
                borderColor: "none",
              }}
              _invalid={{
                bgColor: "error.50",
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
              }}
              alignSelf="flex-end"
              mt="1"
            >
              Forget Password?
            </Link>
          </FormControl>
          <Button
            mt="4"
            colorScheme="primary"
            isLoading={loading}
            onPress={submitLoginForm}
          >
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

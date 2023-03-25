import { StyleSheet } from "react-native";
import React from "react";
import Animated from "react-native-reanimated";
import { Button, Center, Heading, View } from "native-base";
import { useMemo } from "react";
import { categoriesQuery } from "../helpers/sanity/sanityQueries";
import { client } from "../helpers/sanity/sanityClient";
import { useContext } from "react";
import { GlobalContext } from "../context/context";
import { useState } from "react";
import LoadingSpinner from "./LoadingSpinner";

const TaskCategoriesbar = () => {
  const { loggedInUser, setTaskCategories, taskCategories } =
    useContext(GlobalContext);
  const [loading, setLoading] = useState(false);

  useMemo(() => {
    const categories_query = categoriesQuery(loggedInUser._id);
    setLoading(true);
    //query for taskCategories
    client
      .fetch(categories_query)
      .then((result) => {
        console.log("result: ", result);
        setTaskCategories(result);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
        toast.show({
          description: "Error fetching categories. Try again",
          placement: "top",
          colorScheme: "error",
          bgColor: "error.500",
        });
      });
  }, []);

  return (
    <Center>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <Animated.FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          ListHeaderComponent={<View pl={2} />}
          centerContent
          overScrollMode={"never"}
          style={{
            marginBottom: 10,
            width: "100%",
          }}
          data={taskCategories || []}
          renderItem={({ item, index }) => (
            <Button
              fontSize={"xs"}
              size={"xs"}
              variant={"unstyled"}
              borderRadius={20}
              mr={"4"}
              height={7}
              bgColor={`${index === 0 ? "primary.400" : "primary.100"}`}
              // color={"coolGray.800"}
            >
              <Heading
                fontSize={"xs"}
                height={"100%"}
                color={`${index === 0 ? "white" : "coolGray.500"}`}
              >
                {item.name}
              </Heading>
            </Button>
          )}
        />
      )}
    </Center>
  );
};

export default TaskCategoriesbar;

const styles = StyleSheet.create({});

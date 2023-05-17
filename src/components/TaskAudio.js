import { StyleSheet } from "react-native";
import React from "react";
import { Heading, HStack, Icon, IconButton, View, VStack } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { Audio } from "expo-av";
import LoadingSpinner from "./LoadingSpinner";

const TaskAudio = ({ audio }) => {
  const [playing, setPlaying] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const sound = React.useRef(new Audio.Sound());

  const loadSound = async () => {
    setLoading(true);
    const checkLoading = await sound.current.getStatusAsync();
    if (checkLoading.isLoaded === false) {
      try {
        const result = await sound.current.loadAsync({ uri: audio.uri });
        if (result.isLoaded === false) {
          setLoading(false);
          console.log("Error in loading audio");
        } else {
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
      }
    } else {
      setLoading(false);
    }
  };
  const playSound = async () => {
    setPlaying(true);
    try {
      const result = await sound.current.getStatusAsync();
      console.log(result);
      if (result.isLoaded) {
        if (result.isPlaying === false) {
          sound.current.playAsync();
        }
      }
    } catch (error) {}
  };
  const pauseSound = async () => {
    setPlaying(false);
    console.log("paused");

    try {
      const result = await sound.current.getStatusAsync();
      if (result.isLoaded) {
        if (result.isPlaying) {
          sound.current.pauseAsync();
        }
      }
    } catch (error) {}
  };

  React.useEffect(() => {
    loadSound();
  }, []);
  return (
    <>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <View
          px={"2"}
          py={"4"}
          w={"full"}
          borderRadius={"10"}
          bgColor={"blueGray.200"}
        >
          <HStack space={"4"}>
            <IconButton
              variant={"ghost"}
              colorScheme={"coolGray"}
              rounded={"full"}
              icon={
                <Icon
                  as={Ionicons}
                  name={playing ? "pause-circle" : "play-circle"}
                  size={"lg"}
                />
              }
              onPress={playing ? pauseSound : playSound}
            />
            <VStack space={2}>
              <Heading
                fontWeight={"bold"}
                fontSize={"sm"}
                color={"coolGray.500"}
              >
                {audio.name.slice(0, 30)}...
              </Heading>
              <Heading
                fontWeight={"normal"}
                fontSize={"xs"}
                color={"coolGray.500"}
              >
                {audio.size}KB
              </Heading>
            </VStack>
          </HStack>
        </View>
      )}
    </>
  );
};

export default TaskAudio;

const styles = StyleSheet.create({});

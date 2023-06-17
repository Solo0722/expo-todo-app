import { StyleSheet } from "react-native";
import React from "react";
import { Box, Pressable } from "native-base";
import { colors } from "../theme/theme";

const NoteCard = () => {
  return (
    <Pressable>
      <Box style={styles.noteCard}>hel</Box>
    </Pressable>
  );
};

export default NoteCard;

const styles = StyleSheet.create({
  noteCard: {
    width: 100,
    height: 200,
    // backgroundColor: "#feffff",
    borderRadius: 10,
    shadowColor: "black",
    elevation: 4,
  },
});

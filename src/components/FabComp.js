import { StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Fab, Icon } from "native-base";

const FabComp = ({ styles = {}, onPress }) => {
  return (
    <>
      <Fab
        renderInPortal={false}
        shadow={2}
        size="sm"
        placement={"bottom-right"}
        bottom={"30"}
        colorScheme={"primary"}
        icon={
          <Icon color="white" as={<Ionicons name="add-sharp" />} size="sm" />
        }
        style={styles}
        onPress={onPress}
      />
    </>
  );
};

export default FabComp;

const styles = StyleSheet.create({});

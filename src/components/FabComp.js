import { StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { Fab, Icon } from "native-base";
import { colors } from "../theme/theme";

const FabComp = ({ styles = {}, onPress }) => {
  return (
    <>
      <Fab
        renderInPortal={false}
        shadow={2}
        size="sm"
        placement={"bottom-right"}
        bottom={"30"}
        // colorScheme={"primary"}
        bgColor={colors.secondaryColor}
        icon={
          <Icon
            color={colors.backgroundColor}
            as={<Ionicons name="add-sharp" />}
            size="md"
            fontWeight={"black"}
          />
        }
        style={styles}
        onPress={onPress}
      />
    </>
  );
};

export default FabComp;

const styles = StyleSheet.create({});

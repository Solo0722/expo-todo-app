import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { Button, Heading, HStack, Input, Modal } from "native-base";

const AddSubTaskModal = ({
  showAddSubTaskModal,
  setShowAddSubTaskModal,
  setSubTasks,
  subTasks,
}) => {
  const [task, setTask] = useState("");

  const handleAdd = () => {
    setSubTasks([...subTasks, task]);
  };

  return (
    <Modal
      isOpen={showAddSubTaskModal}
      onClose={() => setShowAddSubTaskModal(false)}
    >
      <Modal.Content>
        <Modal.Body>
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
            placeholder="Sub task here..."
            color={"black"}
            onChangeText={(e) => setTask(e)}
          />
        </Modal.Body>
        <Modal.Footer borderTopWidth={0}>
          <Button.Group space={2}>
            <Button
              variant="subtle"
              onPress={() => {
                setShowAddSubTaskModal(false);
              }}
            >
              CANCEL
            </Button>
            <Button
              variant="solid"
              onPress={() => {
                handleAdd();
                setShowAddSubTaskModal(false);
              }}
            >
              ADD
            </Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};

export default AddSubTaskModal;

const styles = StyleSheet.create({});

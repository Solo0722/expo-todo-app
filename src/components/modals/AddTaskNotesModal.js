import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { Button, Heading, HStack, Input, Modal } from "native-base";

const AddTaskNotesModal = ({
  showAddNotesModal,
  setShowAddNotesModal,
  notes,
  setNotes,
}) => {
  const [nt, setNt] = useState("");
  const handleAdd = () => {
    setNotes(nt);
  };

  return (
    <Modal
      isOpen={showAddNotesModal}
      onClose={() => setShowAddNotesModal(false)}
    >
      <Modal.Content>
        <Modal.Body>
          <Input
            variant={"filled"}
            cursorColor={"black"}
            bgColor={"coolGray.100"}
            numberOfLines={20}
            isFullWidth
            multiline
            textAlignVertical="top"
            autoFocus
            _focus={{
              bgColor: "coolGray.200",
              borderColor: "none",
            }}
            _invalid={{
              bgColor: "error.50",
              borderColor: "none",
            }}
            colorScheme={"primary"}
            placeholder="Notes here..."
            color={"black"}
            value={nt}
            onChangeText={(e) => setNt(e)}
          />
        </Modal.Body>
        <Modal.Footer borderTopWidth={0}>
          <Button.Group space={2}>
            <Button
              variant="subtle"
              onPress={() => {
                setShowAddNotesModal(false);
              }}
            >
              CANCEL
            </Button>
            <Button
              variant="solid"
              onPress={() => {
                handleAdd();
                setShowAddNotesModal(false);
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

export default AddTaskNotesModal;

const styles = StyleSheet.create({});

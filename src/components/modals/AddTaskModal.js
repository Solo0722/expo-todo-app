import { StyleSheet } from "react-native";
import React, { useState, useContext } from "react";
import { Button, Icon, Input, Menu, Modal, useToast } from "native-base";
import uuid from "react-native-uuid";
import { GlobalContext } from "../../context/context";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../theme/theme";

const AddTaskModal = ({ isModalOpen, setIsModalOpen }) => {
  const [task, setTask] = useState("");
  const toast = useToast();
  const { createTask, taskCategories } = useContext(GlobalContext);
  const [category, setCategory] = useState(null);

  const allCategory = taskCategories.filter((c) => c.name === "All");

  const handleAdd = () => {
    if (task) {
      createTask({
        _id: uuid.v4(),
        category: category ? category : allCategory[0],
        title: task,
        subTasks: [],
        dueDateAndTime: new Date(),
        repeatTask: false,
        completed: true,
        notes: "",
        attachments: [],
      });
      toast.show({
        description: "Task added successfully",
        bgColor: "success.400",
      });
      setIsModalOpen(false);
    }
  };

  return (
    <Modal
      isOpen={isModalOpen}
      onClose={() => setIsModalOpen(false)}
      size={"lg"}
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
            autoFocus
            autoCapitalize="sentences"
            placeholder="Task here..."
            color={"black"}
            onChangeText={(e) => setTask(e)}
          />
          <Menu
            // w="190"
            bgColor={`${colors.secondaryColor}`}
            placement={"bottom"}
            safeAreaRight
            shouldOverlapWithTrigger={false}
            trigger={(triggerProps) => {
              return (
                <Button
                  variant="unstyled"
                  color={"coolGray.500"}
                  bgColor={"primary.50"}
                  endIcon={<Icon as={Ionicons} name="caret-down" size="sm" />}
                  size={"xs"}
                  height={"7"}
                  width={"30%"}
                  maxWidth={"50%"}
                  my={"4"}
                  accessibilityLabel="More options menu"
                  {...triggerProps}
                >
                  {!category ? "No category" : category.name}
                </Button>
              );
            }}
          >
            {taskCategories?.map((menuItem) => (
              <Menu.Item
                key={menuItem.name}
                onPress={() => setCategory(menuItem)}
              >
                {menuItem.name}
              </Menu.Item>
            ))}
          </Menu>
        </Modal.Body>
        <Modal.Footer borderTopWidth={0}>
          <Button.Group space={2}>
            <Button
              variant="subtle"
              onPress={() => {
                setIsModalOpen(false);
              }}
            >
              CANCEL
            </Button>
            <Button variant="solid" onPress={handleAdd}>
              ADD
            </Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  );
};

export default AddTaskModal;

const styles = StyleSheet.create({});

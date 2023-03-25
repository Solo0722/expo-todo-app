import React from "react";
import { colors } from "../theme/theme";
import { Menu } from "native-base";

const MenuComp = ({ TriggerButton, menuData, placement = "bottom left" }) => {
  return (
    <Menu
      // w="190"
      bgColor={`${colors.secondaryColor}`}
      placement={placement}
      mr={"5"}
      safeAreaRight
      shouldOverlapWithTrigger={false}
      trigger={(triggerProps) => {
        return <TriggerButton {...triggerProps} />;
      }}
    >
      {menuData?.map((menuItem) => (
        <Menu.Item key={menuItem.name}>{menuItem.name}</Menu.Item>
      ))}
    </Menu>
  );
};

export default MenuComp;

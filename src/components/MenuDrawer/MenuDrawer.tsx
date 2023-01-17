import useAppStore from "@/useAppStore";
import {
  Text,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  DrawerProps,
} from "@chakra-ui/react";
import React from "react";
import LogoutButton from "../LogoutButton/LogoutButton";

interface MenuDrawerProps extends Omit<DrawerProps, "children"> {}

const MenuDrawer: React.FC<MenuDrawerProps> = (props) => {
  const username = useAppStore((state) => state.username);
  return (
    <Drawer {...props}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Currency Take Home Project</DrawerHeader>

        <DrawerBody>
          <Text>{`Hello, ${username}`}</Text>
          <LogoutButton />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default MenuDrawer;

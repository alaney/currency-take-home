import useAppStore from "@/useAppStore";
import { HamburgerIcon } from "@chakra-ui/icons";
import { Flex, Hide, IconButton, Show, Text, useDisclosure } from "@chakra-ui/react";
import React from "react";
import CurrencyFilter from "../CurrencyFilter/CurrencyFilter";
import LogoutButton from "../LogoutButton/LogoutButton";
import MenuDrawer from "../MenuDrawer/MenuDrawer";
import StyledNavbarContainer from "../NavbarContainer/StyledNavbarContainer.css";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  const store = useAppStore();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <StyledNavbarContainer>
        <Hide above="md">
          <IconButton
            variant="ghost"
            onClick={onOpen}
            colorScheme="gray"
            aria-label="Open menu"
            icon={<HamburgerIcon />}
          />
        </Hide>
        <Show above="md">
          <Text ml={8}>Currency Take Home Project</Text>
        </Show>
        <CurrencyFilter maxWidth={{ base: "auto", md: "200px" }} ml={2} mr={2} />
        <Show above="md">
          <Flex align="center" justify="space-between" mr={8}>
            <Text data-cy="user-greeting" mr={8}>{`Hello, ${store.username}`}</Text>
            <LogoutButton />
          </Flex>
        </Show>
      </StyledNavbarContainer>
      <MenuDrawer placement="left" isOpen={isOpen} onClose={onClose} />
    </>
  );
};

export default Navbar;

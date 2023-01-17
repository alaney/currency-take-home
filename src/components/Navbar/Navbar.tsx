import useAppStore from "@/useAppStore";
import { Flex, Show, Text } from "@chakra-ui/react";
import React from "react";
import CurrencyFilter from "../CurrencyFilter/CurrencyFilter";
import LogoutButton from "../LogoutButton/LogoutButton";
import StyledNavbarContainer from "../NavbarContainer/StyledNavbarContainer.css";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  const store = useAppStore();

  return (
    <StyledNavbarContainer>
      <Show above="lg">
        <Text ml={8}>Currency Take Home Project</Text>
      </Show>
      <CurrencyFilter w={500} ml={2} mr={2} />
      <Show above="lg">
        <Flex align="center" justify="space-between" mr={8}>
          <Text data-cy="user-greeting" mr={8}>{`Hello, ${store.username}`}</Text>
          <LogoutButton />
        </Flex>
      </Show>
    </StyledNavbarContainer>
  );
};

export default Navbar;

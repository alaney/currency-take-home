import useAppStore from "@/useAppStore";
import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import CurrencyFilter from "../CurrencyFilter/CurrencyFilter";
import LogoutButton from "../LogoutButton/LogoutButton";
import StyledNavbarContainer from "../NavbarContainer/StyledNavbarContainer.css";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = ({}) => {
  const store = useAppStore();

  return (
    <StyledNavbarContainer>
      <Text ml={8}>Currency Take Home Project</Text>
      <CurrencyFilter w={500} />
      <Flex align="center" justify="space-between" mr={8}>
        <Text mr={8}>{`Hello, ${store.username}`}</Text>
        <LogoutButton />
      </Flex>
    </StyledNavbarContainer>
  );
};

export default Navbar;

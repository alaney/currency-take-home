import { Flex } from "@chakra-ui/react";
import { PropsWithChildren } from "react";

interface NavbarContainerProps {
  className?: string;
}

const NavbarContainer: React.FC<PropsWithChildren<NavbarContainerProps>> = ({ children, className }) => {
  return (
    <Flex align="center" justify="space-between" className={className}>
      {children}
    </Flex>
  );
};

export default NavbarContainer;

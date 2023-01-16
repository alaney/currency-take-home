import useAppStore from "@/useAppStore";
import { Button, ButtonProps } from "@chakra-ui/react";
import React from "react";

interface LogoutButtonProps extends ButtonProps {}

const LogoutButton: React.FC<LogoutButtonProps> = (props) => {
  const store = useAppStore();

  return (
    <Button onClick={() => store.logout()} {...props}>
      Logout
    </Button>
  );
};

export default LogoutButton;

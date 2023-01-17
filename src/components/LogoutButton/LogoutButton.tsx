import useAppStore from "@/useAppStore";
import { Button, ButtonProps } from "@chakra-ui/react";
import React from "react";

interface LogoutButtonProps extends ButtonProps {}

const LogoutButton: React.FC<LogoutButtonProps> = (props) => {
  const store = useAppStore();

  const logout = () => {
    localStorage.removeItem("username");
    store.logout();
  };

  return (
    <Button data-cy="logout" onClick={logout} {...props}>
      Logout
    </Button>
  );
};

export default LogoutButton;

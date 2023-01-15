import useAppStore from "@/useAppStore";
import { Button, ButtonProps } from "@chakra-ui/react";
import React from "react";

interface LogoutButtonProps extends ButtonProps {}

const LogoutButton: React.FC<LogoutButtonProps> = () => {
  const store = useAppStore();

  return <Button onClick={() => store.logout()}>Logout</Button>;
};

export default LogoutButton;

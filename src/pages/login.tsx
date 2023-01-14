import useAppStore from "@/useAppStore";
import { Button } from "@chakra-ui/react";
import { useRouter } from "next/router";

const Login: React.FC = () => {
  const router = useRouter();
  const store = useAppStore();

  const doLogin = () => {
    store.logIn();
    router.push("/");
  };

  return (
    <div>
      <Button size="lg" onClick={doLogin}>
        Login
      </Button>
    </div>
  );
};

export default Login;

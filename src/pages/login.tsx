import LoginBox from "@/components/LoginBox/LoginBox.css";
import useAppStore from "@/useAppStore";
import { Box, Button, Container, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { FormEvent, useEffect, useState } from "react";

const Login: React.FC = () => {
  const router = useRouter();
  const store = useAppStore();
  const [username, setUsername] = useState("");

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    store.setUsername(username);
    store.login();
    router.push("/");
  };

  useEffect(() => {
    if (store.loggedIn) {
      router.push("/");
    }
  });

  if (store.loggedIn) return null;

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <main>
        <Container centerContent={true} p={8}>
          <LoginBox>
            <Heading as="h1" mb={4}>
              Login
            </Heading>
            <form onSubmit={submit}>
              <FormControl isRequired>
                <FormLabel>Username</FormLabel>
                <Input onChange={(e) => setUsername(e.target.value)} />
              </FormControl>
              <FormControl isRequired>
                <FormLabel>Password</FormLabel>
                <Input type="password" />
              </FormControl>
              <Button size="lg" type="submit" mt={4}>
                Login
              </Button>
            </form>
          </LoginBox>
        </Container>
      </main>
    </>
  );
};

export default Login;

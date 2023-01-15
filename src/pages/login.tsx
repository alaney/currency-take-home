import useAppStore from "@/useAppStore";
import { Box, Button, Container, FormControl, FormLabel, Heading, Input } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

const Login: React.FC = () => {
  const router = useRouter();
  const store = useAppStore();
  const [username, setUsername] = useState("");

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    store.setUsername(username);
    store.logIn();
    router.push("/");
  };

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <main>
        <Container centerContent={true} p={8}>
          <Box w="100%" p={4} borderWidth="1px" borderRadius="lg">
            <Heading mb={4}>Log In</Heading>
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
          </Box>
        </Container>
      </main>
    </>
  );
};

export default Login;

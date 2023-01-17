import CurrencyContainer from "@/components/CurrencyContainer/CurrencyContainer";
import Navbar from "@/components/Navbar/Navbar";
import useAppStore from "@/useAppStore";
import { Container } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const store = useAppStore();
  const router = useRouter();

  useEffect(() => {
    if (!store.loggedIn) {
      const username = localStorage.getItem("username");
      if (username) {
        store.login();
        store.setUsername(username);
      } else {
        router.push("/login");
      }
    }
  }, [store.loggedIn, router, store]);

  if (!store.loggedIn) return null;

  return (
    <>
      <Head>
        <title>Currency Take Home</title>
      </Head>
      <nav>
        <Navbar />
      </nav>
      <main>
        <Container maxWidth={500}>
          <CurrencyContainer />
        </Container>
      </main>
    </>
  );
}

import useAppStore from "@/useAppStore";
import { Button } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Home() {
  const store = useAppStore();
  const router = useRouter();

  useEffect(() => {
    if (!store.loggedIn) {
      router.push("/login");
    }
  });

  if (!store.loggedIn) return null;

  return (
    <>
      <Head>
        <title>Currency Take Home</title>
      </Head>
      <main>
        <div>{`Hello ${store.username}`}</div>
      </main>
    </>
  );
}

import Navbar from "@/components/Navbar/Navbar";
import useAppStore from "@/useAppStore";
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
  }, [store.loggedIn, router]);

  if (!store.loggedIn) return null;

  return (
    <>
      <Head>
        <title>Currency Take Home</title>
      </Head>
      <nav>
        <Navbar />
      </nav>
      <main></main>
    </>
  );
}

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
  });

  if (store.loggedIn) {
    return (
      <>
        <Head>
          <title>Currency Take Home</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
        <main>
          <div>main</div>
        </main>
      </>
    );
  } else {
    return null;
  }
}

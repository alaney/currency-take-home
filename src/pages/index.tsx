import useAppStore from "@/useAppStore";
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  const store = useAppStore();

  if (!store.loggedIn) {
    return (
      <div>
        Sorry! You&apos;re not logged in. Click <Link href="/login">here</Link> to login.
      </div>
    );
  }

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
}

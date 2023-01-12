import Head from "next/head";
import SideBar from "../components/SideBar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Whatsapp</title>
      </Head>
      <main>
        <SideBar />
      </main>
    </>
  );
}

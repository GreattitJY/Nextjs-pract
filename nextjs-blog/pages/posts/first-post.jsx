import Link from "next/link";
import Image from "next/image";
import { profile } from "../../src/assets";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/Layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <Image src={profile} height={144} width={144} alt="Your Name" />
    </Layout>
  );
}

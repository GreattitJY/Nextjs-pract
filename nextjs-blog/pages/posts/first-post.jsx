import Link from "next/link";
import Image from "next/image";
import { profile } from "../../src/assets";
import Head from "next/head";
import Script from "next/script";

export default function FirstPost() {
  return (
    <>
      <Head>
        <title>First Post</title>
      </Head>
      <Script
        src="https://connect.facebook.net/en_US/sdk.js"
        strategy="lazyOnload"
        onLoad={() => {
          console.log("script loaded correctly, window.FB has been populated");
        }}
      />
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <Image src={profile} height={144} width={144} alt="Your Name" />
    </>
  );
}

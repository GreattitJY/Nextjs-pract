import Link from "next/link";
import Image from "next/image";
import { profile } from "../../src/assets";

export default function FirstPost() {
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      <Image src={profile} height={144} width={144} alt="Your Name" />
    </>
  );
}

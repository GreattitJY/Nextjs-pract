import Link from "next/link";
import Image from "next/image";
import { profile } from "../../src/assets";
import Head from "next/head";
import Script from "next/script";
import Layout from "../../components/Layout";
import styled from "styled-components";
import { useEffect, useState } from "react";

export default function FirstPost() {
  const [scrollFlag, setScrollFlag] = useState(false);

  const updateScroll = () => {
    const { scrollY } = window;
    const isScrolled = scrollY !== 0;
    setScrollFlag(isScrolled);
  };

  const throttle = (callback, delay) => {
    let timer = null;
    return () => {
      if (timer) return;
      timer = window.setTimeout(() => {
        callback();
        timer = null;
      }, delay);
    };
  };

  const handleScroll = throttle(updateScroll, 100);

  const handleToBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };
  const handleToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <button onClick={handleToBottom}>down</button>
      <h1>First Post</h1>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
      {scrollFlag && <Box>Text check</Box>}
      <List>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, doloremque? Molestias repudiandae totam deserunt
          ipsam, a labore fuga provident tempora hic voluptate? Repellendus alias, minus modi rem nisi officiis nemo!
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, doloremque? Molestias repudiandae totam deserunt
          ipsam, a labore fuga provident tempora hic voluptate? Repellendus alias, minus modi rem nisi officiis nemo!
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, doloremque? Molestias repudiandae totam deserunt
          ipsam, a labore fuga provident tempora hic voluptate? Repellendus alias, minus modi rem nisi officiis nemo!
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, doloremque? Molestias repudiandae totam deserunt
          ipsam, a labore fuga provident tempora hic voluptate? Repellendus alias, minus modi rem nisi officiis nemo!
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, doloremque? Molestias repudiandae totam deserunt
          ipsam, a labore fuga provident tempora hic voluptate? Repellendus alias, minus modi rem nisi officiis nemo!
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, doloremque? Molestias repudiandae totam deserunt
          ipsam, a labore fuga provident tempora hic voluptate? Repellendus alias, minus modi rem nisi officiis nemo!
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, doloremque? Molestias repudiandae totam deserunt
          ipsam, a labore fuga provident tempora hic voluptate? Repellendus alias, minus modi rem nisi officiis nemo!
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, doloremque? Molestias repudiandae totam deserunt
          ipsam, a labore fuga provident tempora hic voluptate? Repellendus alias, minus modi rem nisi officiis nemo!
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, doloremque? Molestias repudiandae totam deserunt
          ipsam, a labore fuga provident tempora hic voluptate? Repellendus alias, minus modi rem nisi officiis nemo!
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, doloremque? Molestias repudiandae totam deserunt
          ipsam, a labore fuga provident tempora hic voluptate? Repellendus alias, minus modi rem nisi officiis nemo!
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, doloremque? Molestias repudiandae totam deserunt
          ipsam, a labore fuga provident tempora hic voluptate? Repellendus alias, minus modi rem nisi officiis nemo!
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, doloremque? Molestias repudiandae totam deserunt
          ipsam, a labore fuga provident tempora hic voluptate? Repellendus alias, minus modi rem nisi officiis nemo!
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, doloremque? Molestias repudiandae totam deserunt
          ipsam, a labore fuga provident tempora hic voluptate? Repellendus alias, minus modi rem nisi officiis nemo!
        </li>
      </List>
      <List>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, doloremque? Molestias repudiandae totam deserunt
          ipsam, a labore fuga provident tempora hic voluptate? Repellendus alias, minus modi rem nisi officiis nemo!
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, doloremque? Molestias repudiandae totam deserunt
          ipsam, a labore fuga provident tempora hic voluptate? Repellendus alias, minus modi rem nisi officiis nemo!
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, doloremque? Molestias repudiandae totam deserunt
          ipsam, a labore fuga provident tempora hic voluptate? Repellendus alias, minus modi rem nisi officiis nemo!
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, doloremque? Molestias repudiandae totam deserunt
          ipsam, a labore fuga provident tempora hic voluptate? Repellendus alias, minus modi rem nisi officiis nemo!
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, doloremque? Molestias repudiandae totam deserunt
          ipsam, a labore fuga provident tempora hic voluptate? Repellendus alias, minus modi rem nisi officiis nemo!
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, doloremque? Molestias repudiandae totam deserunt
          ipsam, a labore fuga provident tempora hic voluptate? Repellendus alias, minus modi rem nisi officiis nemo!
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, doloremque? Molestias repudiandae totam deserunt
          ipsam, a labore fuga provident tempora hic voluptate? Repellendus alias, minus modi rem nisi officiis nemo!
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, doloremque? Molestias repudiandae totam deserunt
          ipsam, a labore fuga provident tempora hic voluptate? Repellendus alias, minus modi rem nisi officiis nemo!
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, doloremque? Molestias repudiandae totam deserunt
          ipsam, a labore fuga provident tempora hic voluptate? Repellendus alias, minus modi rem nisi officiis nemo!
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, doloremque? Molestias repudiandae totam deserunt
          ipsam, a labore fuga provident tempora hic voluptate? Repellendus alias, minus modi rem nisi officiis nemo!
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, doloremque? Molestias repudiandae totam deserunt
          ipsam, a labore fuga provident tempora hic voluptate? Repellendus alias, minus modi rem nisi officiis nemo!
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, doloremque? Molestias repudiandae totam deserunt
          ipsam, a labore fuga provident tempora hic voluptate? Repellendus alias, minus modi rem nisi officiis nemo!
        </li>
        <li>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, doloremque? Molestias repudiandae totam deserunt
          ipsam, a labore fuga provident tempora hic voluptate? Repellendus alias, minus modi rem nisi officiis nemo!
        </li>
      </List>
      <button onClick={handleToTop}>up!</button>
    </Layout>
  );
}

const Box = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 32px;
  /* z-index: 10; */
  /* box-shadow: inset 0 0 10px blue; */
  background-color: antiquewhite;
`;

const List = styled.ul`
  margin: 0;
  padding: 0;
  li {
    margin: 0;
    padding: 0;
    font-size: 30px;
  }
`;

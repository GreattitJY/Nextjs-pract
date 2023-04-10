import React from "react";
import styled from "styled-components";

export default function Layout({ children }) {
  console.log(children);
  return <div>{children}</div>;
}

const Box = styled.div`
  /* padding: 10px 0; */
`;

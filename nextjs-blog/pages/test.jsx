import React from "react";
import styled from "styled-components";

export default function Test() {
  return (
    <>
      <Container>
        <p>hello1</p>
        <div className="child">hello2</div>
        <div className="child pick">hello3</div>
        <div className="child">hello4</div>
        <div className="child">hello5</div>
        <div className="child">hello6</div>
      </Container>
      <Container>
        <div>hello</div>
        <div className="child">hello</div>
      </Container>
      <Container>
        <div>hello</div>
        <div className="child">hello</div>
      </Container>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 10px;
  border: 1px solid black;

  .child {
    :nth-child(2) {
      box-shadow: inset 0 0 10px gold;
    }
    &.pick {
      box-shadow: inset 0 0 10px red;
    }
  }
`;

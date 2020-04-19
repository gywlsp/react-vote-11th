import React, { useState } from "react";
import styled from "styled-components";
import Link from "next/link";

export default function Greeting({ userName }) {
  return (
    <Wrapper>
      <Title>환영합니다!</Title>
      <ContentWrapper>
        <Greet>
          <Name>{userName}</Name>님 안녕하세요!
        </Greet>
        <Link href={`/vote?userName=${userName}`}>
          <A>투표하러 가기</A>
        </Link>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  min-height: 30rem;
  background-color: white;
  font-size: 18px;
  padding: 3rem 4rem;
`;

const Title = styled.h2`
  font-size: 3rem;
  margin-bottom: 4rem;
`;

const ContentWrapper = styled.div`
  width: 100%;
`;

const Greet = styled.p`
  font-size: 2.5rem;
`;

const Name = styled.strong`
  font-size: 2.5rem;
  color: Crimson;
`;

const A = styled.a`
  padding: 0.5rem 1rem;
  background-color: navy;
  border: none;
  border-radius: 1rem;
  color: white;
  font-size: 2rem;
  display: block;
  width: fit-content;
  margin-left: auto;
`;

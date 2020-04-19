import React, { useState } from "react";
import styled from "styled-components";
import { useRouter } from "next/router";

import CandidateList from "../src/components/candidate/list";

export default function Vote() {
  const router = useRouter();
  const { userName } = router.query;
  return (
    <Wrapper>
      <Title>리액트 투-표</Title>
      <Greet>
        <Name>{userName}</Name>님 안녕하세요!
      </Greet>
      <CandidateList />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 10rem 40rem;
  background-color: Azure;
`;

const Title = styled.h1`
  font-size: 4rem;
`;

const Greet = styled.p`
  font-size: 2.5rem;
`;

const Name = styled.strong`
  font-size: 2.5rem;
  color: Crimson;
`;

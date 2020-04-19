import React, { useState } from "react";
import styled from "styled-components";

import LoginForm from "../src/components/login-form";
import CandidateList from "../src/components/candidate/list";

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Wrapper>
      <Title>리액트 투-표</Title>
      {!isLoggedIn && <LoginForm {...{ setIsLoggedIn }} />}
      {isLoggedIn && <CandidateList />}
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

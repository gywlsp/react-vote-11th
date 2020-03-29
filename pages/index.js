import React from 'react';

import ProfileCard from '../components/profile-card';
import styled from 'styled-components';

export default function Home() {
  return (
    <Wrapper>
      나는 홈이야
      <ProfileCard />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: blue;
  height: 100vh;
`;

import React from "react";
import styled from "styled-components";

import CandidateCard from "./card";
import { useCandidates } from "../../hooks/Candidates";

export default function CandidateList() {
  const { data: candidates, loading, error, refetch } = useCandidates();
  if (error) return <div>error!</div>;
  if (candidates)
    return (
      <Wrapper>
        <Title>
          <Emphasis>프론트엔드 인기쟁이</Emphasis>는 누구?
        </Title>
        <SubTitle>CEOS 프론트엔드 개발자 인기 순위 및 투표 창입니다.</SubTitle>
        <ContentWrapper>
          {candidates
            .sort((a, b) => b.voteCount - a.voteCount)
            .map((candidate, index) => {
              return (
                <CandidateCard
                  key={candidate._id}
                  {...{
                    rank: index + 1,
                    ...candidate,
                    onComplete: refetch,
                  }}
                />
              );
            })}
        </ContentWrapper>
      </Wrapper>
    );
  return <></>;
}

const Wrapper = styled.div`
  width: 100%;
  min-height: 30rem;
  background-color: white;
  font-size: 18px;
  padding: 3rem 4rem 10rem;
`;

const Title = styled.h2`
  font-size: 3rem;
`;

const SubTitle = styled.h3`
  font-size: 2.5rem;
  color: grey;
`;

const Emphasis = styled.strong`
  color: Crimson;
`;

const ContentWrapper = styled.div`
  width: 100%;
  padding: 5rem 10rem;
  border: 1px solid black;
`;

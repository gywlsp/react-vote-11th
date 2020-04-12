import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";

export default function VoteForm() {
  const [candidates, setCandidates] = useState(null);

  useEffect(() => {
    getCandidates();
  }, []);

  const getCandidates = async () => {
    const data = await axios
      .get(process.env.API_HOST + "/candidates/")
      .then((res) => {
        console.log(res);
        return res.data;
      })
      .catch((err) => console.log(err));
    setCandidates(data);
  };

  const handleSubmit = (id, name) => {
    axios
      .put(process.env.API_HOST + `/candidates/${id}/vote/`)
      .then((res) => {
        console.log(res);
        alert(name + "님에게 투표 완료!");
        getCandidates();
      })
      .catch((err) => {
        console.log(err);
        alert("투표 실패!");
      });
  };
  return (
    <Wrapper>
      <Title>
        <Emphasis>프론트엔드 인기쟁이</Emphasis>는 누구?
      </Title>
      <SubTitle>CEOS 프론트엔드 개발자 인기 순위 및 투표 창입니다.</SubTitle>
      <ContentWrapper>
        {candidates &&
          candidates
            .sort((a, b) => b.voteCount - a.voteCount)
            .map((candidate, index) => {
              const { _id, name, voteCount } = candidate;
              return (
                <Row>
                  <Ranking>{index + 1}위 :</Ranking>
                  <Name>
                    {name} [{voteCount}표]
                  </Name>
                  <Button onClick={() => handleSubmit(_id, name)}>투표</Button>
                </Row>
              );
            })}
      </ContentWrapper>
    </Wrapper>
  );
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

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Ranking = styled.strong`
  font-size: 2.5rem;
  margin: 0rem 4rem 1rem 0rem;
`;

const Name = styled.p`
  font-size: 2.5rem;
  margin: 0rem auto 1rem 0rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: navy;
  border: none;
  border-radius: 1rem;
  color: white;
  font-size: 2rem;
`;

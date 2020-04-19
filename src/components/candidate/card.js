import React from "react";
import axios from "axios";
import styled from "styled-components";

export default function CandidateCard({
  rank,
  _id: id,
  name,
  voteCount,
  onComplete,
}) {
  const handleSubmit = (id, name) => () => {
    axios
      .put(process.env.API_HOST + `/candidates/${id}/vote/`)
      .then((res) => {
        console.log(res);
        alert(name + "님에게 투표 완료!");
        onComplete();
      })
      .catch((err) => {
        console.log(err);
        alert("투표 실패!");
      });
  };
  return (
    <Wrapper>
      <Rank>{rank}위 :</Rank>
      <Name>
        {name} [{voteCount}표]
      </Name>
      <Button onClick={handleSubmit(id, name)}>투표</Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

const Rank = styled.strong`
  font-size: 2.5rem;
  width: 10rem;
  margin-bottom: 1rem;
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

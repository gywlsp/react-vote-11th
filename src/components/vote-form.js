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

  return <Wrapper>안녕 나는 투표 폼!</Wrapper>;
}

const Wrapper = styled.div`
  width: 100%;
  min-height: 30rem;
  background-color: white;
  font-size: 18px;
  padding: 3rem 4rem;
`;

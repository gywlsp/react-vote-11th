import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

export default function LoginForm({ setIsLoggedIn }) {
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });

  const handleLoginFormChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    const { email, password } = loginForm;
    if (email === "" || password === "") {
      alert("모든 항목을 입력해주세요!");
      return;
    }
    axios
      .post(process.env.API_HOST + "/auth/signin/", loginForm)
      .then(function (response) {
        console.log(response);
        alert("로그인 성공!");
        setIsLoggedIn(true);
      })
      .catch(function (error) {
        console.log(error);
        alert("로그인 실패");
      });
  };

  return (
    <Wrapper>
      <Title>로그인</Title>
      <FormWrapper>
        <Row>
          <Label>EMAIL</Label>
          <Input type="text" name="email" onChange={handleLoginFormChange} />
        </Row>
        <Row>
          <Label>PASSWORD</Label>
          <Input
            type="password"
            name="password"
            onChange={handleLoginFormChange}
          />
        </Row>
        <SubmitButton onClick={handleSubmit}>로그인</SubmitButton>
      </FormWrapper>
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

const FormWrapper = styled.div`
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-bottom: 2rem;
`;

const Label = styled.label`
  font-size: 2rem;
  margin-right: auto;
`;

const Input = styled.input`
  width: 75%;
  padding: 0.5rem 1rem;
  border: 1px solid grey;
  outline: none;
`;

const SubmitButton = styled.button`
  display: block;
  width: fit-content;
  margin-left: auto;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 1rem;
  font-size: 1.8rem;
  outline: none;
  cursor: pointer;
`;

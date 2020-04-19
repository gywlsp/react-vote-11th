import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

export default function LoginForm({ setIsLoggedIn }) {
  const [loginForm, setLoginForm] = useState({ email: "", password: "" });

  const handleLoginFormChange = (e) => {
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { email, password } = loginForm;
    if (email === "" || password === "") {
      alert("모든 항목을 입력해주세요!");
      return false;
    }
    return true;
  };

  const handleSubmit = () => {
    if (validateForm() === false) return;
    axios
      .post(process.env.API_HOST + "/auth/signin/", loginForm)
      .then((res) => {
        console.log(res);
        alert("로그인 성공!");
        setIsLoggedIn(true);
      })
      .catch((err) => {
        const { status } = err.response;
        switch (status) {
          case 404:
            alert("이메일이 존재하지 않습니다!");
            setLoginForm({
              email: "",
              password: "",
            });
            break;
          case 422:
            alert("비밀번호가 틀렸습니다!");
            setLoginForm({
              password: "",
            });
            break;
          default:
            alert("다시 시도해주세요!");
            setLoginForm({
              email: "",
              password: "",
            });
        }
      });
  };

  return (
    <Wrapper>
      <Title>로그인</Title>
      <FormWrapper>
        <Row>
          <Label>EMAIL</Label>
          <Input
            type="text"
            name="email"
            value={loginForm.email}
            onChange={handleLoginFormChange}
          />
        </Row>
        <Row>
          <Label>PASSWORD</Label>
          <Input
            type="password"
            name="password"
            value={loginForm.password}
            onChange={handleLoginFormChange}
          />
        </Row>
        <SubmitButton onClick={handleSubmit}>로그인</SubmitButton>
      </FormWrapper>
    </Wrapper>
  );

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import styled from 'styled-components';
import classes from './Login.module.css';
export const Login = () => {
  const login = useSelector((store) => store.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const getEmailHandler = (e) => {
    dispatch({ type: 'EMAIL_VALID', payload: e.target.value });
    dispatch({ type: 'EMAIL', payload: e.target.value });
    dispatch({ type: 'FORM_VALID' });
  };
  const getPasswordHandler = (e) => {
    dispatch({ type: 'PASSWORD_VALID', payload: e.target.value });
    dispatch({ type: 'PASSWORD', payload: e.target.value });
    dispatch({ type: 'FORM_VALID' });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (login.formValid === true) {
      dispatch({ type: 'LOGIN' });
      navigate('/todos');
    }
  };

  return (
    <Form onSubmit={submitHandler}>
      <InputContainer
        className={`${login.emailValid === false ? classes.invalid : ''}`}
      >
        <Label htmlFor="email">E-Mail</Label>
        <Input
          onChange={getEmailHandler}
          value={login.email}
          type="email"
          name="email"
        />
      </InputContainer>
      <InputContainerTwo
        className={`${login.passwordValid === false ? classes.invalid : ''}`}
      >
        <Label htmlFor="password">Password</Label>
        <Input
          onChange={getPasswordHandler}
          value={login.password}
          required
          type="password"
          name="password"
        />
      </InputContainerTwo>
      <button marginTop="20px">Login</button>
    </Form>
  );
};
const Form = styled.form`
  width: 780px;
  margin-top: 20px;
  background: #b9d6ad;
  height: 240px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.26) 0px 2px 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  button {
    width: 120px;
    height: 50px;
    margin-top: 20px;
    font-size: 20px;
    border: 1px solid gray;
    border-radius: 10px;
    background-color: white;
    :active {
      background-color: #afffb7;
    }
  }
`;
const InputContainer = styled.div`
  width: 700px;
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
`;
const InputContainerTwo = styled.div`
  width: 700px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
const Input = styled.input`
  width: 560px;
  height: 30px;
  border-radius: 7px;
  border: 1px solid gray;
  font-size: 20px;
`;
const Label = styled.label`
  font-size: 20px;
  font-weight: 600;
`;

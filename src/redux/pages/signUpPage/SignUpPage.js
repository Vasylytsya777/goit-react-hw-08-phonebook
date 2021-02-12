import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUpOperation } from '../../operations/authOperations';

import SignUpWrapper from './SignUpPageStyled';

const initialState = {
  email: '',
  password: '',
};

const SignUpPage = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({ ...initialState });

  const onHandleChange = e => {
    const { name, value } = e.target;
    setState(prev => ({ ...prev, [name]: value }));
  };

  const onHandleSubmit = e => {
    e.preventDefault();
    dispatch(signUpOperation(state));
    setState({ ...initialState });
  };

  const { email, password } = state;

  return (
    <SignUpWrapper>
      <h2 className="pageTitle">Sign Up</h2>
      <form onSubmit={onHandleSubmit}>
        <label className="formLabel">
          Email:
          <input
            className="formInput"
            type="text"
            autoComplete="off"
            autoFocus
            value={email}
            name="email"
            placeholder="Enter email"
            onChange={onHandleChange}
          />
        </label>
        <label className="formLabel">
          Password:
          <input
            className="formInput"
            type="password"
            name="password"
            value={password}
            autoFocus
            autoComplete="off"
            placeholder="Enter password"
            onChange={onHandleChange}
          />
        </label>
        <button className="formBtn" type="submit">
          Sign Up
        </button>
      </form>
    </SignUpWrapper>
  );
};

export default SignUpPage;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signInOperation } from '../../operations/authOperations';

import SignInWrapper from './SignInStyled';

const initialState = {
  email: '',
  password: '',
};

const SignInPage = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState({ ...initialState });

  const onHandleChange = e => {
    const { name, value } = e.target;
    setState(prev => ({ ...prev, [name]: value }));
  };

  const onHandleSubmit = e => {
    e.preventDefault();
    dispatch(signInOperation(state));
    setState({ ...initialState });
  };

  const { email, password } = state;

  return (
    <SignInWrapper>
      <h2 className="pageTitle">Sign In</h2>
      <form onSubmit={onHandleSubmit}>
        <label className="formLabel">
          Email:
          <input
            className="formInput"
            type="text"
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
          Login
        </button>
      </form>
    </SignInWrapper>
  );
};

export default SignInPage;

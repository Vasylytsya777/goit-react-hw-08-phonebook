import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import LogOutMenuStyled from './LogOutMenuStyled';
import { getUserName } from '../../redux/selectors/authSelectors';
import { logOutOperation } from '../../redux/operations/authOperations';

const LogOutMenu = () => {
  const dispatch = useDispatch();
  const userName = useSelector(getUserName);

  const onLogOut = () => {
    dispatch(logOutOperation());
  };

  return (
    <LogOutMenuStyled>
      <span className="logOutMenuText">Hello, {userName}</span>
      <button className="logOutMenuBtn" type="button" onClick={onLogOut}>
        Log Out
      </button>
    </LogOutMenuStyled>
  );
};

export default LogOutMenu;

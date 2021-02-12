import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import Header from "./header/Header";
import Main from "./main/Main";
import { isAuth } from "../redux/selectors/authSelectors";
import { getUserOperation } from "../redux/operations/authOperations";

const App = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(isAuth);
  const history = useHistory();

  useEffect(() => {
    dispatch(getUserOperation());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (!isAuthenticated) {
      history.replace("/");
      return;
    }
    // eslint-disable-next-line
  }, [isAuthenticated]);

  return (
    <>
      <Header />
      <Main />
    </>
  );
};

export default App;

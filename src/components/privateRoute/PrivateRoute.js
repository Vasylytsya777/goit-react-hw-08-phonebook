import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { isAuth } from '../../redux/selectors/authSelectors';

const PrivateRoute = ({ component: MyComponent, ...props }) => {
  const isAuthenticated = useSelector(isAuth);
  return (
    <Route
      {...props}
      render={props => {
        return isAuthenticated ? (
          <MyComponent {...props} />
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
};

export default PrivateRoute;

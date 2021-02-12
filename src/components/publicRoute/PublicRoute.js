import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { isAuth } from '../../redux/selectors/authSelectors';

const PublicRoute = ({ component: MyComponent, restricted, ...props }) => {
  const isAuthenticated = useSelector(isAuth);

  return (
    <Route
      {...props}
      render={props => {
        return isAuthenticated && restricted ? (
          <Redirect to="/contacts" />
        ) : (
          <MyComponent {...props} />
        );
      }}
    />
  );
};

export default PublicRoute;

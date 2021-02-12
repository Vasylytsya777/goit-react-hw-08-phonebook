import React from 'react';
import { useSelector } from 'react-redux';

import mainRoutes from '../../redux/routes/mainRoutes';
import { isAuth } from '../../redux/selectors/authSelectors';
import LogOutMenu from '../logOutMenu/LogOutMenu';
import HeaderStyled, { NavElem } from './HeaderStyled';

const Header = () => {
  const isAuthenticated = useSelector(isAuth);

  return (
    <HeaderStyled>
      {isAuthenticated
        ? mainRoutes.map(
            route =>
              !route.restricted && (
                <NavElem
                  className="navlink"
                  activeClassName="navlink-active"
                  to={route.path}
                  key={route.name}
                  exact={route.exact}
                >
                  {route.name}
                </NavElem>
              ),
          )
        : mainRoutes.map(
            route =>
              !route.private && (
                <NavElem
                  className="navlink"
                  activeClassName="navlink-active"
                  to={route.path}
                  key={route.name}
                  exact={route.exact}
                >
                  {route.name}
                </NavElem>
              ),
          )}
      {isAuthenticated && <LogOutMenu />}
    </HeaderStyled>
  );
};

export default Header;

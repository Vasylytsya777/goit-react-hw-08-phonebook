import { lazy } from 'react';

const mainRoutes = [
  {
    path: '/',
    name: 'Home',
    exact: true,
    component: lazy(() =>
      import('../pages/homePage/HomePage' /*webpackChunkName: "Home" */),
    ),
    private: false,
    restricted: false,
  },
  {
    path: '/register',
    name: 'Register',
    exact: false,
    component: lazy(() =>
      import(
        '../pages/signUpPage/SignUpPage' /*webpackChunkName: "SignUpPage" */
      ),
    ),
    private: false,
    restricted: true,
  },
  {
    path: '/login',
    name: 'Login',
    exact: false,
    component: lazy(() =>
      import(
        '../pages/signInPage/SignInPage' /*webpackChunkName: "SignInPage" */
      ),
    ),
    private: false,
    restricted: true,
  },
  {
    path: '/contacts',
    name: 'Contacts',
    exact: false,
    component: lazy(() =>
      import(
        '../pages/contactsPage/ContactsPage' /*webpackChunkName: "ContactsPage" */
      ),
    ),
    private: true,
    restricted: false,
  },
];

export default mainRoutes;

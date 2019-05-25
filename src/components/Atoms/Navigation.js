import React from 'react';
import { Link } from 'react-router-dom';

import LogoutButton from './Logout';
import * as ROUTES from '../../constants/routes';

const Navigation = ({ authUser }) => (
  <nav style={{ padding: '0 10px' }}>
    <div className="nav-wrapper">
      <a href="/" className="brand-logo">
        ATL
      </a>
      {authUser ? <NavigationAuth /> : <NavigationNonAuth />}
    </div>
  </nav>
);

const NavigationAuth = () => (
  <ul id="nav-mobile" className="right hide-on-med-and-down">
    <li>
      <Link to={ROUTES.HOME}>Home</Link>
    </li>
    <li>
      <Link to={ROUTES.PROFILE}>Profile</Link>
    </li>
    <li>
      <Link to={ROUTES.ADMIN}>Admin</Link>
    </li>
    <li>
      <LogoutButton />
    </li>
  </ul>
);

const NavigationNonAuth = () => (
  <ul id="nav-mobile" className="right hide-on-med-and-down">
    <li>
      <Link to={ROUTES.LOGIN}>Login</Link>
    </li>
  </ul>
);

export default Navigation;

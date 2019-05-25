import React from 'react';

import { withFirebase } from '../Firebase';

const LogoutButton = ({ firebase }) => (
  <button className="waves-effect waves-light btn" onClick={firebase.doSignOut}>
    Sign Out
  </button>
);

export default withFirebase(LogoutButton);

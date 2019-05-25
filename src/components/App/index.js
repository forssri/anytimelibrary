import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import LoginPage from '../Pages/LoginPage';
import ProfilePage from '../Pages/ProfilePage';
import AdminPage from '../Pages/AdminPage';
import HomePage from '../Pages/HomePage';
import Navigation from '../Atoms/Navigation';

import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../Firebase';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      authUser: null
    };
  }
  componentDidMount() {
    this.listener = this.props.firebase.auth.onAuthStateChanged(authUser => {
      authUser
        ? this.setState({ authUser })
        : this.setState({ authUser: null });
    });
  }

  componentWillUnmount() {
    this.listener();
  }
  render() {
    return (
      <Router>
        <div>
          <Navigation authUser={this.state.authUser} />
          <Route path={ROUTES.LOGIN} component={LoginPage} />
          <Route path={ROUTES.HOME} component={HomePage} />
          <Route path={ROUTES.PROFILE} component={ProfilePage} />
          <Route path={ROUTES.ADMIN} component={AdminPage} />
        </div>
      </Router>
    );
  }
}

export default withFirebase(App);

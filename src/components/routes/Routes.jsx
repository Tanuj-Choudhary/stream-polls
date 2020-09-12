// Third Party Imports
import React from 'react';
import { Route, Switch, HashRouter, Redirect } from 'react-router-dom';

// Project Imports
import Home from '../home/Home';
import Login from '../login/Login';
import Page404 from '../error/Page404';
import SignUp from '../signup/SignUp';
import Polls from '../polls/Polls';
import MyPolls from '../mypolls/MyPolls';
import ProtectedRoutes from './ProtectedRoutes';
import CustomRoutes from './CustomRoutes';

function Routes(props) {
  return (
    <>
      <HashRouter>
        <Switch>
          <CustomRoutes path="/" exact component={Home} />
          <CustomRoutes path="/login" exact component={Login} />
          <CustomRoutes path="/signup/:id" exact component={SignUp} />

          <ProtectedRoutes path="/polls" exact component={Polls} />
          <ProtectedRoutes path="/mypolls" exact component={MyPolls} />

          <Route path="/Page404" exact component={Page404} />
          <Redirect to="/Page404" />
        </Switch>
      </HashRouter>
    </>
  );
}
export default Routes;

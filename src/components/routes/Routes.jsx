// Third Party Imports
import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

// Project Imports
import Home from '../home/Home';
import Login from '../login/Login';
import Page404 from '../error/Page404';
import SignUp from '../signup/SignUp';

function Routes() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/Page404" exact component={Page404} />
          <Route path="/signup/:id" exact component={SignUp} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
export default Routes;

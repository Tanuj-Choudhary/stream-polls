import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import Home from '../home/Home';
import Login from '../login/Login';
import Page404 from '../error/Page404';

function Routes() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/page404" exact component={Page404} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
export default Routes;

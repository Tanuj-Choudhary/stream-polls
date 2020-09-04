import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import Home from '../home/Home';

function Routes() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  );
}
export default Routes;

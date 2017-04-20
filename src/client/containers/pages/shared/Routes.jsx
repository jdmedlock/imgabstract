import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router';

// Routes
import NotFound from './NotFound';
import App from './../../../App';

const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

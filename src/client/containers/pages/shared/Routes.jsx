import React from 'react';
import { browserRouter, Switch, Route } from 'react-router';

// Routes
import NotFound from './NotFound';
import App from './../../../App';

const Routes = () => {
  return (
    <browserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route component={NotFound} />
      </Switch>
    </browserRouter>
  );
};

export default Routes;

import React from 'react';
import { Route, Switch } from 'react-router-dom';

// Common Routes
import Questions from './screens/Questions';
import NotFound from './screens/NotFound';

export default () => (
  <Switch>
    <Route exact path="/" component={Questions} />
    <Route component={NotFound} />
  </Switch>
);

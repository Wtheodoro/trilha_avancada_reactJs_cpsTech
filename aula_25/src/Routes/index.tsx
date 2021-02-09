import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import Info from '../pages/Info';
import Work from '../pages/Work';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/info" exact component={Info} />
      <Route path="/work" exact component={Work} />
    </Switch>
  );
}

export default Routes;

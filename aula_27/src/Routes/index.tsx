import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../Pages/Home';
import Product from '../Pages/Product';

const Routes = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/product/:id" exact component={Product} />
    </Switch>
  );
}

export default Routes;

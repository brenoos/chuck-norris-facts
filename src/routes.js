import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Categories from './pages/Categories';

const routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Categories} />
      </Switch>
    </BrowserRouter>
  );
};

export default routes;

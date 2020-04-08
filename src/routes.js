import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Categories from './pages/Categories';
import Joke from './pages/Joke';

const routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Categories} />
        <Route path="/joke" component={Joke} />
      </Switch>
    </BrowserRouter>
  );
};

export default routes;

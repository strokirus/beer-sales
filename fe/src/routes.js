import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { routePaths } from './settings';

import Search from './pages/Search';
import Checkout from './pages/Checkout';

export default (
  <div className="flex-container">
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path={routePaths.checkout}
        >
          <Checkout />
        </Route>
        <Route
          exact
          path={`${routePaths.home}:term?`}
          render={(props) => (
            <Search
              term={props.match.params.term}
            />
          )}
        />

      </Switch>
    </BrowserRouter>
  </div>
);

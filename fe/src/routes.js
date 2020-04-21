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
          path={`${routePaths.home}/:term?`}
          render={props => (
            <Search
              term={props.match.params.term}
            />
          )}          
        >
        </Route>
        <Route
          exact
          path={routePaths.checkout}
        >
          <Checkout />
        </Route>        
      </Switch>
    </BrowserRouter>
  </div>
);

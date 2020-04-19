import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { routePaths } from './settings';

import Search from './pages/Search';

export default (
  <div className="flex-container">
    <BrowserRouter>
      <Switch>
        <Route
          path={routePaths.home}
        >
          <Search />
        </Route>
      </Switch>
    </BrowserRouter>
  </div>
);

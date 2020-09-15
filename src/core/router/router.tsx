import * as React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { MovieListScene, MovieDetailsScene } from 'scenes';

import { switchRoutes } from './routes';

export const Router: React.FC = () => {
  return (
    <HashRouter>
      <Switch>
        <Route
          exact={true}
          path={[switchRoutes.root, switchRoutes.movieList]}
          component={MovieListScene}
        />
        <Route path={switchRoutes.movieDetails} component={MovieDetailsScene} />
      </Switch>
    </HashRouter>
  );
};

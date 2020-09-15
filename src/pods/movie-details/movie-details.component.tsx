import * as React from 'react';
import {
  MovieDetailsHeaderComponent,
  MovieDetailsArticleComponent,
} from './components';

export const MovieDetailsComponent: React.FC = () => {
  return (
    <React.Fragment>
      <MovieDetailsHeaderComponent />
      <MovieDetailsArticleComponent />
    </React.Fragment>
  );
};

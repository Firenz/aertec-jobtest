import * as React from 'react';
import { MovieDetailsContainer } from 'pods/movie-details';
import { AppLayout } from 'layouts';

export const MovieDetailsScene: React.FC = () => {
  return (
    <AppLayout>
      <MovieDetailsContainer />
    </AppLayout>
  );
};

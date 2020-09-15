import * as React from 'react';
import { AppLayout, HeaderLayout, MainLayout } from 'layouts';
import { HeaderBranding } from 'common-app';
import { MovieSearchContainer, MovieListContainer } from 'pods';

export const MovieListScene: React.FC = () => {
  return (
    <AppLayout>
      <HeaderLayout>
        <HeaderBranding />
        <MovieSearchContainer />
      </HeaderLayout>
      <MainLayout>
        <MovieListContainer />
      </MainLayout>
    </AppLayout>
  );
};

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
        <h1>Testing without API_KEY</h1>
        {/* <MovieListContainer /> */}
      </MainLayout>
    </AppLayout>
  );
};

import { generatePath } from 'react-router';

interface SwitchRoutes {
  root: string;
  movieList: string;
  movieDetails: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  movieList: '/list',
  movieDetails: '/movie/:id',
};

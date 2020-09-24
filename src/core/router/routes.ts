interface SwitchRoutes {
  root: string;
  movieList: string;
  movieDetails: string;
}

export const switchRoutes: SwitchRoutes = {
  root: '/',
  movieList: '/list',
  movieDetails: '/:media/:id',
};

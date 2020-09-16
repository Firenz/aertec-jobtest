export interface MovieVm {
  id: number;
  title: string;
  rating: number;
  overview: string;
  poster_path: string;
  release_year: number;
  genre_ids: string[];
}

export const createDefaultMovieEntity = (): MovieVm => {
  return <MovieVm>{
    id: -1,
    title: '',
    rating: 0.0,
    overview: '',
    poster_path: '',
    release_year: -1,
    genre_ids: [''],
  };
};

export interface MovieListVm {
  page: number;
  results: MovieVm[];
  total_results: number;
  total_pages: number;
}

export const createDefaultMovieList = (): MovieListVm => {
  return <MovieListVm>{
    page: -1,
    results: [],
    total_results: -1,
    total_pages: -1,
  };
};

export interface MovieGenreVm {
  id: number;
  name: string;
}

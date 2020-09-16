export interface MovieApi {
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: string;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

export const createDefaultMovieAPIEntity = (): MovieApi => {
  return <MovieApi>{
    poster_path: '',
    adult: false,
    overview: '',
    release_date: '00-00-0000',
    genre_ids: [-1],
    id: -1,
    original_title: '',
    original_language: '',
    title: '',
    backdrop_path: '',
    popularity: -1,
    vote_count: -1,
    video: false,
    vote_average: -1,
  };
};

export interface MovieListApi {
  page: number;
  results: MovieApi[];
  total_results: number;
  total_pages: number;
}

export interface MovieGenreApi {
  id: number;
  name: string;
}

export interface MovieGenresApi {
  genres: MovieGenreApi[];
}

export interface MovieApiError401 {
  status_message: string;
  success: boolean;
  status_code: number;
}

export interface MovieApiError404 {
  status_message: string;
  status_code: number;
}

export interface MediaApi {
  id: number;
  media_type: string;
  poster_path: string;
  title: string;
  name: string;
  original_name: string;
  original_language: string;
  overview: string;
  vote_average: number;
  release_date: string;
  first_air_date: string;
  genre_ids: number[];
  genres: MediaGenreApi[];
}

export interface MediaVideoApi {
  id: number;
  results: [
    {
      id: string;
      iso_639_1: string;
      iso_3166_1: string;
      key: string;
      name: string;
      site: string;
      size: number;
      type: string;
    },
  ];
}

export interface MediaListApi {
  page: number;
  results: MediaApi[];
  total_results: number;
  total_pages: number;
}

export interface MediaGenreApi {
  id: number;
  name: string;
}

export interface MediaGenresApi {
  genres: MediaGenreApi[];
}

export interface MediaApiError401 {
  status_message: string;
  success: boolean;
  status_code: number;
}

export interface MediaApiError404 {
  status_message: string;
  status_code: number;
}

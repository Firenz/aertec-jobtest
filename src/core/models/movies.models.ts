export interface MediaVm {
  id: number;
  media_type: string;
  title: string;
  rating: number;
  overview: string;
  poster_path: string;
  release_year: number;
  genre_ids: string[];
}

export const createDefaultMedia = (): MediaVm => {
  return <MediaVm>{
    id: -1,
    media_type: '',
    title: '',
    rating: 0.0,
    overview: '',
    poster_path: '',
    release_year: -1,
    genre_ids: [''],
  };
};

export interface MediaListVm {
  results: MediaVm[];
  total_results: number;
}

export const createDefaultMediaList = (): MediaListVm => {
  return <MediaListVm>{
    page: -1,
    results: [],
    total_results: -1,
    total_pages: -1,
  };
};

export interface MediaVideoVm {
  id: string;
  key: string;
  videoUrl: string;
  width: number;
}

export const createDefaultMediaVideo = (): MediaVideoVm => {
  return <MediaVideoVm>{
    id: '',
    key: '',
    videoUrl: '',
    width: -1,
  };
};

export interface MediaGenreVm {
  id: number;
  name: string;
}

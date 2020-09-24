const baseUrl = 'https://api.themoviedb.org/3';
const baseImageUrl = 'https://image.tmdb.org/t/p/w500';
const defaultLanguage = 'en-US';
const apiKey = process.env.moviedb_apikey;

export const trendingMediaUrl = `${baseUrl}/trending/all/day?api_key=${apiKey}`;

export const moviesGenreUrl = `${baseUrl}/genre/movie/list?api_key=${apiKey}&language=${defaultLanguage}`;
export const tvGenreUrl = `${baseUrl}/genre/tv/list?api_key=${apiKey}&language=${defaultLanguage}`;

export const generateSearchMediaUrl = (searchTerm: string): string =>
  `${baseUrl}/search/multi?api_key=${apiKey}&language=${defaultLanguage}&query=${searchTerm}&page=1&include_adult=false`;

export const generateMediaUrl = (mediaType: string, id: number): string =>
  `${baseUrl}/${mediaType}/${id}?api_key=${apiKey}&language=${defaultLanguage}`;

export const generateMediaPosterUrl = (posterUrl: string): string => {
  if (posterUrl == null) return '';
  return `${baseImageUrl}${posterUrl}`;
};

export const generateVideoUrl = (mediaType: string, id: number): string =>
  `${baseUrl}/${mediaType}/${id}/videos?api_key=${apiKey}&language=${defaultLanguage}`;

import { MediaListVm, MediaVm, MediaGenreVm, MediaVideoVm } from 'core/models';
import {
  MediaApi,
  MediaGenreApi,
  MediaGenresApi,
  MediaListApi,
  MediaVideoApi,
} from './models';
import {
  generateMediaPosterUrl,
  generateMediaUrl,
  generateSearchMediaUrl,
  generateVideoUrl,
  moviesGenreUrl,
  trendingMediaUrl,
  tvGenreUrl,
} from './routes';

class MoviesApi {
  private movieGenreList: MediaGenreVm[] = [];
  private tvGenreList: MediaGenreVm[] = [];
  private currentDate: Date = new Date();

  constructor() {
    this.getMoviesGenre();
    this.getTvGenre();
  }

  getTrendingMedia(): Promise<MediaListVm> {
    return fetch(trendingMediaUrl)
      .then((response) => this.checkStatus(response))
      .then((response) => this.parseJSON(response))
      .then((data) => {
        return this.resolveMediaList(data);
      });
  }

  getMediaById(mediaType: string, id: number): Promise<MediaVm> {
    return fetch(generateMediaUrl(mediaType, id))
      .then((response) => this.checkStatus(response))
      .then((response) => this.parseJSON(response))
      .then((data) => this.resolveMedia(data));
  }

  getTrailerUrlById(mediaType: string, id: number): Promise<MediaVideoVm> {
    return fetch(generateVideoUrl(mediaType, id))
      .then((response) => this.checkStatus(response))
      .then((response) => this.parseJSON(response))
      .then((data) => this.resolveVideos(data));
  }

  searchMediaByTerm(searchTerm: string): Promise<MediaListVm> {
    return fetch(generateSearchMediaUrl(searchTerm))
      .then((response) => this.checkStatus(response))
      .then((response) => this.parseJSON(response))
      .then((data) => this.resolveMediaList(data));
  }

  private checkStatus(response: Response): Promise<Response> {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    } else {
      const error = new Error(response.statusText);
      throw error;
    }
  }

  private getMoviesGenre(): Promise<MediaGenreVm[]> {
    return fetch(moviesGenreUrl)
      .then((response) => this.checkStatus(response))
      .then((response) => this.parseJSON(response))
      .then((data) => {
        return this.resolveGenres(data);
      })
      .then((genres) => (this.movieGenreList = genres));
  }

  private getTvGenre(): Promise<MediaGenreVm[]> {
    return fetch(tvGenreUrl)
      .then((response) => this.checkStatus(response))
      .then((response) => this.parseJSON(response))
      .then((data) => {
        return this.resolveGenres(data);
      })
      .then((genres) => (this.tvGenreList = genres));
  }

  private parseJSON(response: Response): any {
    return response.json();
  }

  private resolveMediaList(data: MediaListApi): Promise<MediaListVm> {
    const mediaList: MediaListVm = {
      results: [],
      total_results: 0,
    };

    data.results.map((mediaApi: MediaApi) => {
      //this is for filtering person types in multisearch
      if (mediaApi.media_type === 'person') return;
      // and not yet released movies and tv series
      const releaseDate = new Date(`${mediaApi.release_date}T00:00`);
      if (releaseDate > this.currentDate) return;

      return mediaList.results.push(this.parseMediaApiToMediaVm(mediaApi));
    });

    mediaList.total_results = mediaList.results.length;

    return Promise.resolve(mediaList);
  }

  private resolveMedia(data: MediaApi): Promise<MediaVm> {
    return Promise.resolve(this.parseMediaApiToMediaVm(data));
  }

  private resolveVideos(data: MediaVideoApi): Promise<MediaVideoVm> {
    const dataResult = data.results[0];
    const videos: MediaVideoVm = {
      id: dataResult?.id || '',
      width: dataResult?.size || 0,
      key: dataResult?.key || '',
      videoUrl:
        dataResult == null
          ? ''
          : `https://www.youtube.com/watch?v=${dataResult.key}`,
    };

    return Promise.resolve(videos);
  }

  private resolveGenres(data: MediaGenresApi): Promise<MediaGenreVm[]> {
    const genres: MediaGenreVm[] = [];
    data.genres.map((genreApi: MediaGenreApi) => {
      const genre: MediaGenreVm = {
        id: genreApi.id,
        name: genreApi.name,
      };
      if (genre.name) genres.push(genre);
    });
    return Promise.resolve(genres);
  }

  private getGenreNameById(mediaType: string, genreId: number): string {
    switch (mediaType) {
      case 'tv':
        return (
          this.tvGenreList.find((genre) => genre.id === genreId)?.name || ''
        );
      case 'movie':
        return (
          this.movieGenreList.find((genre) => genre.id === genreId)?.name || ''
        );
      default:
        return '';
    }
  }

  private parseMediaApiToMediaVm(mediaApi: MediaApi): MediaVm {
    const getTitle = (): string => {
      if (mediaApi.title) return mediaApi.title;
      else if (mediaApi.name) return mediaApi.name;
      else if (mediaApi.original_name) return mediaApi.original_name;
      return 'Title not found';
    };
    const getGenres = (): string[] => {
      const genres: string[] = [];
      if (mediaApi.genres) {
        return mediaApi.genres.map((genre: MediaGenreApi) => genre.name);
      }

      mediaApi.genre_ids.map((genreId: number) => {
        if (this.getGenreNameById(mediaApi.media_type, genreId))
          genres.push(this.getGenreNameById(mediaApi.media_type, genreId));
      });
      return genres;
    };
    const getReleaseYear = (): number => {
      if (mediaApi.release_date) {
        return parseInt(mediaApi.release_date.slice(0, 4));
      }
      return parseInt(mediaApi.first_air_date.slice(0, 4));
    };

    const media: MediaVm = {
      id: mediaApi.id,
      media_type: mediaApi.media_type,
      title: getTitle(),
      rating: mediaApi.vote_average,
      overview: mediaApi.overview,
      poster_path: generateMediaPosterUrl(mediaApi.poster_path),
      release_year: getReleaseYear(),
      genre_ids: getGenres(),
    };
    return media;
  }
}

export const moviesAPI = new MoviesApi();

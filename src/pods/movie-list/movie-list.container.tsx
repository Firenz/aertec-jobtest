import * as React from 'react';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import {
  createDefaultMediaList,
  MediaListVm,
  moviesAPI,
  SearchTermContext,
} from 'core';
import { LoadingComponent } from 'common-app';
import { MovieListHeader } from './components';
import { MovieListComponent } from './movie-list.component';

export const MovieListContainer: React.FC = () => {
  const context = React.useContext(SearchTermContext);
  const [mediaList, setMediaList] = React.useState<MediaListVm>(
    createDefaultMediaList(),
  );
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const loadResults = (): void => {
    setIsLoading(true);
    if (context.searchTerm === '') {
      moviesAPI
        .getTrendingMedia()
        .then((trendingMedia: MediaListVm) => {
          setMediaList(trendingMedia);
        })
        .finally(() => setIsLoading(false));
    } else {
      moviesAPI
        .searchMediaByTerm(context.searchTerm)
        .then((searchedMedia: MediaListVm) => {
          setMediaList(searchedMedia);
        })
        .finally(() => setIsLoading(false));
    }
  };

  React.useEffect(() => {
    loadResults();
  }, []);

  React.useEffect(() => {
    loadResults();
  }, [context.searchTerm]);

  if (isLoading) return <LoadingComponent />;
  if (context.searchTerm !== '') {
    if (mediaList.results.length === 0) {
      return (
        <MovieListHeader
          text={`No results found for '${context.searchTerm}'`}
        />
      );
    }

    return (
      <React.Fragment>
        <MovieListHeader text={`Found results for '${context.searchTerm}'`} />
        <MovieListComponent movieList={mediaList} />
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <MovieListHeader text={`Trending`} icon={WhatshotIcon} />
      <MovieListComponent movieList={mediaList} />
    </React.Fragment>
  );
};

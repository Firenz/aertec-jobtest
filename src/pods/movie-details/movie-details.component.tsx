import { MediaVideoVm, MediaVm } from 'core';
import * as React from 'react';
import {
  MovieDetailsHeaderComponent,
  MovieDetailsArticleComponent,
} from './components';

interface Props {
  mediaDetails: MediaVm;
  videoDetails: MediaVideoVm;
}

export const MovieDetailsComponent: React.FC<Props> = (props: Props) => {
  const { mediaDetails, videoDetails } = props;
  return (
    <React.Fragment>
      <MovieDetailsHeaderComponent
        title={mediaDetails.title}
        releaseYear={mediaDetails.release_year.toString()}
        genres={mediaDetails.genre_ids}
        rating={mediaDetails.rating}
      />
      <MovieDetailsArticleComponent
        title={mediaDetails.title}
        posterUrl={mediaDetails.poster_path}
        overview={mediaDetails.overview}
        videoDetails={videoDetails}
      />
    </React.Fragment>
  );
};

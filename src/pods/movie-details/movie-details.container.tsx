import * as React from 'react';
import {
  moviesAPI,
  createDefaultMedia,
  MediaVideoVm,
  MediaVm,
  createDefaultMediaVideo,
} from 'core';
import { MovieDetailsComponent } from './movie-details.component';
import { LoadingComponent } from 'common-app';

interface Props {
  id: string;
  mediaType: string;
  movieDetails: MediaVm;
}

export const MovieDetailsContainer: React.FC<Props> = (props: Props) => {
  const [movieDetails, setMovieDetails] = React.useState<MediaVm>(
    createDefaultMedia(),
  );
  const [movieTrailer, setMovieTrailer] = React.useState<MediaVideoVm>(
    createDefaultMediaVideo(),
  );
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsLoading(true);
    moviesAPI
      .getMediaById(props.mediaType, parseInt(props.id))
      .then((mediaData) => {
        setMovieDetails(mediaData);
      })
      .finally(() => setIsLoading(false));
  }, []);

  React.useEffect(() => {
    setIsLoading(true);
    moviesAPI
      .getTrailerUrlById(props.mediaType, parseInt(props.id))
      .then((videoData: MediaVideoVm) => {
        setMovieTrailer(videoData);
      })
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) return <LoadingComponent />;

  return (
    <MovieDetailsComponent
      mediaDetails={movieDetails}
      videoDetails={movieTrailer}
    />
  );
};

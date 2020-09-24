import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { createDefaultMedia, MediaVm } from 'core';
import { AppLayout } from 'layouts';
import { MovieDetailsContainer } from 'pods/movie-details';

interface ParamProps {
  media: string;
  id: string;
}

interface Props extends RouteComponentProps<ParamProps> {
  location: any;
}

export const MovieDetailsScene: React.FC<Props> = (props: Props) => {
  return (
    <AppLayout>
      <MovieDetailsContainer
        mediaType={props.match.params.media}
        id={props.match.params.id}
        movieDetails={props.location.state?.mediaDetails}
      />
    </AppLayout>
  );
};

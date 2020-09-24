import * as React from 'react';
import { MediaVm } from 'core';
import { MovieItemComponent } from './movie-item.component';

interface Props {
  movieData: MediaVm;
}

export const MovieItemContainer: React.FC<Props> = (props: Props) => {
  const { movieData } = props;
  return <MovieItemComponent {...movieData} />;
};

import * as React from 'react';
import { MovieItemComponent } from './movie-item.component';

interface Props {
  title: string;
  imageUrl: string;
  rating: string;
  director: string;
}

export const MovieItemContainer: React.FC<Props> = (props: Props) => {
  return <MovieItemComponent {...props} />;
};

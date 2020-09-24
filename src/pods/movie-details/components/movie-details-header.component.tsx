import * as React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core';
import { HeaderLayout } from 'layouts';
import { MovieRatingComponent } from './movie-rating.component';
import { MovieGenresComponent } from './movie-genres.component';
import { MovieHeaderSubtitleComponent } from './movie-header-subtitle.component';
import { MovieHeaderTitleComponent } from './movie-header-title.component';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    movieHeader: {
      width: '100%',
      display: 'flex',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      [theme.breakpoints.down('sm')]: {
        marginBottom: theme.spacing(1),
      },
    },
    movieInfoWrapper: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      [theme.breakpoints.down('sm')]: {
        fontSize: '1rem',
      },
    },
    movieTitlesWrapper: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-end',
      [theme.breakpoints.down('sm')]: {},
    },
  }),
);

interface Props {
  title: string;
  releaseYear: string;
  genres: string[];
  rating: number;
}

export const MovieDetailsHeaderComponent: React.FC<Props> = (props: Props) => {
  const classes = useStyles();
  const { title, releaseYear, genres, rating } = props;
  return (
    <HeaderLayout>
      <div className={classes.movieHeader}>
        <div className={classes.movieInfoWrapper}>
          <div className={classes.movieTitlesWrapper}>
            <MovieHeaderTitleComponent title={title} />
            <MovieHeaderSubtitleComponent subtitle={releaseYear} />
          </div>
          <MovieGenresComponent genres={genres} />
        </div>
        <MovieRatingComponent rating={rating} />
      </div>
    </HeaderLayout>
  );
};

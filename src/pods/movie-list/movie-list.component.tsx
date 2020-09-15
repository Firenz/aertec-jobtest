import * as React from 'react';
import { Grid } from '@material-ui/core';
import { Pagination } from '@material-ui/lab';
import { makeStyles, Theme, createStyles } from '@material-ui/core';
import { MovieItemContainer } from './movie-item';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grid: {
      alignSelf: 'center',
      width: '100% !important',
      margin: '2rem 0 0',
      justifyContent: 'flex-start',
      [theme.breakpoints.down('md')]: {
        // width: '100% !important',
        justifyContent: 'center !important',
      },
    },
    pagination: {
      margin: '1rem auto 2rem',
    },
  }),
);

interface MovieData {
  title: string;
  imageUrl: string;
  rating: string;
  director: string;
}

export const MovieListComponent: React.FC = () => {
  const classes = useStyles();

  const movieList: MovieData[] = [
    {
      title: '',
      imageUrl: '',
      rating: '0.0',
      director: '',
    },
    {
      title: '',
      imageUrl: '',
      rating: '0.0',
      director: '',
    },
    {
      title: '',
      imageUrl: '',
      rating: '0.0',
      director: '',
    },
    {
      title: '',
      imageUrl: '',
      rating: '0.0',
      director: '',
    },
    {
      title: '',
      imageUrl: '',
      rating: '0.0',
      director: '',
    },
    // {
    //   title: '',
    //   imageUrl: '',
    //   rating: '0.0',
    //   director: '',
    // },
    // {
    //   title: '',
    //   imageUrl: '',
    //   rating: '0.0',
    //   director: '',
    // },
    // {
    //   title: '',
    //   imageUrl: '',
    //   rating: '0.0',
    //   director: '',
    // },
  ];
  return (
    <React.Fragment>
      <Grid
        className={classes.grid}
        container
        direction="row"
        alignItems="flex-start"
        spacing={3}
      >
        {movieList.map((movie: MovieData, index) => (
          <MovieItemContainer
            key={index}
            title={movie.title}
            imageUrl={movie.imageUrl}
            rating={movie.rating}
            director={movie.director}
          />
        ))}
      </Grid>
      <Pagination
        className={classes.pagination}
        color="primary"
        size="large"
        count={10}
        showFirstButton
        showLastButton
      />
    </React.Fragment>
  );
};

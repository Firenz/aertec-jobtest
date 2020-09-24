import * as React from 'react';
import { Grid } from '@material-ui/core';
// import { Pagination } from '@material-ui/lab';
import { makeStyles, Theme, createStyles } from '@material-ui/core';
import { MediaListVm, MediaVm } from 'core';
import { MovieItemContainer } from './components/movie-item';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grid: {
      alignSelf: 'center',
      width: '100% !important',
      margin: '2rem 0 6rem',
      justifyContent: 'center',
      [theme.breakpoints.down('md')]: {
        justifyContent: 'center !important',
      },
    },
    // pagination: {
    //   margin: '1rem auto 2rem',
    //   margin: '1rem auto 6rem',
    // },
  }),
);

interface Props {
  movieList: MediaListVm;
}

export const MovieListComponent: React.FC<Props> = (props: Props) => {
  const classes = useStyles(props);
  const { movieList } = props;

  return (
    <React.Fragment>
      <Grid
        className={classes.grid}
        container
        direction="row"
        alignItems="center"
        spacing={3}
      >
        {movieList.results.map((movie: MediaVm) => (
          <MovieItemContainer key={movie.id} movieData={movie} />
        ))}
      </Grid>
      {/* <Pagination
        className={classes.pagination}
        color="primary"
        size="large"
        count={10}
        showFirstButton
        showLastButton
      /> */}
    </React.Fragment>
  );
};

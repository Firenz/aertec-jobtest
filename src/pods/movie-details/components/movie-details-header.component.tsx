import * as React from 'react';
import { makeStyles, Theme, createStyles, Typography } from '@material-ui/core';
import { HeaderLayout } from 'layouts';
import GradeIcon from '@material-ui/icons/Grade';

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
    movieTitle: {
      fontSize: '3rem',
      marginRight: theme.spacing(2),
      [theme.breakpoints.down('sm')]: {
        fontSize: '2rem',
        margin: '1rem 0 0 0.2rem',
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: '1.5rem',
        margin: '1rem 0 0 0.2rem',
      },
    },
    movieYear: {
      fontSize: '2.25rem',
      opacity: 0.7,
      paddingBottom: '0.2rem',
      [theme.breakpoints.down('sm')]: {
        fontSize: '1.2rem',
        marginLeft: '0.4rem',
        paddingBottom: '0.2rem',
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: '1rem',
        paddingBottom: '0.1rem',
      },
    },
    movieDetails: {
      opacity: 0.8,
      fontSize: '1rem',
      marginTop: '0.5rem',
      marginBottom: '0.5rem',
      [theme.breakpoints.down('sm')]: {
        fontSize: '0.85rem',
      },
      [theme.breakpoints.down('xs')]: {
        fontSize: '0.8rem',
      },
    },
    movieRating: {
      alignSelf: 'center',
      display: 'flex',
      alignItems: 'center',
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'row-reverse',
        margin: `${theme.spacing(1)}px 0`,
        '& .MuiTypography-h3': {
          fontSize: '1rem',
        },
      },
    },
    movieRatingIcon: {
      width: '3rem',
      height: 'auto',
      marginLeft: theme.spacing(1),
      [theme.breakpoints.down('xs')]: {
        width: '1.5rem',
        marginLeft: 0,
        marginRitgh: theme.spacing(1),
      },
    },
  }),
);

export const MovieDetailsHeaderComponent: React.FC = () => {
  const classes = useStyles();
  return (
    <HeaderLayout>
      <div className={classes.movieHeader}>
        <div className={classes.movieInfoWrapper}>
          <div className={classes.movieTitlesWrapper}>
            <Typography
              variant="h3"
              component="h1"
              className={classes.movieTitle}
            >
              {'Movie Title'}
            </Typography>
            <Typography
              variant="h5"
              component="h2"
              className={classes.movieYear}
            >
              {'(2020)'}
            </Typography>
          </div>
          <Typography
            className={classes.movieDetails}
            variant="body2"
            component="h3"
          >
            <span>{'duration'}</span>
            {' | '}
            <span>{'genres...'}</span>
            {' | '}
            <span>{'release date'}</span>
          </Typography>
        </div>
        <div className={classes.movieRating}>
          <Typography variant="h3" component="span">
            {'9.0'}
          </Typography>
          <GradeIcon className={classes.movieRatingIcon} />
        </div>
      </div>
    </HeaderLayout>
  );
};

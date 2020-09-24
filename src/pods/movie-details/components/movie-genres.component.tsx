import * as React from 'react';
import { makeStyles, Theme, createStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    movieGenres: {
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
  }),
);

interface Props {
  genres: string[];
}

export const MovieGenresComponent: React.FC<Props> = (props: Props) => {
  const classes = useStyles(props);

  if (props.genres.length === 0) return <React.Fragment></React.Fragment>;
  return (
    <Typography className={classes.movieGenres} variant="body2" component="h3">
      {props.genres.join(', ')}
    </Typography>
  );
};

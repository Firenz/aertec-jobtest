import * as React from 'react';
import { makeStyles, Theme, createStyles, Typography } from '@material-ui/core';
import GradeIcon from '@material-ui/icons/Grade';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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

interface Props {
  rating: number;
}

export const MovieRatingComponent: React.FC<Props> = (props: Props) => {
  const classes = useStyles(props);

  if (props.rating === 0) return <React.Fragment></React.Fragment>;
  return (
    <div className={classes.movieRating}>
      <Typography variant="h3" component="span">
        {props.rating}
      </Typography>
      <GradeIcon className={classes.movieRatingIcon} />
    </div>
  );
};

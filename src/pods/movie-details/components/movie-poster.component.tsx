import * as React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core';
import { ResponsiveImg } from 'common/components';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    moviePoster: {
      flex: 1,
      flexBasis: '28.365384615%',
      [theme.breakpoints.down('sm')]: {
        display: 'none',
      },
    },
    onlyMoviePoster: {
      flex: 0,
      flexGrow: 0.2,
      flexBasis: '28.365384615%',
      [theme.breakpoints.down('xs')]: {
        flexGrow: 0.5,
      },
    },
  }),
);

interface Props {
  title: string;
  posterUrl: string;
  isPosterSingleDisplayingMedia: boolean;
}

export const MoviePosterComponent: React.FC<Props> = (props: Props) => {
  const classes = useStyles(props);
  if (props.title === '') return <React.Fragment></React.Fragment>;
  if (props.isPosterSingleDisplayingMedia) {
    return (
      <div className={classes.onlyMoviePoster}>
        <ResponsiveImg
          imgPath={props.posterUrl}
          alt={`${props.title} poster`}
        />
      </div>
    );
  }

  return (
    <div className={classes.moviePoster}>
      <ResponsiveImg imgPath={props.posterUrl} alt={`${props.title} poster`} />
    </div>
  );
};

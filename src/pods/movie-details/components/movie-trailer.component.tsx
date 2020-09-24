import * as React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core';
import { ResponsiveVideo } from 'common/components';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    movieTrailer: {
      flex: 1,
      flexBasis: '71.634615385%',
      [theme.breakpoints.down('sm')]: {
        flexBasis: '100%',
      },
    },
  }),
);

interface Props {
  title: string;
  youtubeId: string;
}

export const MovieTrailerComponent: React.FC<Props> = (props: Props) => {
  const classes = useStyles(props);

  if (props.title === '') return <React.Fragment></React.Fragment>;

  return (
    <div className={classes.movieTrailer}>
      <ResponsiveVideo title={props.title} youtubeId={props.youtubeId} />
    </div>
  );
};

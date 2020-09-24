import * as React from 'react';
import {
  CircularProgress,
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    circularProgress: {
      alignSelf: 'center',
      margin: 'auto 0',
    },
  }),
);

export const LoadingComponent: React.FC = () => {
  const classes = useStyles();
  return (
    <CircularProgress className={classes.circularProgress} size={'10rem'} />
  );
};

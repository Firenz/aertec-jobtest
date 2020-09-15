import * as React from 'react';
import { makeStyles, Theme, createStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    brandingTitle: {
      fontSize: '2rem',
      [theme.breakpoints.down(690)]: {
        fontSize: '1.5rem',
        margin: '1rem 0 0.2rem',
      },
      [theme.breakpoints.down(610)]: {
        fontSize: '1rem',
        margin: '1rem 0 0.2rem',
      },
    },
  }),
);
export const HeaderBranding: React.FC = () => {
  const classes = useStyles();
  return (
    <Typography variant="h6" component="h1" className={classes.brandingTitle}>
      {'Videoclub webapp'}
    </Typography>
  );
};

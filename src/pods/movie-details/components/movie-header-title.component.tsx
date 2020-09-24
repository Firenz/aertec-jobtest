import * as React from 'react';
import { makeStyles, Theme, createStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    title: {
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
  }),
);

interface Props {
  title: string;
}

export const MovieHeaderTitleComponent: React.FC<Props> = (props: Props) => {
  const classes = useStyles();

  if (props.title === '') return <React.Fragment></React.Fragment>;
  return (
    <Typography variant="h5" component="h2" className={classes.title}>
      {`${props.title}`}
    </Typography>
  );
};

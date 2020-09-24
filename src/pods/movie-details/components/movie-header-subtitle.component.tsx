import * as React from 'react';
import { makeStyles, Theme, createStyles, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    subtitle: {
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
  }),
);

interface Props {
  subtitle: string;
}

export const MovieHeaderSubtitleComponent: React.FC<Props> = (props: Props) => {
  const classes = useStyles();

  if (props.subtitle === '') return <React.Fragment></React.Fragment>;
  return (
    <Typography variant="h5" component="h2" className={classes.subtitle}>
      {`(${props.subtitle})`}
    </Typography>
  );
};

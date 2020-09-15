import * as React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      textAlign: 'left',
      backgroundColor: theme.palette.background.default,
      color: theme.palette.text.primary,
      padding: '0 1.2rem',
    },
    center: {
      width: '100%',
      maxWidth: theme.spacing(150),
      margin: '0 auto',
      padding: theme.spacing(1.25),
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      [theme.breakpoints.down('xs')]: {
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: '0.2rem',
      },
    },
  }),
);

interface Props {
  children: any;
}

export const HeaderLayout: React.FC<Props> = (props: Props) => {
  const classes = useStyles(props);

  return (
    <header className={classes.root}>
      <div className={classes.center}>{props.children}</div>
    </header>
  );
};

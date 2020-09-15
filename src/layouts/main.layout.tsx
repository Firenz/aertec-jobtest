import * as React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      maxWidth: theme.spacing(160),
      margin: `0 auto`,
      padding: `0 ${theme.spacing(4)}px`,
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      color: theme.palette.text.primary,
      ...theme.typography.body1,
      [theme.breakpoints.down('sm')]: {
        margin: 0,
        padding: 0,
      },
    },
  }),
);

interface Props {
  children: any;
}

export const MainLayout: React.FC<Props> = (props: Props) => {
  const classes = useStyles(props);

  return <main className={classes.root}>{props.children}</main>;
};

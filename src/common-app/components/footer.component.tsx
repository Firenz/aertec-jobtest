import * as React from 'react';
import { makeStyles, Theme, createStyles, Typography } from '@material-ui/core';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: theme.spacing(1),
      backgroundColor: theme.palette.primary.dark,
      color: theme.palette.text.secondary,
    },
    footerLink: {
      color: theme.palette.text.secondary,
      '&:hover': {
        opacity: 0.7,
      },
    },
    footerIcon: {
      height: '1rem',
      width: '1.2rem',
      verticalAlign: 'text-bottom',
    },
  }),
);

export const FooterComponent: React.FC = () => {
  const classes = useStyles();

  return (
    <Typography className={classes.root} variant="caption" component="footer">
      <span role="img" aria-label="copyright">
        &copy;
      </span>
      {' 2020. Developed in React with '}
      <span role="img" aria-label="love">
        <FavoriteIcon className={classes.footerIcon} />
      </span>
      {' by '}
      <a
        className={classes.footerLink}
        href="mailto:alicia.guardenoalbertos@gmail.com"
      >
        {'Alicia Guardeño'}
      </a>
    </Typography>
  );
};

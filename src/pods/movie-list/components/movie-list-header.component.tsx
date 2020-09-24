/* eslint-disable @typescript-eslint/ban-types */
import * as React from 'react';
import {
  Typography,
  makeStyles,
  Theme,
  createStyles,
  SvgIconProps,
} from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header: {
      opacity: 0.8,
    },
    icon: {
      verticalAlign: 'bottom',
      marginRight: '0.5rem',
    },
  }),
);

interface Props {
  text: string;
  icon?: (props: SvgIconProps) => JSX.Element;
}

export const MovieListHeader: React.FC<Props> = (props: Props) => {
  const classes = useStyles(props);
  return (
    <Typography className={classes.header} variant="h3" component="h1">
      {props.icon != null && (
        <props.icon className={classes.icon} fontSize="large" />
      )}
      {props.text}
    </Typography>
  );
};

import * as React from 'react';
import {
  Grid,
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
} from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gridItem: {
      [theme.breakpoints.down('sm')]: {
        paddingLeft: '0 !important',
        paddingRight: '0 !important',
      },
    },
    card: {
      height: 240,
      border: `${theme.palette.primary.dark} solid 0.5rem`,
      [theme.breakpoints.down('sm')]: {
        borderLeft: 'none',
        borderRight: 'none',
      },
    },
    actionArea: {
      width: '100%',
      height: '100%',
      position: 'relative',
    },
    media: {
      height: '100%',
    },
    content: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      zIndex: 1,
      bottom: 0,
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'flex-end',
      justifyContent: 'flex-start',
      color: theme.palette.text.primary,
      boxShadow: 'inset 0px -101px 40px -41px rgba(0,0,0,0.75)',
    },
    rating: {
      width: 60,
      height: 60,
      marginRight: theme.spacing(2),
      paddingTop: '0.8rem',
      backgroundColor: theme.palette.primary.dark,
      textAlign: 'center',
    },
    info: {
      textAlign: 'left',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
    },
    title: {
      margin: 0,
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
    },
    subtitle: {
      color: theme.palette.text.secondary,
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
    },
  }),
);

interface Props {
  title: string;
  imageUrl: string;
  rating: string;
  director: string;
}

export const MovieItemComponent: React.FC<Props> = (props: Props) => {
  const classes = useStyles(props);

  return (
    <Grid
      item
      xl={6}
      lg={6}
      md={8}
      sm={12}
      xs={12}
      className={classes.gridItem}
    >
      <Card className={classes.card}>
        <CardActionArea className={classes.actionArea}>
          <CardMedia
            className={classes.media}
            image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"
          />
          <CardContent className={classes.content}>
            <Typography className={classes.rating} variant="h5" component="h2">
              9.5
            </Typography>
            <div className={classes.info}>
              <Typography className={classes.title} variant="h5" component="h2">
                Movie title
              </Typography>
              <Typography
                className={classes.subtitle}
                variant="body2"
                color="textSecondary"
                component="p"
              >
                Director 1
              </Typography>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

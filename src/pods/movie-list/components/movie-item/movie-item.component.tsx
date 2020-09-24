import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  Grid,
  Card,
  CardMedia,
  CardActionArea,
  CardContent,
  Typography,
  makeStyles,
  Theme,
  createStyles,
} from '@material-ui/core';
const imageNotFound = require('../../../../assets/not-found-image.jpg');

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    gridItem: {
      [theme.breakpoints.down('sm')]: {
        paddingLeft: '0 !important',
        paddingRight: '0 !important',
        margin: '1rem 0',
        '&:first-child': {
          marginTop: 0,
        },
        '&:last-child': {
          marginBottom: 0,
        },
      },
    },
    card: {
      height: '60vh',
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
      minHeight: '27px',
      color: theme.palette.text.secondary,
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
    },
  }),
);

interface Props {
  id: number;
  media_type: string;
  title: string;
  rating: number;
  overview: string;
  poster_path: string;
  release_year: number;
  genre_ids: string[];
}

export const MovieItemComponent: React.FC<Props> = (props: Props) => {
  const classes = useStyles(props);
  const genres = () => {
    if (props.genre_ids.length === 0) return ' ';
    else return props.genre_ids.join(', ');
  };
  return (
    <Grid
      item
      xl={4}
      lg={4}
      md={6}
      sm={12}
      xs={12}
      className={classes.gridItem}
    >
      <Card className={classes.card}>
        <CardActionArea className={classes.actionArea}>
          <Link to={`/${props.media_type}/${props.id}`}>
            <CardMedia
              className={classes.media}
              component="img"
              alt={`${props.title} poster`}
              src={props.poster_path === '' ? imageNotFound : props.poster_path}
              title={props.title}
            />
            <CardContent className={classes.content}>
              <Typography
                className={classes.rating}
                variant="h5"
                component="h2"
              >
                {props.rating <= 0 ? `-` : `${props.rating}`}
              </Typography>
              <div className={classes.info}>
                <Typography
                  className={classes.title}
                  variant="h5"
                  component="h2"
                >
                  {props.title}
                </Typography>
                <Typography
                  className={classes.subtitle}
                  variant="body2"
                  color="textSecondary"
                  component="p"
                >
                  {genres()}
                </Typography>
              </div>
            </CardContent>
          </Link>
        </CardActionArea>
      </Card>
    </Grid>
  );
};

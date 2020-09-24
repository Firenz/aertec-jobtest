import * as React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, Theme, createStyles, Typography } from '@material-ui/core';
import { MainLayout } from 'layouts';
import { MediaVideoVm, SearchTermContext } from 'core';
import { MoviePosterComponent } from './movie-poster.component';
import { MovieTrailerComponent } from './movie-trailer.component';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    article: {
      maxWidth: '65rem',
      margin: '0 2rem',
      alignSelf: 'center',
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      [theme.breakpoints.down('sm')]: {
        margin: 0,
      },
    },
    articleMedia: {
      width: '100%',
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'center',
    },
    articleContent: {
      padding: '5rem 4rem',
      textAlign: 'left',
      [theme.breakpoints.down('sm')]: {
        padding: '2rem 4rem 0',
      },
      [theme.breakpoints.down('xs')]: {
        padding: '2rem 2rem 0',
      },
    },
    movieDescription: {
      [theme.breakpoints.down('xs')]: {
        fontSize: '1rem',
      },
    },
    link: {
      margin: theme.spacing(6),
      padding: theme.spacing(2),
      alignSelf: 'center',
      justifySelf: 'flex-end',
      '&:-webkit-any-link': {
        color: theme.palette.text.primary,
        '&:active': {
          color: theme.palette.text.primary,
        },
      },
    },
  }),
);

interface Props {
  title: string;
  posterUrl: string;
  overview: string;
  videoDetails: MediaVideoVm;
}

export const MovieDetailsArticleComponent: React.FC<Props> = (props: Props) => {
  const classes = useStyles(props);
  const { title, posterUrl, overview, videoDetails } = props;
  const hasDisplayingMedia = (): boolean => {
    if (posterUrl === '' && videoDetails.key === '') return false;
    else return true;
  };
  const hasDisplayingOnlyPoster = (): boolean => {
    if (posterUrl !== '' && videoDetails.key === '') return false;
    else return true;
  };

  return (
    <MainLayout>
      <article className={classes.article}>
        {hasDisplayingMedia() && (
          <section className={classes.articleMedia}>
            <MoviePosterComponent
              title={`${title} poster`}
              posterUrl={posterUrl}
              isPosterSingleDisplayingMedia={hasDisplayingOnlyPoster()}
            />
            <MovieTrailerComponent
              title={`${title} trailer`}
              youtubeId={videoDetails.key}
            />
          </section>
        )}
        <section className={classes.articleContent}>
          <Typography
            variant="body2"
            component="p"
            className={classes.movieDescription}
          >
            {overview}
          </Typography>
        </section>
      </article>
      <Link className={classes.link} to="/">
        <Typography color="textPrimary" variant="h6">
          {'Return to main'}
        </Typography>
      </Link>
    </MainLayout>
  );
};

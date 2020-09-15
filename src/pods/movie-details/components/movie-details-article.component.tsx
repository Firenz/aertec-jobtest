/* eslint-disable jsx-a11y/media-has-caption */
import * as React from 'react';
import {
  makeStyles,
  Theme,
  createStyles,
  Typography,
  Link,
} from '@material-ui/core';
import { MainLayout } from 'layouts';

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
      display: 'flex',
      alignItems: 'flex-start',
      justifyContent: 'stretch',
      // borderTop: `1px solid ${theme.palette.primary.main}`,
      // borderBottom: `1px solid ${theme.palette.primary.main}`,
    },
    articleContent: {
      padding: '3rem 2rem 1rem',
      textAlign: 'left',
      [theme.breakpoints.down('sm')]: {
        padding: '2rem 4rem 0',
      },
      [theme.breakpoints.down('xs')]: {
        padding: '2rem 2rem 0',
      },
    },
    articleAction: {
      margin: theme.spacing(2),
      padding: theme.spacing(2),
    },
    moviePoster: {
      maxWidth: '29.75%',
      height: 'auto',
      [theme.breakpoints.down('sm')]: {
        contentVisibility: 'hidden',
      },
    },
    movieTrailer: {
      flexGrow: 1,
      width: '60% !important',
      height: 'auto !important',
      [theme.breakpoints.down('sm')]: {
        display: 'hidden',
      },
    },
    movieDescription: {
      [theme.breakpoints.down('xs')]: {
        fontSize: '1rem',
      },
    },
  }),
);

export const MovieDetailsArticleComponent: React.FC = () => {
  const classes = useStyles();
  return (
    <MainLayout>
      <article className={classes.article}>
        <section className={classes.articleMedia}>
          <img
            className={classes.moviePoster}
            src="https://images.unsplash.com/photo-1585834320473-908ab956ce3f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1875&q=80"
            alt={`Movie title poster`}
          />
          <video
            className={classes.movieTrailer}
            id="video"
            controls={true}
            preload="none"
            poster="http://media.w3.org/2010/05/sintel/poster.png"
          >
            <source
              id="mp4"
              src="http://media.w3.org/2010/05/sintel/trailer.mp4"
              type="video/mp4"
            />
            <source
              id="webm"
              src="http://media.w3.org/2010/05/sintel/trailer.webm"
              type="video/webm"
            />
            <source
              id="ogv"
              src="http://media.w3.org/2010/05/sintel/trailer.ogv"
              type="video/ogg"
            />
            {`<!--
          Track to be used for accessibility using the VTT standard. 

          See https://www.html5rocks.com/en/tutorials/track/basics/ for more information on how to use text tracks
        -->`}
            <track
              kind="subtitles"
              label="English subtitles"
              src="subtitles_en.vtt"
              srcLang="en"
              default
            ></track>
            {`<!-- 
        We can also add more than one text track and let the user choose which one to play. There is now way to 
        currently do this with the built in controls so it'll have to be scripted -->`}
            <track
              kind="subtitles"
              label="Deutsche Untertitel"
              src="subtitles_de.vtt"
              srcLang="de"
            ></track>

            {`<!-- 
          We're not using Flash as a fallback option. It should be coverage enough to 
        -->`}
            <p>Your user agent does not support the HTML5 Video element.</p>
          </video>
        </section>
        <section className={classes.articleContent}>
          <Typography
            variant="body2"
            component="p"
            className={classes.movieDescription}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In at elit
            ac neque lacinia fringilla a in ligula. Cras dignissim augue a est
            semper, ut euismod ante vestibulum. Suspendisse ornare posuere
            accumsan. Nulla pretium massa quam, id ullamcorper erat posuere a.
            Vestibulum quis ipsum auctor, pulvinar ante id, tempor est. Sed
            ornare ultrices elementum. Pellentesque habitant morbi tristique
            senectus et netus et malesuada fames ac turpis egestas. Donec vitae
            urna leo. Curabitur nec volutpat dui. In posuere sit amet erat sed
            iaculis. Aliquam in augue nulla. Vivamus luctus quis tellus quis
            luctus. Nunc efficitur sapien neque, at tempus purus sodales quis.
          </Typography>
        </section>
        <section className={classes.articleAction}>
          <Link
            href="#"
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            onClick={() => {}}
            color="textPrimary"
            variant="h6"
          >
            Return to main
          </Link>
        </section>
      </article>
    </MainLayout>
  );
};

import * as React from 'react';
import { TextField, InputAdornment } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import { makeStyles, Theme, createStyles } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    search: {
      maxWidth: `20rem`,
      [theme.breakpoints.down('xs')]: {
        margin: 0,
      },
    },
  }),
);

interface Props {
  searchTerm: string;
  updateSearchTerm: (newSearchTerm: string) => void;
}

export const MovieSearchComponent: React.FC<Props> = (props: Props) => {
  const classes = useStyles(props);
  const { searchTerm, updateSearchTerm } = props;

  return (
    <TextField
      className={classes.search}
      id="search-movie"
      variant="standard"
      label="Search Movie"
      aria-label="Input text here to search movies by name"
      type="text"
      placeholder="Enter movie name"
      value={searchTerm}
      onChange={(e) => updateSearchTerm(e.target.value)}
      fullWidth
      margin="normal"
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};

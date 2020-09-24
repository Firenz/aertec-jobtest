import * as React from 'react';
import { SearchTermContext } from 'core';
import { useDebounce } from 'common/hooks';
import { MovieSearchComponent } from './movie-search.component';

export const MovieSearchContainer: React.FC = () => {
  const context = React.useContext(SearchTermContext);
  const [searchTerm, setSearchTerm] = React.useState<string>(
    context.searchTerm,
  );

  const waitingTime = 500;
  const debouncedSearchTerm = useDebounce(searchTerm, waitingTime);

  React.useEffect(() => {
    context.setSearchTerm(searchTerm);
  }, []);

  React.useEffect(() => {
    context.setSearchTerm(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  return (
    <MovieSearchComponent
      searchTerm={searchTerm}
      updateSearchTerm={setSearchTerm}
    />
  );
};

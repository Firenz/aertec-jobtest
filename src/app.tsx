import * as React from 'react';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import { Router, defaultTheme, SearchTermSessionProvider } from 'core';

export const App: React.FC = () => {
  console.log(process.env.API_KEY);
  return (
    <ThemeProvider theme={defaultTheme}>
      <SearchTermSessionProvider>
        <CssBaseline>
          <Router />
        </CssBaseline>
      </SearchTermSessionProvider>
    </ThemeProvider>
  );
};
